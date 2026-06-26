#!/usr/bin/env node
/**
 * Sincroniza commits locais com o GitHub via API na Vercel
 * (contorna bloqueio HTTPS local → github.com).
 *
 * Uso: node scripts/push-via-vercel.mjs
 */
import { execSync } from "node:child_process";
import { readFileSync } from "node:fs";

const SITE_URL = process.env.SITE_URL ?? "https://jceventos204.vercel.app";
const SYNC_SECRET = process.env.GITHUB_SYNC_SECRET ?? "jceventos204-sync-local-2026";

function git(cmd) {
  return execSync(`git ${cmd}`, { encoding: "utf8" }).trim();
}

function getGitHubToken() {
  const input = "protocol=https\nhost=github.com\n";
  const out = execSync("git credential fill", { input, encoding: "utf8" });
  const pass = out.split("\n").find((l) => l.startsWith("password="));
  if (!pass) throw new Error("Token GitHub não encontrado no credential manager.");
  return pass.slice("password=".length);
}

function isBinary(path) {
  try {
    const buf = readFileSync(path);
    return buf.includes(0);
  } catch {
    return false;
  }
}

function collectChanges(latestOnly) {
  const range = latestOnly ? "HEAD" : "origin/master..HEAD";
  const diff = latestOnly ? git("diff-tree --no-commit-id --name-status -r HEAD") : git(`diff --name-status ${range}`);
  if (!diff) {
    console.log("Nada para sincronizar — já está em dia com origin/master.");
    process.exit(0);
  }

  const files = [];
  for (const line of diff.split("\n").filter(Boolean)) {
    const [status, ...rest] = line.split("\t");
    const path = rest.join("\t");

    if (status.startsWith("D")) {
      files.push({ path, deleted: true });
      continue;
    }

    const binary = isBinary(path);
    const content = readFileSync(path);
    files.push({
      path,
      content: binary ? content.toString("base64") : content.toString("utf8"),
      encoding: binary ? "base64" : "utf-8",
    });
  }

  return files;
}

async function main() {
  const latestOnly = process.argv.includes("--latest");
  const files = collectChanges(latestOnly);
  const message = git("log -1 --format=%B");
  const token = getGitHubToken();

  console.log(`Enviando ${files.length} arquivo(s) via ${SITE_URL}/api/github-sync ...`);

  const res = await fetch(`${SITE_URL}/api/github-sync`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      secret: SYNC_SECRET,
      token,
      message,
      files,
    }),
  });

  const data = await res.json();
  if (!res.ok) {
    console.error("Falha:", data);
    process.exit(1);
  }

  console.log("GitHub atualizado:", data);
  if (data.commit) {
    try {
      execSync(`git update-ref refs/remotes/origin/master ${data.commit}`);
      console.log("Ref local origin/master atualizada.");
    } catch {
      console.log("Código no GitHub OK. Quando a rede permitir: git fetch origin && git reset --hard origin/master");
    }
  }
}

main().catch((err) => {
  console.error(err.message ?? err);
  process.exit(1);
});

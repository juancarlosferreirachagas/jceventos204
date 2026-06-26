import { NextRequest, NextResponse } from "next/server";

type FileChange = {
  path: string;
  content?: string;
  encoding?: "utf-8" | "base64";
  deleted?: boolean;
};

type SyncPayload = {
  secret: string;
  token: string;
  message: string;
  branch?: string;
  files: FileChange[];
};

const OWNER = "juancarlosferreirachagas";
const REPO = "jceventos204";

async function gh<T>(token: string, path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`https://api.github.com${path}`, {
    ...init,
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${token}`,
      "User-Agent": "jceventos204-sync",
      "X-GitHub-Api-Version": "2022-11-28",
      ...(init?.headers ?? {}),
    },
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`GitHub API ${path} failed (${res.status}): ${body}`);
  }

  return res.json() as Promise<T>;
}

export async function POST(req: NextRequest) {
  const body = (await req.json()) as SyncPayload;
  const syncSecret = process.env.GITHUB_SYNC_SECRET;

  if (!syncSecret || body.secret?.trim() !== syncSecret.trim()) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!body.token || !body.message || !body.files?.length) {
    return NextResponse.json({ error: "Missing token, message or files" }, { status: 400 });
  }

  const branch = body.branch ?? "master";

  try {
    const ref = await gh<{ object: { sha: string } }>(
      body.token,
      `/repos/${OWNER}/${REPO}/git/ref/heads/${branch}`,
    );
    const parentSha = ref.object.sha;

    const parentCommit = await gh<{ tree: { sha: string } }>(
      body.token,
      `/repos/${OWNER}/${REPO}/git/commits/${parentSha}`,
    );

    const treeItems: { path: string; mode: "100644"; type: "blob"; sha: string | null }[] = [];

    for (const file of body.files) {
      if (file.deleted) {
        treeItems.push({ path: file.path, mode: "100644", type: "blob", sha: null });
        continue;
      }

      if (!file.content) {
        return NextResponse.json({ error: `Missing content for ${file.path}` }, { status: 400 });
      }

      const blob = await gh<{ sha: string }>(body.token, `/repos/${OWNER}/${REPO}/git/blobs`, {
        method: "POST",
        body: JSON.stringify({
          content: file.content,
          encoding: file.encoding ?? "utf-8",
        }),
      });

      treeItems.push({ path: file.path, mode: "100644", type: "blob", sha: blob.sha });
    }

    const tree = await gh<{ sha: string }>(body.token, `/repos/${OWNER}/${REPO}/git/trees`, {
      method: "POST",
      body: JSON.stringify({
        base_tree: parentCommit.tree.sha,
        tree: treeItems,
      }),
    });

    const commit = await gh<{ sha: string }>(body.token, `/repos/${OWNER}/${REPO}/git/commits`, {
      method: "POST",
      body: JSON.stringify({
        message: body.message,
        tree: tree.sha,
        parents: [parentSha],
      }),
    });

    await gh(body.token, `/repos/${OWNER}/${REPO}/git/refs/heads/${branch}`, {
      method: "PATCH",
      body: JSON.stringify({ sha: commit.sha, force: false }),
    });

    return NextResponse.json({
      ok: true,
      commit: commit.sha,
      branch,
      files: body.files.length,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Sync failed";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

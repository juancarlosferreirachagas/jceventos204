/**
 * Baixa fotos REAIS do Instagram @jceventos204.
 * Uso: npm run images:instagram
 *
 * Estrutura para upscaling (Nano Banana → 4K):
 *   public/images/eventos/hero.jpg, servico-*.jpg
 *   public/images/eventos/galeria/casamento-01.jpg …
 *   public/images/kids/galeria/aniversario-01.jpg …
 */

import { writeFile, mkdir } from "fs/promises";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { INSTAGRAM_MAP } from "./instagram-urls.mjs";

const HEADERS = {
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
  Referer: "https://www.instagram.com/jceventos204/",
  Accept: "image/avif,image/webp,image/apng,image/*,*/*;q=0.8",
  "Accept-Language": "pt-BR,pt;q=0.9",
};

const FLYER_SIZES = new Set([176286, 195982]);

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..", "public", "images");

let ok = 0;
let fail = 0;

for (const [rel, url] of Object.entries(INSTAGRAM_MAP)) {
  const out = join(ROOT, rel);
  await mkdir(dirname(out), { recursive: true });
  try {
    const res = await fetch(url, { headers: HEADERS, redirect: "follow" });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    if (buf.length < 80000) throw new Error(`Arquivo pequeno/baixa res (${buf.length} B)`);
    if (FLYER_SIZES.has(buf.length)) throw new Error("Detectado flyer antigo — abortado");
    await writeFile(out, buf);
    console.log(`OK  ${rel} (${(buf.length / 1024).toFixed(0)} KB)`);
    ok++;
  } catch (e) {
    console.error(`FAIL ${rel}:`, e instanceof Error ? e.message : e);
    fail++;
  }
}

console.log(`\n${ok} ok, ${fail} falhas — @jceventos204`);
console.log("Pastas prontas para upscale em public/images/{eventos,kids}/galeria/");

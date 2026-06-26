/**
 * Baixa imagens Unsplash para public/images/
 * Uso: npm run images:download
 */
import { writeFile, mkdir } from "fs/promises";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const u = (id, w = 1600) =>
  `https://images.unsplash.com/${id}?w=${w}&q=90&fit=crop&auto=format`;

const UNSPLASH = {
  eventos: {
    hero: u("photo-1519225421980-715cb0215aed"),
    servicos: {
      casamento: u("photo-1519741497674-611481863552", 1400),
      debutante: u("photo-1516450360452-9312f5e86fc7", 1400),
      corporativo: u("photo-1511578314322-379afb476865", 1400),
      aniversario: u("photo-1530103862676-de8c9debad1d", 1400),
    },
    galeria: {
      casamento01: u("photo-1511285560929-80b456fea0bc", 1200),
      casamento02: u("photo-1511795409834-ef04bbd61622", 1200),
      debutante01: u("photo-1587825140708-dfaf72ae4b04", 1200),
      corporativo01: u("photo-1540575467063-178a50c2df87", 1200),
      aniversario01: u("photo-1492684223066-81342ee5ff30", 1200),
    },
  },
  kids: {
    hero: u("photo-1509666537727-9154b6962292"),
    servicos: {
      aniversarioInfantil: u("photo-1768767278997-136b49ce5d99", 1400),
      festaTematica: u("photo-1762912913371-ccc0a5fca0ae", 1400),
      brinquedoteca: u("photo-1566576912321-d58ddd7a6088", 1400),
    },
    galeria: {
      aniversario01: u("photo-1587654780291-39c9404d746b", 1200),
      tematica01: u("photo-1558618666-fcd25c85cd64", 1200),
      brinquedoteca01: u("photo-1529347599731-ec02b259c9f0", 1200),
      brinquedoteca02: u("photo-1504196606672-aef5c9cefc92", 1200),
    },
  },
};

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..", "public", "images");

const MAP = {
  "eventos/hero.jpg": UNSPLASH.eventos.hero,
  "eventos/servico-casamento.jpg": UNSPLASH.eventos.servicos.casamento,
  "eventos/servico-debutante.jpg": UNSPLASH.eventos.servicos.debutante,
  "eventos/servico-corporativo.jpg": UNSPLASH.eventos.servicos.corporativo,
  "eventos/servico-aniversario.jpg": UNSPLASH.eventos.servicos.aniversario,
  "eventos/galeria-casamento-01.jpg": UNSPLASH.eventos.galeria.casamento01,
  "eventos/galeria-casamento-02.jpg": UNSPLASH.eventos.galeria.casamento02,
  "eventos/galeria-debutante-01.jpg": UNSPLASH.eventos.galeria.debutante01,
  "eventos/galeria-corporativo-01.jpg": UNSPLASH.eventos.galeria.corporativo01,
  "eventos/galeria-aniversario-01.jpg": UNSPLASH.eventos.galeria.aniversario01,
  "kids/hero.jpg": UNSPLASH.kids.hero,
  "kids/servico-aniversario-infantil.jpg": UNSPLASH.kids.servicos.aniversarioInfantil,
  "kids/servico-festa-tematica.jpg": UNSPLASH.kids.servicos.festaTematica,
  "kids/servico-brinquedoteca.jpg": UNSPLASH.kids.servicos.brinquedoteca,
  "kids/galeria-aniversario-01.jpg": UNSPLASH.kids.galeria.aniversario01,
  "kids/galeria-tematica-01.jpg": UNSPLASH.kids.galeria.tematica01,
  "kids/galeria-brinquedoteca-01.jpg": UNSPLASH.kids.galeria.brinquedoteca01,
  "kids/galeria-brinquedoteca-02.jpg": UNSPLASH.kids.galeria.brinquedoteca02,
};

let ok = 0;
let fail = 0;

for (const [rel, url] of Object.entries(MAP)) {
  const out = join(ROOT, rel);
  await mkdir(dirname(out), { recursive: true });
  try {
    const res = await fetch(url, {
      headers: { "User-Agent": "JC-Eventos-204/1.0" },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    await writeFile(out, buf);
    console.log(`OK  ${rel} (${(buf.length / 1024).toFixed(0)} KB)`);
    ok++;
  } catch (e) {
    console.error(`FAIL ${rel}:`, e instanceof Error ? e.message : e);
    fail++;
  }
}

console.log(`\n${ok} ok, ${fail} falhas`);

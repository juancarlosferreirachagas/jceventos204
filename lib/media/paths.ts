/**
 * Caminhos de imagens — fonte única.
 *
 * Padrão: fotos reais em public/images/ (Instagram @jceventos204).
 * Galeria em subpastas galeria/ — nomes semânticos para upscale (4K).
 * Placeholder Unsplash: NEXT_PUBLIC_USE_UNSPLASH=true
 *
 * @see npm run images:instagram
 */

import { UNSPLASH } from "@/lib/media/unsplash";

const USE_UNSPLASH = process.env.NEXT_PUBLIC_USE_UNSPLASH === "true";

const e = (file: string) => `/images/eventos/${file}`;
const k = (file: string) => `/images/kids/${file}`;
const eg = (file: string) => e(`galeria/${file}`);
const kg = (file: string) => k(`galeria/${file}`);

const LOCAL = {
  eventos: {
    hero: e("hero.jpg"),
    servicos: {
      casamento: e("servico-casamento.jpg"),
      debutante: e("servico-debutante.jpg"),
      corporativo: e("servico-corporativo.jpg"),
      aniversario: e("servico-aniversario.jpg"),
    },
    galeria: {
      casamento01: eg("casamento-01.jpg"),
      casamento02: eg("casamento-02.jpg"),
      casamento03: eg("casamento-03.jpg"),
      casamento04: eg("casamento-04.jpg"),
      casamento05: eg("casamento-05.jpg"),
      casamento06: eg("casamento-06.jpg"),
      casamento07: eg("casamento-07.jpg"),
      casamento08: eg("casamento-08.jpg"),
      debutante01: eg("debutante-01.jpg"),
      debutante02: eg("debutante-02.jpg"),
      debutante03: eg("debutante-03.jpg"),
      debutante04: eg("debutante-04.jpg"),
      debutante05: eg("debutante-05.jpg"),
      corporativo01: eg("corporativo-01.jpg"),
      corporativo02: eg("corporativo-02.jpg"),
      aniversario01: eg("aniversario-01.jpg"),
      aniversario02: eg("aniversario-02.jpg"),
    },
  },
  kids: {
    hero: k("hero.jpg"),
    servicos: {
      aniversarioInfantil: k("servico-aniversario-infantil.jpg"),
      festaTematica: k("servico-festa-tematica.jpg"),
      brinquedoteca: k("servico-brinquedoteca.jpg"),
    },
    galeria: {
      aniversario01: kg("aniversario-01.jpg"),
      aniversario02: kg("aniversario-02.jpg"),
      aniversario03: kg("aniversario-03.jpg"),
      aniversario04: kg("aniversario-04.jpg"),
      aniversario05: kg("aniversario-05.jpg"),
      aniversario06: kg("aniversario-06.jpg"),
      tematica01: kg("tematica-01.jpg"),
      tematica02: kg("tematica-02.jpg"),
      tematica03: kg("tematica-03.jpg"),
      tematica04: kg("tematica-04.jpg"),
      tematica05: kg("tematica-05.jpg"),
      brinquedoteca01: kg("brinquedoteca-01.jpg"),
      brinquedoteca02: kg("brinquedoteca-02.jpg"),
      brinquedoteca03: kg("brinquedoteca-03.jpg"),
    },
  },
} as const;

export type MediaPaths = typeof LOCAL;

export const MEDIA_PATHS: MediaPaths = USE_UNSPLASH
  ? (UNSPLASH as unknown as MediaPaths)
  : LOCAL;

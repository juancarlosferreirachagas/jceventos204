/**
 * Fotos Unsplash (alta qualidade) — preview profissional do site.
 * Crédito: https://unsplash.com
 *
 * Para usar fotos reais do espaço, troque para paths locais em paths.ts
 * ou rode: npm run images:download
 */

const u = (photoId: string, w = 1600) =>
  `https://images.unsplash.com/${photoId}?w=${w}&q=90&fit=crop&auto=format`;

export const UNSPLASH = {
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
} as const;

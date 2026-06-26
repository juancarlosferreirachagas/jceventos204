import { ADDRESS } from "@/lib/site";

/** Perfil oficial no Google Maps */
export const GOOGLE_PLACE_URL =
  "https://www.google.com/maps/place/JC+Eventos+204/@-23.497911,-46.8121644,17z/data=!3m1!4b1!4m6!3m5!1s0x94ceff4f4eec8451:0x32d504f55a440d13!8m2!3d-23.497911!4d-46.8121644!16s%2Fg%2F11t3yv2gq2";

/** Aba de avaliações no Google Maps */
export const GOOGLE_MAPS_REVIEWS_URL =
  "https://www.google.com/maps/place/JC+Eventos+204/@-23.497911,-46.8121644,17z/data=!4m8!3m7!1s0x94ceff4f4eec8451:0x32d504f55a440d13!8m2!3d-23.497911!4d-46.8121644!9m1!1b1!16s%2Fg%2F11t3yv2gq2";

/** Média e total públicos no Google (atualize se mudar) */
export const GOOGLE_AVERAGE_RATING = 4.7;
export const GOOGLE_REVIEW_COUNT = 48;

export type Review = {
  id: string;
  author: string;
  rating: 1 | 2 | 3 | 4 | 5;
  text: string;
  source: "Google";
  /** Texto relativo do Google, ex.: "há 4 meses" */
  relativeDate?: string;
};

/**
 * Avaliações reais copiadas do Google Maps — JC Eventos 204.
 * Fonte: https://www.google.com/maps/place/JC+Eventos+204
 */
export const GOOGLE_REVIEWS: Review[] = [
  {
    id: "douglas-souza",
    author: "Douglas Souza",
    rating: 5,
    text: "Fiz aniversário da minha filha! Super indico! Lugar muito limpo e organizado!",
    source: "Google",
    relativeDate: "há 4 meses",
  },
  {
    id: "jane-monteiro",
    author: "Jane monteiro De Oliveira",
    rating: 5,
    text: "Local aconchegante. Limpo, organizado, espaçoso com brinquedo para as crianças.",
    source: "Google",
    relativeDate: "há 4 meses",
  },
  {
    id: "weskley-rafael",
    author: "Weskley Rafael",
    rating: 5,
    text: "É um ambiente muito bom para comemoração de festas! Um local bastante organizado!",
    source: "Google",
    relativeDate: "há 1 ano",
  },
  {
    id: "ariane-oliveira",
    author: "Ariane Oliveira",
    rating: 4,
    text: "Um bom espaço, tem fraldário, cozinha, local para DJ, entrada e saída facilitada.",
    source: "Google",
    relativeDate: "há 1 ano",
  },
  {
    id: "josiane-leal",
    author: "Josiane de Sá Leal",
    rating: 5,
    text: "Excelente atendimento. Espaço muito lindo e organizado.",
    source: "Google",
    relativeDate: "há 11 meses",
  },
  {
    id: "claudiney-malaquias",
    author: "Claudiney Malaquias",
    rating: 5,
    text: "Um local excelente para se reunir e deixar boas lembranças.",
    source: "Google",
    relativeDate: "há 1 ano",
  },
  {
    id: "gio-vanices",
    author: "Gio- vanices",
    rating: 5,
    text: "Um lugar muito agradável e com bom espaço.",
    source: "Google",
    relativeDate: "há 2 anos",
  },
  {
    id: "herondina-silva",
    author: "Herondina Silva",
    rating: 5,
    text: "Ótimo ambiente, bem arejado, muito aconchegante. Parabéns!",
    source: "Google",
    relativeDate: "há 3 anos",
  },
];

export const REVIEWS_COPY = {
  title: "O que falam do espaço",
  subtitle: "Avaliações de clientes no Google",
  cta: "Ver todas no Google",
  empty:
    "Confira as avaliações e deixe a sua opinião no Google Maps — ajuda outros a conhecerem o JC Eventos 204.",
  googleLabel: "Google",
  addressHint: ADDRESS.full,
  ratingSummary: (rating: number, count: number) =>
    `${rating.toFixed(1).replace(".", ",")} · ${count} avaliações no Google`,
} as const;

export const SITE_NAME = "JC Eventos 204";

const DIGITS = /\D/g;

export function getWhatsAppE164(): string {
  const fromEnv = process.env.NEXT_PUBLIC_WHATSAPP_E164?.replace(DIGITS, "");
  if (fromEnv && fromEnv.length >= 10) return fromEnv;
  return "5511911430204";
}

export function getWhatsAppHref(message?: string): string {
  const base = `https://wa.me/${getWhatsAppE164()}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export function getWhatsAppDisplay(): string {
  const e = getWhatsAppE164();
  if (e.startsWith("55") && e.length >= 12) {
    const ddd = e.slice(2, 4);
    const rest = e.slice(4);
    if (rest.length === 9) {
      return `(${ddd}) ${rest.slice(0, 5)}-${rest.slice(5)}`;
    }
  }
  return e;
}

export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) return explicit.replace(/\/$/, "");
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "http://localhost:3000";
}

export const INSTAGRAM_URL = "https://www.instagram.com/jceventos204/";
export const INSTAGRAM_HANDLE = "@jceventos204";

export const ADDRESS = {
  street: "Av. Diretriz, 204",
  neighborhood: "Jd. Mutinga",
  city: "Barueri",
  state: "SP",
  full: "Av. Diretriz, 204 — Jd. Mutinga — Barueri — SP",
};

export function getMapsUrl(): string {
  return "https://www.google.com/maps/place/JC+Eventos+204/@-23.497911,-46.8121644,17z/data=!3m1!4b1!4m6!3m5!1s0x94ceff4f4eec8451:0x32d504f55a440d13!8m2!3d-23.497911!4d-46.8121644!16s%2Fg%2F11t3yv2gq2";
}

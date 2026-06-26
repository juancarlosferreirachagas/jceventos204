import { ADDRESS } from "@/lib/site";

/** Coordenadas do JC Eventos 204 (Google Maps / Google Business) */
export const VENUE_LOCATION = {
  lat: -23.497911,
  lng: -46.8121644,
} as const;

/** Feature ID do perfil Google Business */
export const GOOGLE_FEATURE_ID = "0x94ceff4f4eec8451:0x32d504f55a440d13" as const;

const SITE_MAP_QUERY = `JC Eventos 204, ${ADDRESS.street}, ${ADDRESS.city} - ${ADDRESS.state}`;

function mapsApiKey(): string | undefined {
  const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY?.trim();
  return key || undefined;
}

export function getMapEmbedUrl(): string {
  const key = mapsApiKey();
  if (key) {
    return `https://www.google.com/maps/embed/v1/place?key=${encodeURIComponent(key)}&q=${encodeURIComponent(SITE_MAP_QUERY)}&zoom=17`;
  }
  return `https://maps.google.com/maps?q=${encodeURIComponent(ADDRESS.full)}&z=17&output=embed`;
}

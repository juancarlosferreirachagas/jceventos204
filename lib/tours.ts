import { GOOGLE_FEATURE_ID } from "@/lib/maps";
import manifest from "@/public/data/google-tours-manifest.json";

export type SiteAudience = "eventos" | "kids";

/** Tour 360° real do Google Meu Negócio (um panorama por ambiente). */
export type VenueTour = {
  id: string;
  label: string;
  audience: SiteAudience;
  ik: string;
  sourceUrl: string;
  panorama: string;
  thumb: string;
  hint: string;
  defaultYaw: number;
  defaultPitch: number;
  zoom: number;
};

/** Tours oficiais — `npm run images:tour` */
export const VENUE_TOURS: VenueTour[] = manifest.tours.map((t) => ({
  ...t,
  audience: t.audience as SiteAudience,
}));

export const GMB_SCANNED_AT = manifest.scannedAt;

export type VenueTourId = VenueTour["id"];

export function getToursForAudience(audience: SiteAudience): VenueTour[] {
  return VENUE_TOURS.filter((t) => t.audience === audience);
}

export function getTourById(id: string, audience: SiteAudience): VenueTour {
  const tours = getToursForAudience(audience);
  return tours.find((t) => t.id === id) ?? tours[0];
}

export function getTourOpenUrl(tour: VenueTour): string {
  const params = new URLSearchParams({
    iu: tour.sourceUrl.replace(/=w\d+-h\d+[^&]*/, "=w160-h106-k-no-pi-10-ya20-ro0-fo100"),
    ik: tour.ik,
  });
  return `https://www.google.com/local/place/fid/${GOOGLE_FEATURE_ID}/photosphere?${params}`;
}

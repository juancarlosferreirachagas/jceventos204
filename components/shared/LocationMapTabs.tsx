"use client";

import { MapPin, ScanEye } from "lucide-react";
import { getMapEmbedUrl } from "@/lib/maps";
import { cn } from "@/lib/utils";

type LocationMapTabsProps = {
  theme?: "eventos" | "kids";
};

export function LocationMapTabs({ theme = "eventos" }: LocationMapTabsProps) {
  return (
    <div className={cn("overflow-hidden rounded-2xl border", theme === "kids" ? "border-kids-cyan/20" : "border-white/10")}>
      <div
        className={cn(
          "flex flex-wrap items-center justify-between gap-2 border-b px-3 py-2 sm:px-4",
          theme === "kids" ? "border-kids-cyan/15 bg-sky-50" : "border-white/10 bg-white/5",
        )}
      >
        <div className="inline-flex items-center gap-1.5 text-xs font-bold sm:text-sm">
          <MapPin className="h-4 w-4" aria-hidden />
          Localização
        </div>
        <a
          href="#tour-360"
          className={cn(
            "inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-bold transition-colors sm:text-sm",
            theme === "kids" ? "bg-kids-cyan text-white hover:bg-kids-cyan/90" : "bg-jc-gold text-jc-black hover:bg-jc-gold-light",
          )}
        >
          <ScanEye className="h-4 w-4" aria-hidden />
          Tour virtual
        </a>
      </div>

      <div className="relative aspect-[4/3] w-full sm:aspect-[16/10] lg:min-h-[320px] lg:aspect-auto lg:h-[360px]">
        <iframe
          title="Mapa — JC Eventos 204, Barueri"
          src={getMapEmbedUrl()}
          className="absolute inset-0 h-full w-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </div>
  );
}

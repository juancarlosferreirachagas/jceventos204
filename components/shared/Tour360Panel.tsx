"use client";

import { useState } from "react";
import Image from "next/image";
import { getTourById, getToursForAudience, type SiteAudience } from "@/lib/tours";
import { Tour360Viewer } from "@/components/shared/Tour360Viewer";
import { cn } from "@/lib/utils";

type Tour360PanelProps = {
  theme: SiteAudience;
  className?: string;
};

export function Tour360Panel({ theme, className }: Tour360PanelProps) {
  const tours = getToursForAudience(theme);
  const [sceneId, setSceneId] = useState(tours[0]?.id ?? "");
  const scene = getTourById(sceneId, theme);
  const activeIndex = tours.findIndex((t) => t.id === sceneId);

  if (!scene) return null;

  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border shadow-2xl sm:rounded-2xl",
        theme === "kids" ? "border-kids-cyan/20 bg-white" : "border-jc-gold/25 bg-black/50",
        className,
      )}
    >
      <div
        className={cn(
          "flex items-center justify-between gap-3 border-b px-4 py-3",
          theme === "kids" ? "border-kids-cyan/10 bg-white" : "border-white/10 bg-white/[0.04]",
        )}
      >
        <p className={cn("truncate font-display text-base font-semibold sm:text-lg", theme === "kids" ? "text-kids-blue-dark" : "text-white")}>
          {scene.label}
        </p>
        <span className={cn("shrink-0 text-xs font-medium tabular-nums", theme === "kids" ? "text-kids-blue-dark/45" : "text-white/40")}>
          {activeIndex + 1}/{tours.length}
        </span>
      </div>

      <div className="relative min-h-[min(58svh,440px)] w-full sm:min-h-[420px] lg:min-h-[480px]">
        <Tour360Viewer scene={scene} theme={theme} />
      </div>

      <div
        className={cn(
          "border-t px-3 py-3 sm:px-4 sm:py-4",
          theme === "kids" ? "border-kids-cyan/10 bg-sky-50/50" : "border-white/10 bg-black/30",
        )}
        role="tablist"
        aria-label="Selecionar ambiente"
      >
        <div className="-mx-1 flex gap-2.5 overflow-x-auto px-1 pb-0.5 scrollbar-hide snap-x snap-mandatory">
          {tours.map((t) => {
            const active = sceneId === t.id;
            return (
              <button
                key={t.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setSceneId(t.id)}
                className={cn(
                  "w-[5.5rem] shrink-0 snap-start overflow-hidden rounded-lg border-2 transition-all sm:w-24",
                  "min-h-[44px] touch-manipulation",
                  active
                    ? theme === "kids"
                      ? "border-kids-cyan shadow-md shadow-kids-cyan/20"
                      : "border-jc-gold shadow-md shadow-jc-gold/15"
                    : "border-transparent opacity-80 hover:opacity-100",
                )}
              >
                <div className="relative aspect-[2/1] w-full">
                  <Image src={t.thumb} alt="" fill className="object-cover" sizes="96px" />
                </div>
                <span
                  className={cn(
                    "block truncate px-1 py-1.5 text-center text-[10px] font-semibold leading-tight",
                    active
                      ? theme === "kids"
                        ? "bg-kids-cyan text-white"
                        : "bg-jc-gold text-jc-black"
                      : theme === "kids"
                        ? "bg-white text-kids-blue-dark/75"
                        : "bg-black/70 text-white/75",
                  )}
                >
                  {t.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

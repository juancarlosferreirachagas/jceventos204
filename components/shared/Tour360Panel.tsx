"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
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
    <div className={cn("relative", className)}>
      {/* Halo externo */}
      <div
        className={cn(
          "pointer-events-none absolute -inset-1 rounded-2xl opacity-60 blur-xl sm:-inset-2 sm:rounded-3xl",
          theme === "kids" ? "bg-kids-cyan/30" : "bg-jc-gold/20",
        )}
        aria-hidden
      />

      <div
        className={cn(
          "relative overflow-hidden rounded-2xl border shadow-2xl sm:rounded-3xl",
          theme === "kids"
            ? "border-kids-cyan/25 bg-white shadow-kids-cyan/10"
            : "border-jc-gold/30 bg-black/60 shadow-jc-gold/10",
        )}
      >
        <div
          className={cn(
            "flex items-center justify-between gap-3 border-b px-4 py-3.5 sm:px-6 sm:py-4",
            theme === "kids" ? "border-kids-cyan/15 bg-gradient-to-r from-white to-sky-50" : "border-jc-gold/15 bg-gradient-to-r from-black/80 to-[#141414]",
          )}
        >
          <div className="min-w-0">
            <p className={cn("text-[0.625rem] font-bold uppercase tracking-[0.18em]", theme === "kids" ? "text-kids-cyan" : "text-jc-gold/80")}>
              Ambiente
            </p>
            <p className={cn("truncate font-display text-lg font-semibold sm:text-2xl", theme === "kids" ? "text-kids-blue-dark" : "text-white")}>
              {scene.label}
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <span
              className={cn(
                "rounded-full px-2.5 py-1 text-xs font-bold tabular-nums",
                theme === "kids" ? "bg-kids-cyan/15 text-kids-blue-dark" : "bg-jc-gold/15 text-jc-gold-light",
              )}
            >
              {activeIndex + 1} / {tours.length}
            </span>
            <ChevronRight className={cn("h-4 w-4", theme === "kids" ? "text-kids-cyan/50" : "text-jc-gold/40")} aria-hidden />
          </div>
        </div>

        <div className="relative min-h-[min(62svh,480px)] w-full sm:min-h-[440px] lg:min-h-[520px]">
          <Tour360Viewer scene={scene} theme={theme} />
          {/* Vinheta cinematográfica */}
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_42%,rgba(0,0,0,0.45)_100%)]"
            aria-hidden
          />
          <div
            className={cn(
              "pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b to-transparent",
              theme === "kids" ? "from-sky-100/40" : "from-black/50",
            )}
            aria-hidden
          />
        </div>

        <div
          className={cn(
            "border-t px-3 py-3.5 sm:px-5 sm:py-4",
            theme === "kids" ? "border-kids-cyan/10 bg-gradient-to-t from-sky-50 to-white" : "border-jc-gold/10 bg-gradient-to-t from-black to-[#0a0a0a]",
          )}
          role="tablist"
          aria-label="Selecionar ambiente"
        >
          <p className={cn("mb-2.5 text-center text-[0.625rem] font-bold uppercase tracking-[0.16em] sm:text-xs", theme === "kids" ? "text-kids-blue-dark/50" : "text-white/40")}>
            Escolha o ambiente
          </p>
          <div className="-mx-1 flex gap-2.5 overflow-x-auto px-1 pb-0.5 scrollbar-hide snap-x snap-mandatory sm:justify-center sm:overflow-visible sm:flex-wrap">
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
                    "w-[4.75rem] shrink-0 snap-start overflow-hidden rounded-xl border-2 transition-all duration-300 sm:w-[5.5rem]",
                    "min-h-[48px] touch-manipulation",
                    active
                      ? theme === "kids"
                        ? "scale-[1.04] border-kids-cyan shadow-lg shadow-kids-cyan/25"
                        : "scale-[1.04] border-jc-gold shadow-lg shadow-jc-gold/20"
                      : "border-transparent opacity-75 hover:scale-[1.02] hover:opacity-100",
                  )}
                >
                  <div className="relative aspect-[2/1] w-full">
                    <Image src={t.thumb} alt="" fill className="object-cover" sizes="88px" />
                    {active && (
                      <div
                        className={cn(
                          "absolute inset-0 ring-2 ring-inset",
                          theme === "kids" ? "ring-kids-cyan/60" : "ring-jc-gold/50",
                        )}
                        aria-hidden
                      />
                    )}
                  </div>
                  <span
                    className={cn(
                      "block truncate px-1 py-1.5 text-center text-[10px] font-semibold leading-tight sm:text-[11px]",
                      active
                        ? theme === "kids"
                          ? "bg-kids-cyan text-white"
                          : "bg-jc-gold text-jc-black"
                        : theme === "kids"
                          ? "bg-white text-kids-blue-dark/75"
                          : "bg-black/80 text-white/75",
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
    </div>
  );
}

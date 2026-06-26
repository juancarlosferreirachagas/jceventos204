"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { IconWhatsapp } from "@/components/icons";
import { PROMO_LEGAL } from "@/lib/site-legal";
import { getWhatsAppHref } from "@/lib/site";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "jc-promo-dismissed-at";
/** Reexibe a tarja após fechar (ms) */
const REAPPEAR_MS = 12 * 60 * 1000;

type PromoBannerProps = {
  theme?: "eventos" | "kids";
};

function MarqueeTrack({ text, className }: { text: string; className?: string }) {
  const segment = (
    <span className={cn("inline-flex shrink-0 items-center gap-6 pr-6", className)}>
      <span className="font-bold">{text}</span>
      <span aria-hidden className="opacity-40">
        •
      </span>
    </span>
  );

  return (
    <div className="min-w-0 flex-1 overflow-hidden md:hidden" aria-hidden>
      <div className="animate-promo-marquee flex w-max items-center whitespace-nowrap will-change-transform">
        {segment}
        {segment}
      </div>
    </div>
  );
}

export function PromoBanner({ theme = "eventos" }: PromoBannerProps) {
  const [phase, setPhase] = useState<"hidden" | "entering" | "visible" | "leaving">("hidden");
  const isOpenRef = useRef(false);
  const promo = PROMO_LEGAL.weekdayDiscount;
  const ticker = `${promo.headline} — ${promo.subline}`;

  const show = useCallback(() => {
    if (isOpenRef.current) return;
    isOpenRef.current = true;
    setPhase("entering");
    requestAnimationFrame(() => setPhase("visible"));
  }, []);

  useEffect(() => {
    function canReappear() {
      const at = sessionStorage.getItem(STORAGE_KEY);
      return !at || Date.now() - Number(at) > REAPPEAR_MS;
    }

    if (canReappear()) show();

    const interval = window.setInterval(() => {
      if (canReappear()) show();
    }, 60_000);

    return () => clearInterval(interval);
  }, [show]);

  function dismiss() {
    isOpenRef.current = false;
    sessionStorage.setItem(STORAGE_KEY, String(Date.now()));
    setPhase("leaving");
    window.setTimeout(() => setPhase("hidden"), 280);
  }

  if (phase === "hidden") return null;

  return (
    <div
      role="banner"
      className={cn(
        "relative z-[60] w-full overflow-hidden transition-all duration-300 ease-out",
        phase === "entering" && "-translate-y-full opacity-0",
        phase === "visible" && "translate-y-0 opacity-100",
        phase === "leaving" && "-translate-y-full opacity-0",
        theme === "kids" ? "bg-jc-gold text-kids-blue-dark" : "bg-jc-gold text-jc-black",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center gap-2 px-3 py-2 sm:gap-3 sm:px-4 sm:py-2.5">
        <p className="sr-only">
          {promo.headline}. {promo.subline}. {promo.disclaimer}
        </p>

        {/* Desktop / notebook: texto único, sem marquee */}
        <p className="hidden min-w-0 flex-1 truncate text-center text-sm font-bold md:block">{ticker}</p>

        {/* Mobile: marquee */}
        <MarqueeTrack text={ticker} className="text-xs" />

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <a
            href={getWhatsAppHref(promo.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "inline-flex min-h-9 items-center gap-1.5 rounded-sm px-2.5 py-1.5 text-[0.6875rem] font-bold transition-colors duration-200 sm:min-h-10 sm:px-3 sm:text-xs",
              theme === "kids" ? "bg-kids-blue-dark text-white hover:bg-kids-blue-dark/90" : "bg-jc-black text-jc-gold hover:bg-jc-black/90",
            )}
          >
            <IconWhatsapp size="sm" />
            <span className="max-[359px]:hidden sm:inline">{promo.cta}</span>
            <span className="hidden max-[359px]:inline">35% OFF</span>
          </a>
          <button
            type="button"
            onClick={dismiss}
            className="rounded-full p-1 opacity-70 transition-opacity hover:opacity-100"
            aria-label="Fechar promoção"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

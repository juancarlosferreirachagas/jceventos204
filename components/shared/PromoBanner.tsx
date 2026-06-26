"use client";

import { useEffect, useState } from "react";
import { X, Sparkles } from "lucide-react";
import { IconWhatsapp } from "@/components/icons";
import { PROMO_LEGAL } from "@/lib/site-legal";
import { getWhatsAppHref } from "@/lib/site";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "jc-promo-dismissed";

type PromoBannerProps = {
  theme?: "eventos" | "kids";
};

export function PromoBanner({ theme = "eventos" }: PromoBannerProps) {
  const [visible, setVisible] = useState(false);
  const promo = PROMO_LEGAL.weekdayDiscount;

  useEffect(() => {
    if (!sessionStorage.getItem(STORAGE_KEY)) setVisible(true);
  }, []);

  function dismiss() {
    sessionStorage.setItem(STORAGE_KEY, "1");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="banner"
      className={cn(
        "animate-promo-in relative z-[60] w-full",
        theme === "kids"
          ? "bg-gradient-to-r from-kids-yellow via-[#ffe566] to-kids-yellow text-kids-blue-dark"
          : "bg-gradient-to-r from-cta-bar via-[#ffe566] to-cta-bar text-cta-text",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <div className="flex min-w-0 flex-1 items-center gap-2 sm:gap-3">
          <Sparkles className="hidden h-5 w-5 shrink-0 sm:block" aria-hidden />
          <div className="min-w-0">
            <p className="truncate text-sm font-bold sm:text-base">{promo.headline}</p>
            <p className="hidden text-xs opacity-80 sm:block">{promo.subline}</p>
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <a
            href={getWhatsAppHref(promo.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "inline-flex items-center gap-1.5 rounded-sm px-3 py-1.5 text-xs font-bold sm:px-4 sm:text-sm",
              theme === "kids" ? "bg-kids-blue-dark text-white" : "bg-jc-black text-cta-bar",
            )}
          >
            <IconWhatsapp size="sm" />
            {promo.cta}
          </a>
          <button type="button" onClick={dismiss} className="rounded-full p-1 opacity-70 hover:opacity-100" aria-label="Fechar promoção">
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
      <p className="sr-only">{promo.disclaimer}</p>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { IconWhatsapp } from "@/components/icons";
import { PROMO_LEGAL } from "@/lib/site-legal";
import { getWhatsAppHref } from "@/lib/site";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "jc-promo-dismissed";

type PromoBannerProps = {
  theme?: "eventos" | "kids";
};

function MarqueeText({ text, className }: { text: string; className?: string }) {
  const item = (
    <span className={cn("inline-flex shrink-0 items-center gap-4 px-4", className)}>
      <span className="font-bold">{text}</span>
      <span aria-hidden className="opacity-50">
        •
      </span>
    </span>
  );

  return (
    <div className="flex min-w-0 flex-1 overflow-hidden" aria-hidden>
      <div className="animate-promo-marquee flex w-max items-center whitespace-nowrap">
        {item}
        {item}
        {item}
        {item}
      </div>
    </div>
  );
}

export function PromoBanner({ theme = "eventos" }: PromoBannerProps) {
  const [visible, setVisible] = useState(false);
  const promo = PROMO_LEGAL.weekdayDiscount;
  const ticker = `${promo.headline} — ${promo.subline}`;

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
        "animate-promo-in relative z-[60] w-full overflow-hidden",
        theme === "kids"
          ? "bg-gradient-to-r from-kids-yellow via-[#ffe566] to-kids-yellow text-kids-blue-dark"
          : "bg-gradient-to-r from-cta-bar via-[#ffe566] to-cta-bar text-cta-text",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center gap-2 px-2 py-2 sm:gap-3 sm:px-4 sm:py-2.5">
        <p className="sr-only">{promo.headline}. {promo.subline}. {promo.disclaimer}</p>
        <MarqueeText text={ticker} className="text-xs sm:text-sm" />
        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <a
            href={getWhatsAppHref(promo.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "inline-flex items-center gap-1.5 rounded-sm px-2.5 py-1 text-[0.6875rem] font-bold sm:px-3 sm:py-1.5 sm:text-xs",
              theme === "kids" ? "bg-kids-blue-dark text-white" : "bg-jc-black text-cta-bar",
            )}
          >
            <IconWhatsapp size="sm" />
            <span className="hidden sm:inline">{promo.cta}</span>
            <span className="sm:hidden">Promo</span>
          </a>
          <button
            type="button"
            onClick={dismiss}
            className="rounded-full p-1 opacity-70 hover:opacity-100"
            aria-label="Fechar promoção"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

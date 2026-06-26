import { IconWhatsapp } from "@/components/icons";
import { PROMO_LEGAL } from "@/lib/site-legal";
import { getWhatsAppDisplay, getWhatsAppHref } from "@/lib/site";
import { cn } from "@/lib/utils";

type CtaBarProps = {
  theme?: "eventos" | "kids";
  message?: string;
};

export function CtaBar({ theme = "eventos", message }: CtaBarProps) {
  const href = getWhatsAppHref(message ?? PROMO_LEGAL.weekdayDiscount.whatsappMessage);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group flex w-full flex-col items-center justify-center gap-2 px-4 py-5 transition-colors sm:flex-row sm:gap-4",
        theme === "kids" ? "bg-kids-yellow text-kids-blue-dark hover:bg-[#ffe033]" : "bg-cta-bar text-cta-text hover:bg-[#ffe033]",
      )}
    >
      <span className="text-lg font-bold tracking-tight sm:text-xl">Marque já a sua visita!</span>
      <span className="inline-flex items-center gap-2 text-base font-bold sm:text-lg">
        <IconWhatsapp size="md" />
        {getWhatsAppDisplay()}
      </span>
    </a>
  );
}

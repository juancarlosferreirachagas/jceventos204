import Image from "next/image";
import { SITE_CREDITS } from "@/lib/site-legal";
import { cn } from "@/lib/utils";

type FooterCreditsProps = {
  theme?: "eventos" | "kids";
};

export function FooterCredits({ theme = "eventos" }: FooterCreditsProps) {
  const { developer } = SITE_CREDITS;

  return (
    <div
      className={cn(
        "flex flex-col items-center gap-2 text-center",
        theme === "kids" ? "text-white/55" : "text-white/48",
      )}
    >
      <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1.5">
        <span className="text-[0.625rem] font-medium sm:text-[0.6875rem]">{developer.label}</span>
        <a
          href={developer.url}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "inline-flex items-center rounded-md bg-black/90 px-2 py-1 opacity-95 transition-opacity hover:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
            theme === "kids" ? "focus-visible:outline-kids-cyan" : "focus-visible:outline-jc-gold",
          )}
          aria-label={`${developer.name} — abrir site`}
        >
          <Image
            src={developer.logoSrc}
            alt={developer.logoAlt}
            width={2000}
            height={1090}
            className="h-5 w-auto max-w-[9.5rem] object-contain object-left sm:h-6 sm:max-w-[10.5rem]"
          />
        </a>
      </div>
    </div>
  );
}

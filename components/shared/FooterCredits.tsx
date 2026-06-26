import { SITE_CREDITS } from "@/lib/site-legal";
import { cn } from "@/lib/utils";

type FooterCreditsProps = {
  theme?: "eventos" | "kids";
};

export function FooterCredits({ theme = "eventos" }: FooterCreditsProps) {
  const { developer } = SITE_CREDITS;

  return (
    <p
      className={cn(
        "text-center text-[0.625rem] leading-relaxed sm:text-[0.6875rem]",
        theme === "kids" ? "text-white/55" : "text-white/48",
      )}
    >
      {developer.label}{" "}
      <a
        href={developer.url}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "font-semibold underline decoration-white/25 underline-offset-2 transition-colors hover:decoration-current",
          theme === "kids" ? "text-kids-cyan-light hover:text-white" : "text-jc-gold hover:text-jc-gold-light",
        )}
      >
        {developer.name}
      </a>
    </p>
  );
}

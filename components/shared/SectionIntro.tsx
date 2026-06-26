import { cn } from "@/lib/utils";

type SectionIntroProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  theme?: "eventos" | "kids";
  /** Fundo da seção — define contraste do título e subtítulo */
  surface?: "dark" | "light";
  align?: "left" | "center";
  className?: string;
};

export function SectionIntro({
  eyebrow,
  title,
  subtitle,
  theme = "eventos",
  surface,
  align = "left",
  className,
}: SectionIntroProps) {
  const isKids = theme === "kids";
  const onLight = surface === "light" || (surface === undefined && isKids);
  const centered = align === "center";

  return (
    <header
      className={cn(
        "mb-6 sm:mb-8",
        centered && "mx-auto max-w-2xl text-center",
        !centered && "max-w-2xl",
        className,
      )}
    >
      <p
        className={cn(
          "text-[0.6875rem] font-bold uppercase tracking-[0.2em] sm:text-xs",
          isKids ? "text-kids-cyan" : "text-jc-gold",
        )}
      >
        {eyebrow}
      </p>
      <h2
        className={cn(
          "mt-3 text-balance font-display text-[1.625rem] font-bold leading-[1.15] sm:mt-4 sm:text-3xl lg:text-4xl",
          onLight ? (isKids ? "text-kids-blue-dark" : "text-jc-black") : "text-white",
        )}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={cn(
            "mt-4 max-w-xl text-pretty text-[0.9375rem] leading-relaxed sm:mt-5 sm:text-base lg:text-lg",
            centered && "mx-auto",
            onLight
              ? isKids
                ? "text-kids-blue-dark/72"
                : "text-neutral-600"
              : isKids
                ? "text-kids-blue-dark/72"
                : "text-white/70",
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </header>
  );
}

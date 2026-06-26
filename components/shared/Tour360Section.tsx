import { ScanEye, Sparkles } from "lucide-react";
import { Tour360Panel } from "@/components/shared/Tour360Panel";
import { getToursForAudience, type SiteAudience } from "@/lib/tours";
import { cn } from "@/lib/utils";

type Tour360SectionProps = {
  eyebrow: string;
  title: string;
  emphasis: string;
  subtitle: string;
  badge?: string;
  theme: SiteAudience;
};

export function Tour360Section({ eyebrow, title, emphasis, subtitle, badge, theme }: Tour360SectionProps) {
  const sceneCount = getToursForAudience(theme).length;
  const badgeLabel = badge ?? `${sceneCount} ambientes`;

  return (
    <section
      id="tour-360"
      className={cn(
        "relative overflow-hidden py-14 sm:py-20 lg:py-24",
        theme === "kids"
          ? "bg-gradient-to-b from-white via-sky-50 to-[#e8f6fc]"
          : "bg-gradient-to-b from-[#0d0d0d] via-jc-black to-[#050505]",
      )}
    >
      {/* Atmosfera */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div
          className={cn(
            "absolute -left-1/4 top-0 h-[28rem] w-[28rem] rounded-full blur-3xl animate-tour-glow",
            theme === "kids" ? "bg-kids-cyan/25" : "bg-jc-gold/12",
          )}
        />
        <div
          className={cn(
            "absolute -right-1/4 bottom-0 h-[24rem] w-[24rem] rounded-full blur-3xl animate-tour-glow [animation-delay:2s]",
            theme === "kids" ? "bg-kids-yellow/20" : "bg-jc-gold-light/8",
          )}
        />
        {theme === "eventos" && (
          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgba(201,162,39,.5) 1px, transparent 1px), linear-gradient(rgba(201,162,39,.5) 1px, transparent 1px)",
              backgroundSize: "72px 72px",
            }}
          />
        )}
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="animate-fade-in-up flex flex-wrap items-center justify-center gap-2">
            <span
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-overline",
                theme === "kids"
                  ? "border-kids-cyan/30 bg-white/80 text-kids-cyan"
                  : "border-jc-gold/30 bg-white/5 text-jc-gold",
              )}
            >
              <ScanEye className="h-3.5 w-3.5" aria-hidden />
              {eyebrow}
            </span>
            <span
              className={cn(
                "inline-flex items-center gap-1 rounded-full px-3 py-1 text-[0.625rem] font-bold uppercase tracking-wider",
                theme === "kids" ? "bg-kids-yellow/90 text-kids-blue-dark" : "bg-jc-gold/15 text-jc-gold-light",
              )}
            >
              <Sparkles className="h-3 w-3" aria-hidden />
              {badgeLabel}
            </span>
          </div>

          <h2
            className={cn(
              "animate-fade-in-up mt-5 font-display text-[2rem] font-semibold leading-[1.1] sm:text-4xl lg:text-5xl [animation-delay:80ms]",
              theme === "kids" ? "text-kids-blue-dark" : "text-flyer-headline",
            )}
          >
            {title}
            <br />
            <em className="text-gold-gradient tour-title-shimmer not-italic">{emphasis}</em>
          </h2>

          <div
            className={cn(
              "animate-fade-in-up mx-auto mt-4 h-px w-16 [animation-delay:120ms]",
              theme === "kids" ? "bg-gradient-to-r from-transparent via-kids-cyan to-transparent" : "bg-gradient-to-r from-transparent via-jc-gold to-transparent",
            )}
            aria-hidden
          />

          <p
            className={cn(
              "animate-fade-in-up mx-auto mt-5 max-w-2xl text-sm leading-relaxed sm:text-base lg:text-lg [animation-delay:160ms]",
              theme === "kids" ? "text-kids-blue-dark/75" : "text-white/65",
            )}
          >
            {subtitle}
          </p>
        </div>

        <div className="animate-fade-in-up mt-10 sm:mt-12 lg:mt-14 [animation-delay:220ms]">
          <Tour360Panel theme={theme} />
        </div>
      </div>
    </section>
  );
}

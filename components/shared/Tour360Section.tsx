import { Tour360Panel } from "@/components/shared/Tour360Panel";
import type { SiteAudience } from "@/lib/tours";
import { cn } from "@/lib/utils";

type Tour360SectionProps = {
  title: string;
  subtitle: string;
  theme: SiteAudience;
};

export function Tour360Section({ title, subtitle, theme }: Tour360SectionProps) {
  return (
    <section id="tour-360" className={cn("py-12 sm:py-16 lg:py-20", theme === "kids" ? "bg-sky-50" : "bg-jc-black")}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className={cn("text-overline", theme === "kids" ? "text-kids-cyan" : "text-jc-gold")}>Tour virtual</p>
          <h2
            className={cn(
              "mt-2 font-display text-[1.75rem] font-semibold leading-tight sm:text-3xl lg:text-4xl",
              theme === "kids" ? "text-kids-blue-dark" : "text-white",
            )}
          >
            {title}
          </h2>
          <p className={cn("mt-3 text-sm leading-relaxed sm:text-base", theme === "kids" ? "text-kids-blue-dark/70" : "text-white/60")}>
            {subtitle}
          </p>
        </div>

        <div className="mt-8 sm:mt-10">
          <Tour360Panel theme={theme} />
        </div>
      </div>
    </section>
  );
}

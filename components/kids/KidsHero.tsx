import { SiteImage } from "@/components/shared/SiteImage";
import { CtaButton, CtaRow } from "@/components/shared/CtaButton";
import { KIDS, kidsWhatsApp } from "@/lib/site-copy";

export function KidsHero() {
  const { hero } = KIDS;

  return (
    <section className="relative flex min-h-[min(78svh,720px)] items-end sm:min-h-[min(82svh,760px)] lg:min-h-[72vh]">
      <SiteImage media={hero.image} priority sizes="100vw" />
      <div className="absolute inset-0 bg-gradient-to-t from-kids-blue-dark via-kids-blue-dark/90 to-kids-blue-dark/50" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-8 pt-24 sm:px-6 sm:pb-10 sm:pt-28 lg:px-8 lg:pb-14">
        <p className="animate-fade-in-up text-[0.6875rem] font-bold uppercase tracking-[0.22em] text-jc-gold sm:text-xs sm:tracking-[0.28em]">
          {hero.eyebrow}
        </p>
        <h1 className="animate-fade-in-up mt-3 max-w-[16ch] text-balance font-display text-[1.75rem] font-bold leading-[1.12] text-white [animation-delay:60ms] sm:mt-4 sm:max-w-2xl sm:text-4xl sm:leading-[1.1] lg:text-5xl xl:text-6xl">
          {hero.headline}
          <span className="mt-1 block text-jc-gold sm:mt-2">{hero.emphasis}</span>
        </h1>
        <p className="animate-fade-in-up mt-4 max-w-md text-pretty text-[0.9375rem] leading-relaxed text-white/88 [animation-delay:120ms] sm:max-w-xl sm:text-lg">
          {hero.subheadline}
        </p>
        <CtaRow className="animate-fade-in-up mt-6 [animation-delay:180ms] sm:mt-7">
          <CtaButton href={kidsWhatsApp()} theme="kids" showWhatsapp className="w-full sm:w-auto">
            {hero.cta}
          </CtaButton>
          <CtaButton href="#servicos" theme="kids" variant="outline" external={false} className="w-full sm:w-auto">
            {hero.ctaSecondary}
          </CtaButton>
        </CtaRow>
      </div>
    </section>
  );
}

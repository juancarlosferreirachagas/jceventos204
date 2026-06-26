import { SiteImage } from "@/components/shared/SiteImage";
import { CtaButton, CtaRow } from "@/components/shared/CtaButton";
import { EVENTOS, eventosWhatsApp } from "@/lib/site-copy";

export function EventosHero() {
  const { hero } = EVENTOS;

  return (
    <section className="relative flex min-h-[min(78svh,720px)] items-end sm:min-h-[min(82svh,760px)] lg:min-h-[72vh]">
      <SiteImage media={hero.image} priority sizes="100vw" />
      <div className="absolute inset-0 bg-gradient-to-t from-jc-black via-jc-black/75 to-jc-black/30" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-8 pt-24 sm:pb-10 sm:pt-28 lg:px-8 lg:pb-14">
        <p className="animate-fade-in-up text-xs font-bold uppercase tracking-[0.3em] text-jc-gold">{hero.eyebrow}</p>
        <h1 className="animate-fade-in-up mt-3 max-w-3xl font-display text-3xl font-bold leading-tight text-white [animation-delay:60ms] sm:text-5xl lg:text-6xl">
          {hero.headline}{" "}
          <span className="text-jc-gold">{hero.emphasis}</span>
        </h1>
        <p className="animate-fade-in-up mt-4 max-w-xl text-base leading-relaxed text-white/80 [animation-delay:120ms] sm:text-lg">
          {hero.subheadline}
        </p>
        <CtaRow className="animate-fade-in-up mt-6 [animation-delay:180ms] sm:mt-7">
          <CtaButton href={eventosWhatsApp()} theme="eventos" showWhatsapp className="w-full sm:w-auto">
            {hero.cta}
          </CtaButton>
          <CtaButton href="#servicos" theme="eventos" variant="outline" external={false} className="w-full sm:w-auto">
            {hero.ctaSecondary}
          </CtaButton>
        </CtaRow>
      </div>
    </section>
  );
}

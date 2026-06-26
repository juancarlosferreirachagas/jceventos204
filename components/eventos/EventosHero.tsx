import { SiteImage } from "@/components/shared/SiteImage";
import { CtaButton } from "@/components/shared/CtaButton";
import { EVENTOS, eventosWhatsApp } from "@/lib/site-copy";

export function EventosHero() {
  const { hero } = EVENTOS;

  return (
    <section className="relative flex min-h-[min(100svh,920px)] items-end lg:min-h-[88vh]">
      <SiteImage media={hero.image} priority sizes="100vw" />
      <div className="absolute inset-0 bg-gradient-to-t from-jc-black via-jc-black/75 to-jc-black/30" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-10 pt-28 sm:pb-12 sm:pt-32 lg:px-8 lg:pb-20">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-jc-gold-light">{hero.eyebrow}</p>
        <h1 className="text-flyer-headline mt-3 max-w-3xl font-display text-3xl font-bold leading-tight sm:mt-4 sm:text-5xl lg:text-6xl">
          {hero.headline}{" "}
          <em className="text-gold-gradient not-italic">{hero.emphasis}</em>
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">{hero.subheadline}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <CtaButton href={eventosWhatsApp()} theme="eventos">{hero.cta}</CtaButton>
          <CtaButton href="#servicos" theme="eventos" variant="outline" external={false}>{hero.ctaSecondary}</CtaButton>
        </div>
      </div>
    </section>
  );
}

import { SiteImage } from "@/components/shared/SiteImage";
import { CtaButton } from "@/components/shared/CtaButton";
import { LogoKids } from "@/components/LogoKids";
import { KIDS, kidsWhatsApp } from "@/lib/site-copy";

export function KidsHero() {
  const { hero } = KIDS;

  return (
    <section className="relative flex min-h-[min(100svh,920px)] items-end lg:min-h-[88vh]">
      <SiteImage media={hero.image} priority sizes="100vw" />
      <div className="absolute inset-0 bg-gradient-to-t from-kids-blue-dark via-kids-blue-dark/80 to-kids-cyan/35" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-10 pt-28 sm:pb-12 sm:pt-32 lg:px-8 lg:pb-20">
        <LogoKids size="md" className="hidden items-start sm:flex" />
        <p className="mt-2 text-xs font-bold uppercase tracking-[0.3em] text-kids-yellow sm:mt-4">{hero.eyebrow}</p>
        <h1 className="text-flyer-headline mt-2 max-w-3xl font-kids text-3xl font-bold leading-tight text-white sm:mt-3 sm:text-5xl lg:text-6xl">
          {hero.headline}{" "}
          <em className="text-kids-yellow not-italic">{hero.emphasis}</em>
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">{hero.subheadline}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <CtaButton href={kidsWhatsApp()} theme="kids">{hero.cta}</CtaButton>
          <CtaButton href="#servicos" theme="kids" variant="outline" external={false}>{hero.ctaSecondary}</CtaButton>
        </div>
      </div>
    </section>
  );
}

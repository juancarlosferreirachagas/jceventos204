import { SiteImage } from "@/components/shared/SiteImage";
import { CtaButton } from "@/components/shared/CtaButton";
import { EVENTOS } from "@/lib/site-copy";
import { getWhatsAppHref } from "@/lib/site";

export function EventosServices() {
  const { servicos } = EVENTOS;

  return (
    <section id="servicos" className="bg-jc-black py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-bold uppercase tracking-widest text-jc-gold">{servicos.title}</p>
        <h2 className="mt-2 font-display text-3xl font-bold text-white sm:text-4xl">{servicos.subtitle}</h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {servicos.items.map((item) => (
            <article
              key={item.title}
              className="group overflow-hidden rounded-2xl border border-jc-gold/15 bg-white/[0.03] transition-colors hover:border-jc-gold/40"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <SiteImage
                  media={item.image}
                  className="transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-jc-black/80 to-transparent" />
                <h3 className="absolute bottom-4 left-4 font-display text-2xl font-bold text-white">{item.title}</h3>
              </div>
              <div className="p-5">
                <p className="text-sm leading-relaxed text-white/70">{item.description}</p>
                <CtaButton
                  href={getWhatsAppHref(item.whatsappMessage)}
                  theme="eventos"
                  variant="secondary"
                  className="mt-4 w-full text-xs sm:w-auto sm:text-sm"
                >
                  {item.cta}
                </CtaButton>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

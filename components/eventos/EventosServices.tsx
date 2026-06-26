import { SiteImage } from "@/components/shared/SiteImage";
import { CtaButton } from "@/components/shared/CtaButton";
import { SectionIntro } from "@/components/shared/SectionIntro";
import { EVENTOS } from "@/lib/site-copy";
import { getWhatsAppHref } from "@/lib/site";

export function EventosServices() {
  const { servicos } = EVENTOS;

  return (
    <section id="servicos" className="section-py content-auto bg-jc-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionIntro
          eyebrow={servicos.title}
          title={servicos.subtitle}
          subtitle="Casamento, debutante, corporativo ou aniversário — cada card abre conversa direta no WhatsApp."
          theme="eventos"
          surface="dark"
        />

        <div className="grid gap-6 sm:grid-cols-2 sm:gap-7">
          {servicos.items.map((item) => (
            <article
              key={item.title}
              className="group overflow-hidden rounded-2xl border border-jc-gold/15 bg-white/[0.03] transition-[border-color,background-color] duration-200 hover:border-jc-gold/40 hover:bg-white/[0.05]"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <SiteImage
                  media={item.image}
                  className="transition-transform duration-500 group-hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-jc-black/80 to-transparent" />
                <h3 className="absolute bottom-4 left-4 font-display text-xl font-bold text-white sm:text-2xl">{item.title}</h3>
              </div>
              <div className="p-4 sm:p-5">
                <p className="text-sm leading-relaxed text-white/70">{item.description}</p>
                <CtaButton
                  href={getWhatsAppHref(item.whatsappMessage)}
                  theme="eventos"
                  variant="secondary"
                  size="sm"
                  showWhatsapp
                  className="mt-4 w-full sm:w-auto"
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

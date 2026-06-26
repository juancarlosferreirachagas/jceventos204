import { SiteImage } from "@/components/shared/SiteImage";
import { CtaButton } from "@/components/shared/CtaButton";
import { SectionIntro } from "@/components/shared/SectionIntro";
import { KIDS } from "@/lib/site-copy";
import { getWhatsAppHref } from "@/lib/site";

export function KidsServices() {
  const { servicos } = KIDS;

  return (
    <section id="servicos" className="section-py content-auto bg-gradient-to-b from-sky-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionIntro
          eyebrow={servicos.title}
          title={servicos.subtitle}
          subtitle="Aniversário, tema ou brinquedoteca — escolha o pacote e monte a proposta com a nossa equipe."
          theme="kids"
          surface="light"
        />

        <div className="grid gap-6 sm:gap-8 lg:grid-cols-3">
          {servicos.items.map((item) => (
            <article
              key={item.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-kids-cyan/20 bg-white shadow-md shadow-kids-cyan/5 transition-[border-color,box-shadow] duration-200 hover:border-kids-cyan/40 sm:rounded-3xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <SiteImage
                  media={item.image}
                  className="transition-transform duration-500 group-hover:scale-[1.02]"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3 className="font-display text-lg font-bold text-kids-blue-dark sm:text-xl">{item.title}</h3>
                <p className="mt-2 flex-1 text-pretty text-sm leading-relaxed text-kids-blue-dark/72 sm:text-[0.9375rem]">
                  {item.description}
                </p>
                <CtaButton
                  href={getWhatsAppHref(item.whatsappMessage)}
                  theme="kids"
                  className="mt-5 w-full text-xs sm:text-sm"
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

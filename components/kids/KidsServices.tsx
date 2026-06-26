import { SiteImage } from "@/components/shared/SiteImage";
import { CtaButton } from "@/components/shared/CtaButton";
import { KIDS } from "@/lib/site-copy";
import { getWhatsAppHref } from "@/lib/site";

export function KidsServices() {
  const { servicos } = KIDS;

  return (
    <section id="servicos" className="bg-gradient-to-b from-sky-50 to-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-bold uppercase tracking-widest text-kids-cyan">{servicos.title}</p>
        <h2 className="mt-2 font-kids text-3xl font-bold text-kids-blue-dark sm:text-4xl">{servicos.subtitle}</h2>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {servicos.items.map((item) => (
            <article
              key={item.title}
              className="group overflow-hidden rounded-3xl border-4 border-kids-cyan/20 bg-white shadow-lg shadow-kids-cyan/10 transition-transform hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <SiteImage
                  media={item.image}
                  className="transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
              <div className="p-5">
                <h3 className="font-kids text-xl font-bold text-kids-blue-dark">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-kids-blue-dark/70">{item.description}</p>
                <CtaButton
                  href={getWhatsAppHref(item.whatsappMessage)}
                  theme="kids"
                  className="mt-4 w-full text-xs sm:text-sm"
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

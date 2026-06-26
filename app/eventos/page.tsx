import { EventosHero } from "@/components/eventos/EventosHero";
import { EventosServices } from "@/components/eventos/EventosServices";
import { DiferenciaisSection } from "@/components/shared/DiferenciaisSection";
import { EstruturaSection } from "@/components/shared/EstruturaSection";
import { GaleriaSection } from "@/components/shared/GaleriaSection";
import { FaqSection } from "@/components/shared/FaqSection";
import { ReviewsSection } from "@/components/shared/ReviewsSection";
import { Tour360Section } from "@/components/shared/Tour360Section";
import { EVENTOS } from "@/lib/site-copy";
import { EVENTOS_FAQ } from "@/lib/site-faq";

export default function EventosPage() {
  const { diferenciais } = EVENTOS;

  return (
    <>
      <EventosHero />
      <EventosServices />
      <Tour360Section {...EVENTOS.tour360} theme="eventos" />
      <GaleriaSection
        title={EVENTOS.galeria.title}
        subtitle={EVENTOS.galeria.subtitle}
        filters={EVENTOS.galeria.filters}
        items={EVENTOS.galeria.items}
        theme="eventos"
      />
      <EstruturaSection data={EVENTOS.estrutura} theme="eventos" />
      <DiferenciaisSection
        title={diferenciais.title}
        subtitle={diferenciais.subtitle}
        items={diferenciais.items}
        theme="eventos"
      />
      <FaqSection items={EVENTOS_FAQ} theme="eventos" />
      <ReviewsSection theme="eventos" />
    </>
  );
}

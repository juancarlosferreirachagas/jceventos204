import { EventosHero } from "@/components/eventos/EventosHero";
import { EventosServices } from "@/components/eventos/EventosServices";
import { AmenitiesStrip } from "@/components/shared/AmenitiesStrip";
import { EventosDiferenciais } from "@/components/eventos/EventosDiferenciais";
import { GaleriaSection } from "@/components/shared/GaleriaSection";
import { ReviewsSection } from "@/components/shared/ReviewsSection";
import { Tour360Section } from "@/components/shared/Tour360Section";
import { ContatoSection } from "@/components/shared/ContatoSection";
import { EVENTOS } from "@/lib/site-copy";

export default function EventosPage() {
  return (
    <>
      <EventosHero />
      <EventosServices />
      <AmenitiesStrip title={EVENTOS.amenities.title} items={EVENTOS.amenities.items} theme="eventos" />
      <EventosDiferenciais />
      <Tour360Section {...EVENTOS.tour360} theme="eventos" />
      <GaleriaSection
        title={EVENTOS.galeria.title}
        subtitle={EVENTOS.galeria.subtitle}
        filters={EVENTOS.galeria.filters}
        items={EVENTOS.galeria.items}
        theme="eventos"
      />
      <ReviewsSection theme="eventos" />
      <ContatoSection title={EVENTOS.contato.title} subtitle={EVENTOS.contato.subtitle} theme="eventos" />
    </>
  );
}

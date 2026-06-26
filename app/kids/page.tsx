import { KidsHero } from "@/components/kids/KidsHero";
import { KidsServices } from "@/components/kids/KidsServices";
import { AmenitiesStrip } from "@/components/shared/AmenitiesStrip";
import { KidsDiferenciais } from "@/components/kids/KidsDiferenciais";
import { GaleriaSection } from "@/components/shared/GaleriaSection";
import { ReviewsSection } from "@/components/shared/ReviewsSection";
import { ContatoSection } from "@/components/shared/ContatoSection";
import { KIDS } from "@/lib/site-copy";

export default function KidsPage() {
  return (
    <>
      <KidsHero />
      <KidsServices />
      <AmenitiesStrip title={KIDS.amenities.title} items={KIDS.amenities.items} theme="kids" />
      <KidsDiferenciais />
      <GaleriaSection
        title={KIDS.galeria.title}
        subtitle={KIDS.galeria.subtitle}
        filters={KIDS.galeria.filters}
        items={KIDS.galeria.items}
        theme="kids"
      />
      <ReviewsSection theme="kids" />
      <ContatoSection title={KIDS.contato.title} subtitle={KIDS.contato.subtitle} theme="kids" />
    </>
  );
}

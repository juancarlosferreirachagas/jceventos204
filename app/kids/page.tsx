import { KidsHero } from "@/components/kids/KidsHero";
import { KidsServices } from "@/components/kids/KidsServices";
import { DiferenciaisSection } from "@/components/shared/DiferenciaisSection";
import { EstruturaSection } from "@/components/shared/EstruturaSection";
import { GaleriaSection } from "@/components/shared/GaleriaSection";
import { FaqSection } from "@/components/shared/FaqSection";
import { ReviewsSection } from "@/components/shared/ReviewsSection";
import { Tour360Section } from "@/components/shared/Tour360Section";
import { KIDS } from "@/lib/site-copy";
import { KIDS_FAQ } from "@/lib/site-faq";

export default function KidsPage() {
  const { diferenciais } = KIDS;

  return (
    <>
      <KidsHero />
      <KidsServices />
      <Tour360Section {...KIDS.tour360} theme="kids" />
      <GaleriaSection
        title={KIDS.galeria.title}
        subtitle={KIDS.galeria.subtitle}
        filters={KIDS.galeria.filters}
        items={KIDS.galeria.items}
        theme="kids"
      />
      <EstruturaSection data={KIDS.estrutura} theme="kids" />
      <DiferenciaisSection
        title={diferenciais.title}
        subtitle={diferenciais.subtitle}
        items={diferenciais.items}
        theme="kids"
      />
      <FaqSection items={KIDS_FAQ} theme="kids" />
      <ReviewsSection theme="kids" />
    </>
  );
}

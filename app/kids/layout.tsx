import type { Metadata } from "next";
import { KidsHeader } from "@/components/kids/KidsHeader";
import { KidsFooter } from "@/components/kids/KidsFooter";
import { PromoBanner } from "@/components/shared/PromoBanner";
import { WhatsAppFloat } from "@/components/shared/WhatsAppFloat";
import { KIDS } from "@/lib/site-copy";
import { OG_IMAGES } from "@/lib/media";

export const metadata: Metadata = {
  title: KIDS.meta.title,
  description: KIDS.meta.description,
  openGraph: {
    title: KIDS.meta.title,
    description: KIDS.meta.description,
    images: [{ url: OG_IMAGES.kids, width: 1200, height: 630 }],
  },
};

export default function KidsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div data-theme="kids" className="min-h-screen bg-sky-50">
      <PromoBanner theme="kids" />
      <KidsHeader />
      <main>{children}</main>
      <KidsFooter />
      <WhatsAppFloat theme="kids" />
    </div>
  );
}

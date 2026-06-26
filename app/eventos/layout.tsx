import type { Metadata } from "next";
import { EventosHeader } from "@/components/eventos/EventosHeader";
import { EventosFooter } from "@/components/eventos/EventosFooter";
import { PromoBanner } from "@/components/shared/PromoBanner";
import { WhatsAppFloat } from "@/components/shared/WhatsAppFloat";
import { EVENTOS } from "@/lib/site-copy";
import { OG_IMAGES } from "@/lib/media";

export const metadata: Metadata = {
  title: EVENTOS.meta.title,
  description: EVENTOS.meta.description,
  openGraph: {
    title: EVENTOS.meta.title,
    description: EVENTOS.meta.description,
    images: [{ url: OG_IMAGES.eventos, width: 1200, height: 630 }],
  },
};

export default function EventosLayout({ children }: { children: React.ReactNode }) {
  return (
    <div data-theme="eventos" className="min-h-screen bg-jc-black">
      <PromoBanner theme="eventos" />
      <EventosHeader />
      <main>{children}</main>
      <EventosFooter />
      <WhatsAppFloat theme="eventos" />
    </div>
  );
}

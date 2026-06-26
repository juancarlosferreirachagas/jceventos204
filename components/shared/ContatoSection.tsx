import { MapPin } from "lucide-react";
import { IconInstagram, IconWhatsapp } from "@/components/icons";
import { CtaButton } from "@/components/shared/CtaButton";
import { CtaBar } from "@/components/shared/CtaBar";
import {
  ADDRESS,
  getMapsUrl,
  getWhatsAppDisplay,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
} from "@/lib/site";
import { eventosWhatsApp, kidsWhatsApp } from "@/lib/site-copy";
import { cn } from "@/lib/utils";

type ContatoSectionProps = {
  title: string;
  subtitle: string;
  theme?: "eventos" | "kids";
};

export function ContatoSection({ title, subtitle, theme = "eventos" }: ContatoSectionProps) {
  const wa = theme === "kids" ? kidsWhatsApp() : eventosWhatsApp();

  return (
    <section id="contato">
      <div className={cn("py-16 lg:py-24", theme === "kids" ? "bg-white" : "bg-jc-black")}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className={cn("text-sm font-bold uppercase tracking-widest", theme === "kids" ? "text-kids-cyan" : "text-jc-gold")}>Contato</p>
          <h2 className={cn("mt-2 font-display text-3xl font-bold sm:text-4xl", theme === "kids" ? "text-kids-blue-dark" : "text-white")}>{title}</h2>
          <p className={cn("mt-3 max-w-xl", theme === "kids" ? "text-kids-blue-dark/70" : "text-white/65")}>{subtitle}</p>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div className={cn("space-y-4 rounded-2xl border p-6", theme === "kids" ? "border-kids-cyan/20 bg-sky-50" : "border-white/10 bg-white/5")}>
              <ContactRow href={wa} theme={theme} icon={<IconWhatsapp size="md" />} label="WhatsApp" value={getWhatsAppDisplay()} />
              <ContactRow href={INSTAGRAM_URL} theme={theme} icon={<IconInstagram size="md" />} label="Instagram" value={INSTAGRAM_HANDLE} />
              <ContactRow href={getMapsUrl()} theme={theme} icon={<MapPin className="h-5 w-5" />} label="Endereço" value={ADDRESS.full} />
              <CtaButton href={wa} theme={theme} className="mt-4 w-full sm:w-auto">
                Agendar visita no WhatsApp
              </CtaButton>
            </div>
            <div className={cn("overflow-hidden rounded-2xl border", theme === "kids" ? "border-kids-cyan/20" : "border-white/10")}>
              <iframe
                title="Localização JC Eventos 204"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(ADDRESS.full)}&output=embed`}
                className="h-full min-h-[280px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
      <CtaBar theme={theme} />
    </section>
  );
}

function ContactRow({ href, icon, label, value, theme }: { href: string; icon: React.ReactNode; label: string; value: string; theme: "eventos" | "kids" }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn("flex items-start gap-4 transition-colors", theme === "kids" ? "text-kids-blue-dark hover:text-kids-cyan" : "text-white hover:text-jc-gold")}
    >
      <span className={cn("flex h-11 w-11 shrink-0 items-center justify-center rounded-full", theme === "kids" ? "bg-kids-cyan/15 text-kids-cyan" : "bg-jc-gold/10 text-jc-gold")}>
        {icon}
      </span>
      <div>
        <p className={cn("text-xs", theme === "kids" ? "text-kids-blue-dark/50" : "text-white/50")}>{label}</p>
        <p className="font-semibold leading-snug">{value}</p>
      </div>
    </a>
  );
}

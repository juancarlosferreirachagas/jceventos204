import Image from "next/image";
import { IconInstagram, IconWhatsapp } from "@/components/icons";
import {
  ADDRESS,
  getMapsUrl,
  getWazeUrl,
  INSTAGRAM_URL,
} from "@/lib/site";
import { RESPONSE_SLA } from "@/lib/site-legal";
import { eventosWhatsApp, kidsWhatsApp } from "@/lib/site-copy";
import { cn } from "@/lib/utils";

type ContatoSectionProps = {
  title: string;
  subtitle: string;
  theme?: "eventos" | "kids";
};

export function ContatoSection({ title, subtitle, theme = "eventos" }: ContatoSectionProps) {
  const whatsappHref = theme === "kids" ? kidsWhatsApp() : eventosWhatsApp();

  return (
    <section id="contato">
      <div className={cn("py-12 lg:py-16", theme === "kids" ? "bg-white" : "bg-jc-black")}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className={cn("text-sm font-bold uppercase tracking-widest", theme === "kids" ? "text-kids-cyan" : "text-jc-gold")}>
            Contato
          </p>
          <h2 className={cn("mt-2 font-display text-3xl font-bold sm:text-4xl", theme === "kids" ? "text-kids-blue-dark" : "text-white")}>
            {title}
          </h2>
          <p className={cn("mt-3 max-w-lg text-sm sm:text-base", theme === "kids" ? "text-kids-blue-dark/70" : "text-white/65")}>
            {subtitle}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:justify-start">
            <ContactIcon href={whatsappHref} label="WhatsApp" theme={theme}>
              <IconWhatsapp size="lg" className="text-white" />
            </ContactIcon>
            <ContactIcon href={INSTAGRAM_URL} label="Instagram @jceventos204" theme={theme}>
              <IconInstagram size="lg" />
            </ContactIcon>
            <ContactIcon href={getWazeUrl()} label={`Waze — ${ADDRESS.full}`} theme={theme}>
              <Image src="/images/brand/logowaze.png" alt="" width={24} height={24} className="h-6 w-6 object-contain" />
            </ContactIcon>
            <ContactIcon href={getMapsUrl()} label={`Google Maps — ${ADDRESS.street}`} theme={theme}>
              <Image src="/images/brand/logo-googlemaps.png" alt="" width={24} height={24} className="h-6 w-6 object-contain" />
            </ContactIcon>
          </div>

          <p className={cn("mt-5 text-sm", theme === "kids" ? "text-kids-blue-dark/60" : "text-white/50")}>
            {ADDRESS.full} · {RESPONSE_SLA.short}
          </p>
        </div>
      </div>
    </section>
  );
}

function ContactIcon({
  href,
  label,
  theme,
  children,
}: {
  href: string;
  label: string;
  theme: "eventos" | "kids";
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={cn(
        "inline-flex h-12 w-12 items-center justify-center rounded-xl border transition-all hover:-translate-y-0.5 sm:h-14 sm:w-14",
        theme === "kids"
          ? "border-kids-cyan/25 bg-sky-50 text-kids-blue-dark hover:border-kids-cyan/50 hover:shadow-md hover:shadow-kids-cyan/15"
          : "border-jc-gold/25 bg-white/[0.06] text-jc-gold hover:border-jc-gold/45 hover:shadow-md hover:shadow-jc-gold/10",
      )}
    >
      {children}
    </a>
  );
}

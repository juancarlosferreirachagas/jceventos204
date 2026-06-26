import Link from "next/link";
import { MapPin } from "lucide-react";
import { IconInstagram, IconWhatsapp } from "@/components/icons";
import { LogoEventos } from "@/components/LogoEventos";
import { EVENTOS, eventosWhatsApp } from "@/lib/site-copy";
import { INSTAGRAM_URL, SITE_NAME } from "@/lib/site";

const NAV = [
  { href: "#servicos", label: "Serviços" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#galeria", label: "Galeria" },
  { href: "#avaliacoes", label: "Avaliações" },
  { href: "#contato", label: "Contato" },
] as const;

export function EventosHeader() {
  return (
    <header className="header-flyer sticky top-0 z-50">
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <Link href="/eventos" aria-label={SITE_NAME}>
            <LogoEventos size="sm" />
          </Link>
          <Link
            href="/kids"
            className="hidden rounded-sm border border-jc-gold/30 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-jc-gold-light transition-colors hover:bg-jc-gold/10 lg:inline-block"
          >
            JC Kids →
          </Link>
        </div>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Eventos">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-semibold text-white/85 transition-colors hover:text-jc-gold-light">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hidden rounded-full p-2 text-jc-gold hover:bg-jc-gold/10 sm:inline-flex" aria-label="Instagram">
            <IconInstagram size="md" />
          </a>
          <a
            href={eventosWhatsApp()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-sm bg-cta-bar px-3 py-2 text-xs font-bold text-cta-text sm:px-4 sm:text-sm"
          >
            <IconWhatsapp size="sm" />
            <span className="hidden sm:inline">{EVENTOS.hero.cta}</span>
            <span className="sm:hidden">Visita</span>
          </a>
        </div>
      </div>

      <nav className="flex gap-1 overflow-x-auto border-t border-jc-gold/15 px-4 py-2 lg:hidden">
        {NAV.map((item) => (
          <a key={item.href} href={item.href} className="shrink-0 rounded-sm px-3 py-1.5 text-xs font-semibold text-white/75 hover:text-jc-gold-light">
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

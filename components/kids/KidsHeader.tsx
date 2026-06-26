import Link from "next/link";
import { IconInstagram, IconWhatsapp } from "@/components/icons";
import { LogoKids } from "@/components/LogoKids";
import { KIDS, kidsWhatsApp } from "@/lib/site-copy";
import { INSTAGRAM_URL } from "@/lib/site";

const NAV = [
  { href: "#servicos", label: "Pacotes" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#galeria", label: "Galeria" },
  { href: "#avaliacoes", label: "Avaliações" },
  { href: "#contato", label: "Contato" },
] as const;

export function KidsHeader() {
  return (
    <header className="header-kids sticky top-0 z-50">
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <Link href="/kids" aria-label="JC Kids">
            <LogoKids size="sm" />
          </Link>
          <Link href="/eventos" className="hidden rounded-full border border-white/30 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-white hover:bg-white/10 lg:inline-block">
            ← Eventos
          </Link>
        </div>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Kids">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-bold text-white/90 hover:text-kids-yellow">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hidden rounded-full p-2 text-white hover:bg-white/10 sm:inline-flex" aria-label="Instagram">
            <IconInstagram size="md" />
          </a>
          <a
            href={kidsWhatsApp()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-kids-yellow px-3 py-2 text-xs font-bold text-kids-blue-dark sm:px-4 sm:text-sm"
          >
            <IconWhatsapp size="sm" />
            <span className="hidden sm:inline">{KIDS.hero.cta}</span>
            <span className="sm:hidden">Festas</span>
          </a>
        </div>
      </div>

      <nav className="flex gap-1 overflow-x-auto border-t border-white/15 bg-kids-blue-dark/50 px-4 py-2 lg:hidden">
        {NAV.map((item) => (
          <a key={item.href} href={item.href} className="shrink-0 rounded-full px-3 py-1.5 text-xs font-bold text-white/80 hover:text-kids-yellow">
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

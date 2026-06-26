import { HeaderBrandLink } from "@/components/shared/HeaderBrandLink";
import { MobileNavStrip } from "@/components/shared/MobileNavStrip";
import { SectorSwitcher } from "@/components/shared/SectorSwitcher";
import { IconInstagram } from "@/components/icons";
import { LogoEventos } from "@/components/LogoEventos";
import { INSTAGRAM_URL } from "@/lib/site";

const NAV = [
  { href: "#servicos", label: "Serviços" },
  { href: "#tour-360", label: "Tour" },
  { href: "#galeria", label: "Galeria" },
  { href: "#estrutura", label: "Estrutura" },
  { href: "#faq", label: "FAQ" },
  { href: "#contato", label: "Contato" },
] as const;

export function EventosHeader() {
  return (
    <header id="site-header" className="header-flyer sticky top-0 z-50">
      <div className="mx-auto flex min-h-14 max-w-7xl flex-wrap items-center justify-between gap-x-2 gap-y-2 px-4 py-2 sm:min-h-[4.25rem] sm:flex-nowrap sm:gap-3 sm:px-6 lg:px-8">
        <div className="flex min-w-0 flex-1 items-center gap-2 sm:flex-initial sm:gap-3">
          <HeaderBrandLink href="/" label="Escolher modalidade — JC Eventos 204">
            <LogoEventos size="sm" />
          </HeaderBrandLink>
          <SectorSwitcher active="eventos" />
        </div>

        <nav className="hidden items-center gap-5 xl:flex" aria-label="JC Eventos 204">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-white/85 transition-colors duration-200 hover:text-jc-gold-light"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden shrink-0 rounded-full p-2.5 text-jc-gold transition-colors duration-200 hover:bg-jc-gold/10 sm:inline-flex"
          aria-label="Instagram"
        >
          <IconInstagram size="md" />
        </a>
      </div>

      <MobileNavStrip
        aria-label="Menu mobile"
        items={NAV}
        className="border-t border-jc-gold/15"
        linkClassName="rounded-sm px-3 py-2 text-xs font-semibold text-white/80 transition-colors duration-200 hover:text-jc-gold-light"
      />
    </header>
  );
}

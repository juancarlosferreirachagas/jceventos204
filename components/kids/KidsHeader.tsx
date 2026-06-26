import { HeaderBrandLink } from "@/components/shared/HeaderBrandLink";
import { MobileNavStrip } from "@/components/shared/MobileNavStrip";
import { SectorSwitcher } from "@/components/shared/SectorSwitcher";
import { IconInstagram } from "@/components/icons";
import { LogoKids } from "@/components/LogoKids";
import { INSTAGRAM_URL } from "@/lib/site";

const NAV = [
  { href: "#servicos", label: "Pacotes" },
  { href: "#tour-360", label: "Tour" },
  { href: "#galeria", label: "Galeria" },
  { href: "#estrutura", label: "Estrutura" },
  { href: "#faq", label: "FAQ" },
  { href: "#contato", label: "Contato" },
] as const;

export function KidsHeader() {
  return (
    <header id="site-header" className="header-kids sticky top-0 z-50">
      <div className="mx-auto flex min-h-14 max-w-7xl flex-wrap items-center justify-between gap-x-2 gap-y-2 px-4 py-2 sm:min-h-[4.25rem] sm:flex-nowrap sm:gap-3 sm:px-6 lg:px-8">
        <div className="flex min-w-0 flex-1 items-center gap-2 sm:flex-initial sm:gap-3">
          <HeaderBrandLink href="/" label="Escolher modalidade — JC Eventos 204" className="shrink-0">
            <LogoKids size="sm" />
          </HeaderBrandLink>
          <SectorSwitcher active="kids" />
        </div>

        <nav className="hidden items-center gap-5 xl:flex" aria-label="JC Kids 204">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-white/90 transition-colors duration-200 hover:text-jc-gold"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden shrink-0 rounded-full p-2 text-white transition-colors duration-200 hover:bg-white/10 md:inline-flex"
          aria-label="Instagram"
        >
          <IconInstagram size="md" />
        </a>
      </div>

      <MobileNavStrip
        aria-label="Menu mobile"
        items={NAV}
        className="border-t border-white/15 bg-black/10"
        linkClassName="rounded-full bg-white/10 px-3.5 py-2 text-[0.6875rem] font-semibold text-white/90 transition-[color,background-color] duration-200 hover:bg-white/15 hover:text-jc-gold"
      />
    </header>
  );
}

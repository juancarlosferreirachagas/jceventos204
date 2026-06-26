import Link from "next/link";
import { LogoKids } from "@/components/LogoKids";
import { DISCLAIMER_FOOTER } from "@/lib/site-legal";
import {
  ADDRESS,
  getMapsUrl,
  getWhatsAppDisplay,
  getWhatsAppHref,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
} from "@/lib/site";

export function KidsFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t-4 border-kids-yellow bg-kids-blue-dark">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <LogoKids size="sm" />
            <p className="mt-4 max-w-xs text-sm text-white/70">
              Festas infantis em Barueri — aniversários, temas e brinquedoteca.
            </p>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-kids-yellow">Contato</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li><a href={getWhatsAppHref()} className="hover:text-kids-yellow">{getWhatsAppDisplay()}</a></li>
              <li><a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-kids-yellow">{INSTAGRAM_HANDLE}</a></li>
              <li><a href={getMapsUrl()} target="_blank" rel="noopener noreferrer" className="hover:text-kids-yellow">{ADDRESS.full}</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-kids-yellow">Navegação</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li><Link href="/" className="hover:text-kids-yellow">Início</Link></li>
              <li><Link href="/eventos" className="hover:text-kids-yellow">JC Eventos 204</Link></li>
              <li><a href="#servicos" className="hover:text-kids-yellow">Pacotes</a></li>
              <li><a href="#contato" className="hover:text-kids-yellow">Contato</a></li>
            </ul>
          </div>
        </div>
        <p className="mt-8 border-t border-white/10 pt-6 text-center text-[11px] text-white/45">
          © {year} JC Kids — JC Eventos 204. {DISCLAIMER_FOOTER}
        </p>
      </div>
    </footer>
  );
}

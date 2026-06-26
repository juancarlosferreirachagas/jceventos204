import Link from "next/link";
import { LogoEventos } from "@/components/LogoEventos";
import { DISCLAIMER_FOOTER } from "@/lib/site-legal";
import {
  ADDRESS,
  getMapsUrl,
  getWhatsAppDisplay,
  getWhatsAppHref,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  SITE_NAME,
} from "@/lib/site";

export function EventosFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-jc-gold/15 bg-jc-black">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <LogoEventos size="sm" className="items-start" />
            <p className="mt-4 max-w-xs text-sm text-white/55">
              Salão de festas em Barueri — casamentos, debutantes, corporativo e aniversários.
            </p>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-jc-gold">Contato</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/75">
              <li>
                <a href={getWhatsAppHref()} className="hover:text-jc-gold">{getWhatsAppDisplay()}</a>
              </li>
              <li>
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-jc-gold">
                  {INSTAGRAM_HANDLE}
                </a>
              </li>
              <li>
                <a href={getMapsUrl()} target="_blank" rel="noopener noreferrer" className="hover:text-jc-gold">
                  {ADDRESS.full}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-jc-gold">Navegação</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/75">
              <li><Link href="/" className="hover:text-jc-gold">Início</Link></li>
              <li><Link href="/kids" className="hover:text-jc-gold">JC Kids</Link></li>
              <li><a href="#servicos" className="hover:text-jc-gold">Serviços</a></li>
              <li><a href="#contato" className="hover:text-jc-gold">Contato</a></li>
            </ul>
          </div>
        </div>
        <p className="mt-8 border-t border-white/10 pt-6 text-center text-[11px] text-white/40">
          © {year} {SITE_NAME}. {DISCLAIMER_FOOTER}
        </p>
      </div>
    </footer>
  );
}

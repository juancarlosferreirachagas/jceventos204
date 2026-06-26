import { GatewaySplit } from "@/components/gateway/GatewaySplit";
import { PromoBanner } from "@/components/shared/PromoBanner";
import { GATEWAY } from "@/lib/site-copy";
import Link from "next/link";
import { LogoEventos } from "@/components/LogoEventos";

export default function HomePage() {
  return (
    <div data-theme="eventos" className="min-h-screen bg-jc-black">
      <PromoBanner theme="eventos" />
      <header className="header-flyer">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-center px-4">
          <Link href="/" aria-label="JC Eventos 204">
            <LogoEventos size="sm" />
          </Link>
        </div>
      </header>
      <main>
        <div className="border-b border-jc-gold/20 bg-jc-black py-4 text-center sm:py-5">
          <h1 className="font-display text-xl font-bold text-white sm:text-2xl">
            {GATEWAY.title}
          </h1>
          <p className="mt-1 text-sm text-white/60">{GATEWAY.subtitle}</p>
        </div>
        <GatewaySplit />
      </main>
    </div>
  );
}

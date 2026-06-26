import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { LogoEventos } from "@/components/LogoEventos";
import { LogoKids } from "@/components/LogoKids";
import { IconWhatsapp } from "@/components/icons";
import { DISCLAIMER_FOOTER } from "@/lib/site-legal";
import { FooterCredits } from "@/components/shared/FooterCredits";
import { SITE_FOOTER_ID, SITE_LOGO_LINK_CLASS } from "@/lib/brand";
import { EVENTOS, KIDS, eventosWhatsApp, kidsWhatsApp } from "@/lib/site-copy";
import {
  ADDRESS,
  getMapsUrl,
  getWhatsAppDisplay,
  getWhatsAppHref,
  getWazeUrl,
  INSTAGRAM_URL,
  SITE_NAME,
} from "@/lib/site";
import { cn } from "@/lib/utils";

type FooterTheme = "eventos" | "kids";

type NavLink = { href: string; label: string; external?: boolean };

const NAV: Record<FooterTheme, NavLink[]> = {
  eventos: [
    { href: "/", label: "Início" },
    { href: "/kids", label: "JC Kids" },
    { href: "#servicos", label: "Serviços" },
    { href: "#tour-360", label: "Tour" },
    { href: "#contato", label: "Contato" },
  ],
  kids: [
    { href: "/", label: "Início" },
    { href: "/eventos", label: "Eventos 204" },
    { href: "#servicos", label: "Pacotes" },
    { href: "#tour-360", label: "Tour" },
    { href: "#contato", label: "Contato" },
  ],
};

const THEME = {
  eventos: {
    shell: "relative overflow-hidden bg-jc-black text-white border-t border-jc-gold/20",
    accent: "text-jc-gold",
    accentHover: "hover:text-jc-gold-light focus-visible:text-jc-gold-light",
    navMobile: "text-white/90 hover:text-jc-gold focus-visible:text-jc-gold hover:bg-jc-gold/10",
    navMobileDivider: "text-jc-gold/40",
    navDesktop:
      "text-white/95 hover:text-jc-gold focus-visible:text-jc-gold border-transparent hover:border-jc-gold/60 focus-visible:border-jc-gold/60",
    heading: "text-jc-gold",
    iconBtn:
      "rounded-xl bg-white/[0.08] border border-jc-gold/20 hover:bg-white/[0.14] hover:border-jc-gold/45 hover:shadow-[0_0_22px_rgba(201,162,39,0.18)] focus-visible:outline-jc-gold",
    iconBtnMobile:
      "rounded-lg bg-white/[0.08] border border-jc-gold/25 focus-visible:ring-jc-gold/50",
    socialBtn:
      "rounded-xl bg-white/[0.08] border border-jc-gold/20 hover:bg-white/[0.14] hover:border-jc-gold/45 hover:shadow-[0_0_22px_rgba(201,162,39,0.18)] focus-visible:outline-jc-gold text-jc-gold",
    copyright: "text-white/58",
    gridLine: "border-white/12",
    tagline: "text-white/72",
    taglineText: "Salão de festas em Barueri — casamentos, debutantes, corporativo e aniversários.",
    copyrightName: SITE_NAME,
  },
  kids: {
    shell: "relative overflow-hidden bg-kids-blue-dark text-white border-t-4 border-kids-yellow",
    accent: "text-kids-yellow",
    accentHover: "hover:text-kids-cyan-light focus-visible:text-kids-cyan-light",
    navMobile: "text-white/95 hover:text-kids-yellow focus-visible:text-kids-yellow hover:bg-white/10",
    navMobileDivider: "text-white/35",
    navDesktop:
      "text-white hover:text-kids-yellow focus-visible:text-kids-yellow border-transparent hover:border-kids-cyan-light/70 focus-visible:border-kids-cyan-light/70",
    heading: "text-kids-yellow",
    iconBtn:
      "rounded-xl bg-white/[0.1] border border-white/20 hover:bg-white/[0.16] hover:border-kids-cyan-light/50 hover:shadow-[0_0_22px_rgba(0,180,230,0.22)] focus-visible:outline-kids-cyan",
    iconBtnMobile:
      "rounded-lg bg-white/[0.1] border border-white/20 focus-visible:ring-kids-cyan/50",
    socialBtn:
      "rounded-xl bg-white/[0.1] border border-white/20 hover:bg-white/[0.16] hover:border-kids-cyan-light/50 hover:shadow-[0_0_22px_rgba(0,180,230,0.22)] focus-visible:outline-kids-cyan text-white",
    copyright: "text-white/65",
    gridLine: "border-white/18",
    tagline: "text-white/78",
    taglineText: "Festas infantis em Barueri — aniversários, temas e brinquedoteca.",
    copyrightName: "JC Kids — JC Eventos 204",
  },
} as const;

function NavItem({ link, className }: { link: NavLink; className: string }) {
  if (link.external) {
    return (
      <a href={link.href} target="_blank" rel="noopener noreferrer" className={className}>
        {link.label}
      </a>
    );
  }
  if (link.href.startsWith("#")) {
    return (
      <a href={link.href} className={className}>
        {link.label}
      </a>
    );
  }
  return (
    <Link href={link.href} className={className}>
      {link.label}
    </Link>
  );
}

function RouteIconButton({
  href,
  label,
  src,
  className,
  mobile,
}: {
  href: string;
  label: string;
  src: string;
  className: string;
  mobile?: boolean;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={label}
      aria-label={label}
      className={cn(
        mobile
          ? "inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg p-1 opacity-95 transition-all duration-200 hover:-translate-y-0.5 hover:opacity-100 active:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
          : "flex h-10 w-10 items-center justify-center transition-all duration-200 hover:-translate-y-0.5 hover:scale-[1.03] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
        className,
      )}
    >
      <Image
        src={src}
        alt=""
        width={24}
        height={24}
        className={cn("object-contain", mobile ? "h-6 w-6" : "h-5 w-5")}
      />
    </a>
  );
}

function SocialIconButton({
  href,
  label,
  className,
  mobile,
  children,
}: {
  href: string;
  label: string;
  className: string;
  mobile?: boolean;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={cn(
        mobile
          ? "inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg p-1 opacity-95 transition-all duration-200 hover:-translate-y-0.5 hover:opacity-100 active:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
          : "flex h-10 w-10 items-center justify-center transition-all duration-200 hover:-translate-y-0.5 hover:scale-[1.03] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
        className,
      )}
    >
      {children}
    </a>
  );
}

function FooterSocialColumn({
  theme,
  compact,
  whatsappHref,
  iconBtnClass,
  socialBtnClass,
}: {
  theme: FooterTheme;
  compact?: boolean;
  whatsappHref: string;
  iconBtnClass: string;
  socialBtnClass: string;
}) {
  const t = THEME[theme];

  return (
    <div className="flex w-full min-w-0 flex-col items-center text-center">
      <h3
        className={cn(
          "font-bold",
          compact ? "mb-1 text-[0.625rem] tracking-[0.06em]" : "mb-1.5 text-[0.6875rem] uppercase tracking-[0.14em]",
          t.heading,
        )}
      >
        Redes sociais
      </h3>
      <div className={cn("flex items-center justify-center gap-2", compact ? "w-full" : "mt-0.5")}>
        <SocialIconButton
          href={whatsappHref}
          label={`WhatsApp ${getWhatsAppDisplay()}`}
          className={compact ? iconBtnClass : socialBtnClass}
          mobile={compact}
        >
          <FaWhatsapp className={cn("shrink-0", compact ? "h-6 w-6" : "h-5 w-5")} aria-hidden />
        </SocialIconButton>
        <SocialIconButton
          href={INSTAGRAM_URL}
          label="Instagram @jceventos204"
          className={compact ? iconBtnClass : socialBtnClass}
          mobile={compact}
        >
          <FaInstagram className={cn("shrink-0", compact ? "h-6 w-6" : "h-5 w-5")} aria-hidden />
        </SocialIconButton>
      </div>
    </div>
  );
}

type SiteFooterProps = {
  theme: FooterTheme;
};

export function SiteFooter({ theme }: SiteFooterProps) {
  const year = new Date().getFullYear();
  const t = THEME[theme];
  const links = NAV[theme];
  const wazeUrl = getWazeUrl();
  const mapsUrl = getMapsUrl();
  const whatsappHref = getWhatsAppHref();
  const footerCta = theme === "kids" ? KIDS.footerCta : EVENTOS.footerCta;
  const footerWa = theme === "kids" ? kidsWhatsApp() : eventosWhatsApp();

  return (
    <footer id={SITE_FOOTER_ID} className={t.shell}>
      {theme === "eventos" && (
        <>
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.035]"
            aria-hidden
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgba(255,255,255,.35) 1px, transparent 1px), linear-gradient(rgba(255,255,255,.35) 1px, transparent 1px)",
              backgroundSize: "56px 56px",
            }}
          />
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/[0.03] blur-3xl" aria-hidden />
        </>
      )}

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Faixa CTA — padrão Cultiva */}
        <div className={cn("border-b py-8 sm:py-10", t.gridLine)}>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
            <div className="max-w-lg text-center lg:text-left">
              <p className={cn("text-overline", t.heading)}>{footerCta.eyebrow}</p>
              <h2 className="mt-2 font-display text-2xl font-semibold leading-tight text-white sm:text-3xl">
                {footerCta.title}
              </h2>
            </div>
            <a
              href={footerWa}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex min-h-11 w-full shrink-0 items-center justify-center gap-2 rounded-sm px-5 py-3 text-sm font-bold transition-colors sm:text-base lg:w-auto",
                theme === "kids" ? "bg-kids-yellow text-kids-blue-dark hover:bg-[#ffe033]" : "bg-cta-bar text-cta-text hover:bg-[#ffe033]",
              )}
            >
              <IconWhatsapp size="sm" />
              {footerCta.cta}
            </a>
          </div>
        </div>

        {/* ── Mobile ── */}
        <div className="md:hidden">
          <div className="flex justify-center pb-1 pt-4">
            <Link href={theme === "kids" ? "/kids" : "/eventos"} aria-label="Ir para página inicial" className={SITE_LOGO_LINK_CLASS}>
              {theme === "eventos" ? (
                <LogoEventos size="md" className="items-center [&_span]:text-center" />
              ) : (
                <LogoKids size="md" className="items-center [&_span]:text-center" />
              )}
            </Link>
          </div>

          <nav
            className="scrollbar-hide w-full overflow-x-auto overscroll-x-contain py-0.5"
            aria-label="Rodapé"
          >
            <div className="mx-auto flex w-max flex-nowrap items-center justify-center gap-0">
              {links.map((link, i) => (
                <span key={link.href + link.label} className="inline-flex shrink-0 items-center">
                  {i > 0 && (
                    <span className={cn("select-none px-0.5 text-[0.5625rem]", t.navMobileDivider)} aria-hidden>
                      |
                    </span>
                  )}
                  <NavItem
                    link={link}
                    className={cn(
                      "inline-flex shrink-0 whitespace-nowrap rounded px-1 py-0.5 text-center text-[0.625rem] font-semibold leading-tight transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent sm:text-[0.6875rem]",
                      t.navMobile,
                      t.iconBtnMobile,
                    )}
                  />
                </span>
              ))}
            </div>
          </nav>

          <div className="grid grid-cols-2 items-start gap-x-3 px-0.5 pb-2 pt-1">
            <div className="flex w-full min-w-0 flex-col items-center text-center">
              <h3 className={cn("mb-1 text-[0.625rem] font-bold tracking-[0.06em]", t.heading)}>
                Localização
              </h3>
              <div
                className="flex w-full flex-row items-center justify-center gap-2"
                role="group"
                aria-label={`Abrir rotas: ${ADDRESS.full}`}
              >
                <RouteIconButton
                  href={wazeUrl}
                  label={`Abrir endereço no Waze: ${ADDRESS.full}`}
                  src="/images/brand/logowaze.png"
                  className={t.iconBtnMobile}
                  mobile
                />
                <RouteIconButton
                  href={mapsUrl}
                  label={`Abrir endereço no Google Maps: ${ADDRESS.street}`}
                  src="/images/brand/logo-googlemaps.png"
                  className={t.iconBtnMobile}
                  mobile
                />
              </div>
            </div>

            <FooterSocialColumn
              theme={theme}
              compact
              whatsappHref={whatsappHref}
              iconBtnClass={t.iconBtnMobile}
              socialBtnClass={t.socialBtn}
            />
          </div>
        </div>

        {/* ── Desktop ── */}
        <div className="hidden md:block">
          <div className="flex items-start justify-between gap-6 border-b border-white/10 py-5 lg:py-6">
            <div className="max-w-xs">
              <Link href={theme === "kids" ? "/kids" : "/eventos"} aria-label="Ir para página inicial" className={SITE_LOGO_LINK_CLASS}>
                {theme === "eventos" ? <LogoEventos size="md" /> : <LogoKids size="md" />}
              </Link>
              <p className={cn("mt-2.5 text-sm leading-relaxed", t.tagline)}>{t.taglineText}</p>
            </div>

            <div className="grid grid-cols-3 gap-5 lg:gap-8 xl:gap-10">
              <div className="flex min-w-0 flex-col items-center text-center">
                <h3 className={cn("mb-1.5 text-[0.6875rem] font-bold uppercase tracking-[0.14em]", t.heading)}>
                  Menu
                </h3>
                <nav className="flex flex-col items-center gap-0.5" aria-label="Rodapé">
                  {links.map((link) => (
                    <NavItem
                      key={link.href + link.label}
                      link={link}
                      className={cn(
                        "group inline-flex border-b pb-0.5 text-[0.8125rem] font-medium leading-snug transition-colors duration-200",
                        t.navDesktop,
                      )}
                    />
                  ))}
                </nav>
              </div>

              <div className="flex min-w-0 flex-col items-center text-center">
                <h3 className={cn("mb-1.5 text-[0.6875rem] font-bold uppercase tracking-[0.14em]", t.heading)}>
                  Localização
                </h3>
                <div
                  className="flex items-center justify-center gap-1.5"
                  role="group"
                  aria-label={`Abrir rotas: ${ADDRESS.full}`}
                >
                  <RouteIconButton
                    href={wazeUrl}
                    label="Abrir no Waze"
                    src="/images/brand/logowaze.png"
                    className={t.iconBtn}
                  />
                  <RouteIconButton
                    href={mapsUrl}
                    label="Abrir no Google Maps"
                    src="/images/brand/logo-googlemaps.png"
                    className={t.iconBtn}
                  />
                </div>
              </div>

              <FooterSocialColumn
                theme={theme}
                whatsappHref={whatsappHref}
                iconBtnClass={t.iconBtnMobile}
                socialBtnClass={t.socialBtn}
              />
            </div>
          </div>
        </div>

        <div className={cn("border-t py-2 md:py-2.5", t.gridLine)}>
          <p className={cn("text-center text-[0.6875rem] leading-snug sm:text-xs", t.copyright)}>
            © {year} {t.copyrightName}. {DISCLAIMER_FOOTER}
          </p>
          <FooterCredits theme={theme} />
        </div>
      </div>
    </footer>
  );
}

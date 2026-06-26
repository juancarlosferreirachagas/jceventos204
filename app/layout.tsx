import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans, Fredoka, Nunito } from "next/font/google";
import { OrganizationJsonLd } from "@/components/OrganizationJsonLd";
import { PromoBanner } from "@/components/shared/PromoBanner";
import { getSiteUrl, SITE_NAME } from "@/lib/site";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0a",
};

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} — Espaço para eventos em Barueri, SP`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Casamentos, debutantes, corporativo e festas infantis JC Kids em Barueri — SP.",
  metadataBase: new URL(getSiteUrl()),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${cormorant.variable} ${dmSans.variable} ${fredoka.variable} ${nunito.variable} h-full`}
    >
      <head>
        <OrganizationJsonLd />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}

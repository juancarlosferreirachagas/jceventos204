import { getSiteUrl, SITE_NAME } from "@/lib/site";

export function OrganizationJsonLd() {
  const url = getSiteUrl();
  const payload = {
    "@context": "https://schema.org",
    "@type": "EventVenue",
    name: SITE_NAME,
    url,
    description:
      "Espaço para eventos em Barueri — casamentos, debutantes, corporativo e festas infantis JC Kids.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Diretriz, 204",
      addressLocality: "Barueri",
      addressRegion: "SP",
      addressCountry: "BR",
    },
    areaServed: { "@type": "City", name: "Barueri" },
    availableLanguage: ["pt-BR"],
    sameAs: ["https://www.instagram.com/jceventos204/"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}

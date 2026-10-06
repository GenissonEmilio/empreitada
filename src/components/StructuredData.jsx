import { siteUrl, services } from "../lib/site";
export default function StructuredData() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: "ESM Empreiteira",
    url: `${siteUrl}/`,
    logo: `${siteUrl}/assets/logo.png`,
    telephone: "+55-79-99870-8819",
    email: "elvissantosgamer@gmail.com",
    areaServed: [
      {
        "@type": "City",
        name: "Lagarto",
        containedInPlace: { "@type": "State", name: "Sergipe" },
      },
      { "@type": "State", name: "Sergipe" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Serviços ESM Empreiteira",
      itemListElement: services.map((name) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name,
          provider: { "@id": `${siteUrl}/#organization` },
          areaServed: { "@type": "State", name: "Sergipe" },
        },
      })),
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(organization).replace(/</g, "\\u003c"),
      }}
    />
  );
}

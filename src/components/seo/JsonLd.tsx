import { siteConfig } from "@/data/siteConfig";
import { contactInfo } from "@/data/contact";
import { regions } from "@/data/regions";
import { services } from "@/data/services";
import { photoExists, photoUrl } from "@/lib/photos";

interface JsonLdProps {
  type: "LocalBusiness" | "FAQ" | "BreadcrumbList" | "Article" | "Service";
  data?: Record<string, unknown>;
}

const BUSINESS_ID = `${siteConfig.siteUrl}/#business`;

function buildLocalBusiness(): Record<string, unknown> {
  const sameAs = [contactInfo.googleMapsPlaceUrl].filter(Boolean);
  const image = photoExists("dukkan-dis.webp")
    ? `${siteConfig.siteUrl}${photoUrl("dukkan-dis.webp")}`
    : `${siteConfig.siteUrl}/opengraph-image`;

  return {
    "@context": "https://schema.org",
    "@type": "Locksmith",
    "@id": BUSINESS_ID,
    name: siteConfig.siteName,
    description: siteConfig.siteDescription,
    url: `${siteConfig.siteUrl}/`,
    telephone: contactInfo.phone,
    email: contactInfo.email,
    image,
    logo: `${siteConfig.siteUrl}/icon.svg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: contactInfo.streetAddress,
      addressLocality: contactInfo.city,
      addressRegion: contactInfo.city,
      ...(contactInfo.postalCode ? { postalCode: contactInfo.postalCode } : {}),
      addressCountry: "TR",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    areaServed: regions.map((r) => ({
      "@type": "Place",
      name: r.name === "Düzce Merkez" ? "Düzce" : `${r.name}, Düzce`,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Çilingir Hizmetleri",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.title,
          url: `${siteConfig.siteUrl}/hizmetler/${s.slug}`,
        },
      })),
    },
    ...(contactInfo.googleMapsPlaceUrl ? { hasMap: contactInfo.googleMapsPlaceUrl } : {}),
    ...(sameAs.length ? { sameAs } : {}),
  };
}

export default function JsonLd({ type, data }: JsonLdProps) {
  let schema: Record<string, unknown>;

  switch (type) {
    case "LocalBusiness":
      schema = { ...buildLocalBusiness(), ...data };
      break;

    case "FAQ":
      schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        ...data,
      };
      break;

    case "BreadcrumbList":
      schema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        ...data,
      };
      break;

    case "Article":
      schema = {
        "@context": "https://schema.org",
        "@type": "Article",
        publisher: {
          "@type": "Organization",
          name: siteConfig.siteName,
          url: `${siteConfig.siteUrl}/`,
        },
        ...data,
      };
      break;

    case "Service":
      schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        provider: { "@id": BUSINESS_ID },
        areaServed: { "@type": "City", name: "Düzce" },
        ...data,
      };
      break;

    default:
      return null;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/** FAQ verilerinden JSON-LD mainEntity oluşturur */
export function buildFaqJsonLd(
  faqs: { question: string; answer: string }[]
): Record<string, unknown> {
  return {
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/** Breadcrumb JSON-LD oluşturur */
export function buildBreadcrumbJsonLd(
  items: { name: string; href: string }[]
): Record<string, unknown> {
  return {
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.siteUrl}${item.href}`,
    })),
  };
}

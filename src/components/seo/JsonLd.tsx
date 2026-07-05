import { siteConfig } from "@/data/siteConfig";
import { contactInfo } from "@/data/contact";

interface JsonLdProps {
  type: "LocalBusiness" | "FAQ" | "BreadcrumbList" | "Article";
  data?: Record<string, unknown>;
}

export default function JsonLd({ type, data }: JsonLdProps) {
  let schema: Record<string, unknown>;

  switch (type) {
    case "LocalBusiness":
      schema = {
        "@context": "https://schema.org",
        "@type": "Locksmith",
        name: siteConfig.siteName,
        description: siteConfig.siteDescription,
        url: siteConfig.siteUrl,
        telephone: contactInfo.phone,
        email: contactInfo.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: contactInfo.address,
          addressLocality: contactInfo.district,
          addressRegion: contactInfo.city,
          addressCountry: "TR",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "40.8439",
          longitude: "31.1565",
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
        priceRange: "₺₺",
        areaServed: {
          "@type": "City",
          name: "Düzce",
        },
        ...data,
      };
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
          url: siteConfig.siteUrl,
        },
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

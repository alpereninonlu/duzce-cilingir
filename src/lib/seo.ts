import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";

interface BuildMetadataOptions {
  /** Marka şablonla eklenir: "<title> | Düzce Çilingirci" */
  title: string;
  description: string;
  /** "/" ile başlayan sayfa yolu, örn. "/hizmetler" */
  path: string;
  /** true ise title marka şablonu olmadan birebir kullanılır */
  absoluteTitle?: boolean;
  type?: "website" | "article";
  publishedTime?: string;
}

/**
 * Her sayfa için tutarlı title, description, canonical ve OpenGraph üretir.
 * (Next.js'te alt sayfadaki openGraph üst sayfanınkini tamamen ezdiği için
 * hepsini tek yerden üretiyoruz.)
 */
export function buildMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
  type = "website",
  publishedTime,
}: BuildMetadataOptions): Metadata {
  const url = `${siteConfig.siteUrl}${path === "/" ? "/" : path}`;
  const fullTitle = absoluteTitle ? title : `${title} | ${siteConfig.siteName}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type,
      locale: siteConfig.locale,
      url,
      siteName: siteConfig.siteName,
      title: fullTitle,
      description,
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}

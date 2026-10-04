import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import ServicesPreview from "@/components/home/ServicesPreview";
import WhyUsSection from "@/components/home/WhyUsSection";
import FAQSection from "@/components/home/FAQSection";
import CTASection from "@/components/home/CTASection";
import GoogleReviewSection from "@/components/home/GoogleReviewSection";
import JsonLd, { buildFaqJsonLd } from "@/components/seo/JsonLd";
import { faqs } from "@/data/faq";
import { siteConfig } from "@/data/siteConfig";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: siteConfig.siteTitle,
  absoluteTitle: true,
  description: siteConfig.siteDescription,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <JsonLd type="FAQ" data={buildFaqJsonLd(faqs)} />
      <HeroSection />
      <ServicesPreview />
      <WhyUsSection />
      <GoogleReviewSection />
      <FAQSection />
      <CTASection />
    </>
  );
}

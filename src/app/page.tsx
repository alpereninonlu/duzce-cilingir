import HeroSection from "@/components/home/HeroSection";
import ServicesPreview from "@/components/home/ServicesPreview";
import WhyUsSection from "@/components/home/WhyUsSection";
import FAQSection from "@/components/home/FAQSection";
import CTASection from "@/components/home/CTASection";
import JsonLd, { buildFaqJsonLd } from "@/components/seo/JsonLd";
import { faqs } from "@/data/faq";

export default function HomePage() {
  return (
    <>
      <JsonLd type="FAQ" data={buildFaqJsonLd(faqs)} />
      <HeroSection />
      <ServicesPreview />
      <WhyUsSection />
      <FAQSection />
      <CTASection />
    </>
  );
}

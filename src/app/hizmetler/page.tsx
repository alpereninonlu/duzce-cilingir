import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/data/services";
import SectionTitle from "@/components/ui/SectionTitle";
import CTASection from "@/components/home/CTASection";
import JsonLd, { buildBreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Çilingir Hizmetleri",
  description:
    "Düzce Çilingirci hizmetleri: kapı açma, kilit ve göbek değiştirme, çelik kapı kilidi, oto çilingir (araç kapısı açma) ve anahtar kopyalama. 7/24 ulaşın.",
  path: "/hizmetler",
});

export default function HizmetlerPage() {
  return (
    <>
      <JsonLd
        type="BreadcrumbList"
        data={buildBreadcrumbJsonLd([
          { name: "Ana Sayfa", href: "/" },
          { name: "Hizmetler", href: "/hizmetler" },
        ])}
      />

      <section className="py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            as="h1"
            title="Düzce Çilingir Hizmetleri"
            subtitle="Düzce Merkez ve çevresinde verdiğimiz hizmetler. Ayrıntılar için ilgili hizmete tıklayın."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const highlights =
                service.sections.find((s) => s.list)?.list?.slice(0, 3) ?? [];
              return (
                <Link
                  key={service.id}
                  href={`/hizmetler/${service.slug}`}
                  className="group flex flex-col rounded-xl border border-gray-200 bg-white p-6 sm:p-8 hover:border-primary-200 hover:shadow-md transition-all duration-200"
                >
                  <span className="text-4xl block mb-4" aria-hidden="true">
                    {service.icon}
                  </span>
                  <h2 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-700 transition-colors">
                    {service.title}
                  </h2>
                  <p className="text-gray-500 leading-relaxed">
                    {service.description}
                  </p>
                  {highlights.length > 0 && (
                    <ul className="mt-4 space-y-1.5 text-sm text-gray-600">
                      {highlights.map((h) => (
                        <li key={h} className="flex gap-2">
                          <span className="text-primary-500" aria-hidden="true">✓</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}
                  <span className="mt-auto pt-5 text-sm font-semibold text-primary-600 group-hover:text-primary-800">
                    {service.title} hakkında detaylı bilgi →
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

import type { Metadata } from "next";
import { services } from "@/data/services";
import SectionTitle from "@/components/ui/SectionTitle";
import JsonLd, { buildBreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Hizmetlerimiz | Düzce Çilingir",
  description:
    "Düzce'de kapı açma, kilit değiştirme, oto çilingir, kasa açma, çelik kapı kilidi ve anahtar kopyalama hizmetleri. 7/24 profesyonel çilingir.",
  alternates: {
    canonical: "https://www.duzcecilingirci.com/hizmetler",
  },
};

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

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Hizmetlerimiz"
            subtitle="Düzce ve çevresinde sunduğumuz profesyonel çilingir hizmetleri"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="rounded-xl border border-gray-200 bg-white p-8 hover:border-primary-200 hover:shadow-md transition-all duration-200"
              >
                <span className="text-4xl block mb-4">{service.icon}</span>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

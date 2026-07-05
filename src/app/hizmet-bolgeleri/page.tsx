import type { Metadata } from "next";
import { regions } from "@/data/regions";
import SectionTitle from "@/components/ui/SectionTitle";
import JsonLd, { buildBreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Hizmet Bölgeleri | Düzce Çilingir",
  description:
    "Düzce Merkez, Akçakoca, Gölyaka, Çilimli, Cumayeri, Gümüşova, Kaynaşlı, Beyköy ve Yığılca'da 7/24 çilingir hizmeti.",
  alternates: {
    canonical: "https://www.duzcecilingirci.com/hizmet-bolgeleri",
  },
};

export default function HizmetBolgeleriPage() {
  return (
    <>
      <JsonLd
        type="BreadcrumbList"
        data={buildBreadcrumbJsonLd([
          { name: "Ana Sayfa", href: "/" },
          { name: "Hizmet Bölgeleri", href: "/hizmet-bolgeleri" },
        ])}
      />

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Hizmet Bölgeleri"
            subtitle="Düzce ve çevresinde hizmet verdiğimiz ilçeler"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {regions.map((region) => (
              <div
                key={region.id}
                className="rounded-xl border border-gray-200 bg-white p-6 hover:border-primary-200 hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">📍</span>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {region.name}
                  </h3>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {region.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

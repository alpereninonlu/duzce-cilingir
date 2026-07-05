import type { Metadata } from "next";
import SectionTitle from "@/components/ui/SectionTitle";
import JsonLd, { buildBreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Hakkımızda | Düzce Çilingir",
  description:
    "Düzce'de yıllardır güvenilir çilingir hizmeti sunan profesyonel ekibimizi tanıyın. 7/24 hızlı ve güvenilir çilingir.",
  alternates: {
    canonical: "https://www.duzcecilingirci.com/hakkimizda",
  },
};

const values = [
  {
    icon: "🤝",
    title: "Güvenilirlik",
    description: "Müşterilerimizin güvenini kazanmak bizim için en önemli değerdir.",
  },
  {
    icon: "⚡",
    title: "Hız",
    description: "Acil durumlarda dakikalar önemlidir. En kısa sürede ulaşmayı hedefliyoruz.",
  },
  {
    icon: "🎯",
    title: "Profesyonellik",
    description: "Alanında uzman ekibimiz, en son teknolojiyi kullanarak hizmet sunar.",
  },
  {
    icon: "💎",
    title: "Kalite",
    description: "İşimizde kaliteden ödün vermeden en iyi hizmeti sunuyoruz.",
  },
];

export default function HakkimizdaPage() {
  return (
    <>
      <JsonLd
        type="BreadcrumbList"
        data={buildBreadcrumbJsonLd([
          { name: "Ana Sayfa", href: "/" },
          { name: "Hakkımızda", href: "/hakkimizda" },
        ])}
      />

      {/* Hero */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Hakkımızda"
            subtitle="Düzce'de güvenilir çilingir hizmeti"
          />

          <div className="max-w-3xl mx-auto">
            <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed space-y-4">
              <p>
                <strong className="text-gray-900">Düzce Çilingir</strong> olarak
                yıllardır Düzce ve çevresinde profesyonel çilingir hizmeti
                sunuyoruz. Müşterilerimizin güvenliğini ve memnuniyetini ön
                planda tutarak, 7 gün 24 saat kesintisiz hizmet veriyoruz.
              </p>
              <p>
                Deneyimli ve uzman ekibimiz, en son teknoloji ekipmanlarla
                donatılmış olup, kapı açma, kilit değiştirme, oto çilingir ve
                kasa açma gibi tüm çilingir hizmetlerini hasarsız bir şekilde
                gerçekleştirmektedir.
              </p>
              <p>
                Düzce Merkez başta olmak üzere Akçakoca, Gölyaka, Çilimli,
                Cumayeri, Gümüşova, Kaynaşlı, Beyköy ve Yığılca ilçelerine
                hizmet vermekteyiz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Değerlerimiz */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Değerlerimiz"
            subtitle="Bizi farklı kılan temel değerlerimiz"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="text-center p-6 rounded-xl border border-gray-200 bg-white"
              >
                <span className="text-4xl block mb-4">{value.icon}</span>
                <h3 className="text-base font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-500">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

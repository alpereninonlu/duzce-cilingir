import type { Metadata } from "next";
import SectionTitle from "@/components/ui/SectionTitle";
import JsonLd, { buildBreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Hakkımızda | Düzce Çilingirci",
  description:
    "Düzce Merkez ve tüm ilçelerinde 7/24 profesyonel çilingir. Kale, Yuma, Hok, Daf bayisi. 5 dakikada hızlı servis.",
  alternates: {
    canonical: "https://duzcecilingirci.com/hakkimizda",
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
                <strong className="text-gray-900">Düzce Çilingirci</strong> olarak
                yıllardır Düzce Merkez ve tüm ilçelerine profesyonel ekibimizle <strong>7 gün 24 saat</strong> kesintisiz
                çilingir hizmeti vermekteyiz. Müşterilerimizin güvenliğini en üst düzeyde
                tutmak amacıyla her zaman kalite standartlarımızı en yukarıda tutuyoruz.
              </p>
              <p>
                Sektörün en güvenilir markalarının güvencesini kapınıza getiriyoruz.{" "}
                <strong>Kale, Yuma, Hok, Daf, Ymk ve Altın Kilit</strong> gibi öncü
                markaların bayiliklerini bünyemizde bulundurarak, ihtiyacınıza en uygun ve en
                güvenli kilit sistemlerini orijinal ürün garantisiyle sunuyoruz.
              </p>
              <p>
                Kapıda kalmanın ne kadar stresli bir durum olduğunun farkındayız. Bu nedenle
                acil kapı açma ve kilit değişimi hizmetlerinde iddialıyız;{" "}
                <strong>sadece 5 dakika içerisinde</strong> adresinize ulaşıyor ve profesyonel
                ekipmanlarımızla kapınıza zarar vermeden sorunu çözüyoruz.
              </p>
              <p>
                Düzce Merkez başta olmak üzere Akçakoca, Gölyaka, Çilimli,
                Cumayeri, Gümüşova, Kaynaşlı, Beyköy ve Yığılca&apos;da güvenilir çilingir
                aradığınız her an bir telefon kadar uzağınızdayız.
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

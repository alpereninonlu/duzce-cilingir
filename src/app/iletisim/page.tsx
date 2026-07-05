import type { Metadata } from "next";
import { contactInfo } from "@/data/contact";
import ContactForm from "@/components/ui/ContactForm";
import JsonLd, { buildBreadcrumbJsonLd } from "@/components/seo/JsonLd";
import SectionTitle from "@/components/ui/SectionTitle";

export const metadata: Metadata = {
  title: "İletişim | Düzce Çilingir",
  description:
    "Düzce Çilingir ile iletişime geçin. 7/24 çilingir hizmeti için hemen arayın veya formu doldurun.",
  alternates: {
    canonical: "https://www.duzcecilingirci.com/iletisim",
  },
};

export default function IletisimPage() {
  return (
    <>
      <JsonLd
        type="BreadcrumbList"
        data={buildBreadcrumbJsonLd([
          { name: "Ana Sayfa", href: "/" },
          { name: "İletişim", href: "/iletisim" },
        ])}
      />

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="İletişim"
            subtitle="Bize ulaşın, en kısa sürede dönüş yapalım"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Form */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 md:p-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">
                Mesaj Gönderin
              </h3>
              <ContactForm />
            </div>

            {/* Bilgi + Harita */}
            <div className="space-y-6">
              {/* İletişim Bilgileri */}
              <div className="bg-white rounded-xl border border-gray-200 p-6 md:p-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  İletişim Bilgileri
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-lg mt-0.5">📍</span>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Adres</p>
                      <p className="text-sm text-gray-500">{contactInfo.address}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-lg mt-0.5">📞</span>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Telefon</p>
                      <a
                        href={`tel:${contactInfo.phone}`}
                        className="text-sm text-primary-600 hover:text-primary-800"
                      >
                        {contactInfo.phoneDisplay}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-lg mt-0.5">✉️</span>
                    <div>
                      <p className="text-sm font-medium text-gray-900">E-posta</p>
                      <a
                        href={`mailto:${contactInfo.email}`}
                        className="text-sm text-primary-600 hover:text-primary-800"
                      >
                        {contactInfo.email}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-lg mt-0.5">🕐</span>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Çalışma Saatleri</p>
                      <p className="text-sm text-gray-500">
                        {contactInfo.workingHours.note}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Google Maps */}
              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <iframe
                  src={contactInfo.googleMapsEmbedUrl}
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Düzce Çilingir Konum"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import Link from "next/link";
import { services } from "@/data/services";
import SectionTitle from "@/components/ui/SectionTitle";

export default function ServicesPreview() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Hizmetlerimiz"
          subtitle="Düzce ve çevresinde profesyonel çilingir hizmetleri sunuyoruz"
        />

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="group rounded-xl border border-gray-200 bg-white p-4 sm:p-6 hover:border-primary-200 hover:shadow-md transition-all duration-200"
            >
              <span className="text-2xl sm:text-3xl block mb-2 sm:mb-4">{service.icon}</span>
              <h3 className="text-sm sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2 group-hover:text-primary-700 transition-colors">
                {service.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed hidden sm:block">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-10 text-center">
          <Link
            href="/hizmetler"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 hover:text-primary-800 transition-colors"
          >
            Tüm Hizmetleri Görüntüle
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

import { contactInfo } from "@/data/contact";

/**
 * Gerçek müşterileri Google yorum sayfasına yönlendirir.
 * contactInfo.googleReviewUrl boşsa hiç görünmez. Sahte yorum gösterilmez.
 */
export default function GoogleReviewSection() {
  if (!contactInfo.googleReviewUrl) return null;

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
          Hizmetimizden Memnun Kaldınız mı?
        </h2>
        <p className="mt-3 text-gray-500 text-sm sm:text-base">
          Google&apos;da bıraktığınız yorum, Düzce&apos;de çilingir arayan
          diğer insanlara yol gösterir.
        </p>
        <a
          href={contactInfo.googleReviewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-6 py-3 text-sm sm:text-base font-semibold text-gray-900 hover:border-primary-300 hover:bg-primary-50 transition-colors"
        >
          <span className="text-amber-400">★</span>
          Google&apos;da Bizi Değerlendirin
        </a>
      </div>
    </section>
  );
}

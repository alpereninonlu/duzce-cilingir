import { contactInfo } from "@/data/contact";
import { getPhoneUrl, getWhatsAppUrl } from "@/lib/utils";

export default function HeroSection() {
  return (
    <section className="relative bg-primary-950 text-white overflow-hidden">
      {/* Arka plan dekorasyon */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary-400 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-600 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20 md:py-28 lg:py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 sm:px-4 sm:py-1.5 text-xs sm:text-sm font-medium text-primary-200 mb-4 sm:mb-6">
            <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
            7/24 Açık — Şu Anda Hizmetinizdeyiz
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            Düzce&apos;de Güvenilir{" "}
            <span className="text-primary-300">Çilingir</span> Hizmeti
          </h1>

          <p className="mt-3 sm:mt-5 text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
            Kapınız kilitli mi kaldı? Profesyonel ekibimiz Düzce genelinde{" "}
            <strong className="text-white">15 dakikada</strong> kapınızda.
            Hasarsız kapı açma, kilit değiştirme ve oto çilingir hizmetleri.
          </p>

          {/* CTA Butonları */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href={getPhoneUrl(contactInfo.phone)}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-primary-900 px-6 py-3 sm:px-7 sm:py-3.5 text-sm sm:text-base font-bold hover:bg-gray-100 active:scale-[0.98] transition-all"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              Hemen Ara: {contactInfo.phoneDisplay}
            </a>
            <a
              href={getWhatsAppUrl(
                contactInfo.whatsapp,
                contactInfo.whatsappMessage
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25d366] text-white px-6 py-3 sm:px-7 sm:py-3.5 text-sm sm:text-base font-bold hover:bg-[#20bd5a] active:scale-[0.98] transition-all"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp İle Ulaşın
            </a>
          </div>

          {/* Güven göstergeleri */}
          <div className="mt-8 sm:mt-10 grid grid-cols-3 gap-3 sm:flex sm:flex-wrap sm:gap-6 text-sm text-gray-400">
            <div className="flex flex-col sm:flex-row items-center sm:items-center gap-1 sm:gap-2 text-center sm:text-left">
              <span className="text-xl sm:text-base">⚡</span>
              <span className="text-xs sm:text-sm">15 dk. Hızlı Varış</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center sm:items-center gap-1 sm:gap-2 text-center sm:text-left">
              <span className="text-xl sm:text-base">🛡️</span>
              <span className="text-xs sm:text-sm">Hasarsız Açma</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center sm:items-center gap-1 sm:gap-2 text-center sm:text-left">
              <span className="text-xl sm:text-base">💰</span>
              <span className="text-xs sm:text-sm">Uygun Fiyat</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

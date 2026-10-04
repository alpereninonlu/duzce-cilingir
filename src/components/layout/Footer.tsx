import Link from "next/link";
import { contactInfo } from "@/data/contact";
import { navLinks } from "@/data/navigation";
import { services } from "@/data/services";
import { getPhoneUrl } from "@/lib/utils";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* İşletme Bilgisi */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-2xl" aria-hidden="true">🔑</span>
              <span className="text-lg font-bold text-white">
                Düzce Çilingirci
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              Düzce Merkez ve çevresinde 7/24 kapı açma, kilit değiştirme, oto
              çilingir ve anahtar hizmetleri.
            </p>
          </div>

          {/* Hızlı Bağlantılar */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Sayfalar
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hizmetler */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Hizmetler
            </h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/hizmetler/${service.slug}`}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* İletişim (NAP — Google profili ile birebir aynı olmalı) */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              İletişim
            </h3>
            <address className="not-italic">
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm">
                  <span className="mt-0.5" aria-hidden="true">📍</span>
                  {contactInfo.googleMapsPlaceUrl ? (
                    <a
                      href={contactInfo.googleMapsPlaceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {contactInfo.address}
                    </a>
                  ) : (
                    <span className="text-gray-400">{contactInfo.address}</span>
                  )}
                </li>
                <li>
                  <a
                    href={getPhoneUrl(contactInfo.phone)}
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    <span aria-hidden="true">📞</span>
                    {contactInfo.phoneDisplay}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors break-all"
                  >
                    <span aria-hidden="true">✉️</span>
                    {contactInfo.email}
                  </a>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <span aria-hidden="true">🕐</span>
                  <span className="text-gray-400">
                    {contactInfo.workingHours.weekdays}
                  </span>
                </li>
              </ul>
            </address>
          </div>
        </div>

        {/* Alt Çizgi */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} Düzce Çilingirci. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}

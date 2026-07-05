import Link from "next/link";

export default function NotFound() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-xl px-4 text-center">
        <span className="text-6xl block mb-6">🔑</span>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          Sayfa Bulunamadı
        </h1>
        <p className="text-gray-500 mb-8">
          Aradığınız sayfa mevcut değil veya taşınmış olabilir.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-xl bg-primary-600 text-white px-6 py-3 text-sm font-semibold hover:bg-primary-700 transition-colors"
        >
          Ana Sayfaya Dön
        </Link>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services, getServiceBySlug } from "@/data/services";
import { getPostBySlug } from "@/data/blog";
import { contactInfo } from "@/data/contact";
import { siteConfig } from "@/data/siteConfig";
import { getPhoneUrl, getWhatsAppUrl } from "@/lib/utils";
import { buildMetadata } from "@/lib/seo";
import { photoExists, photoUrl } from "@/lib/photos";
import JsonLd, {
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
} from "@/components/seo/JsonLd";
import CTASection from "@/components/home/CTASection";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return buildMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/hizmetler/${service.slug}`,
  });
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const hasImage = photoExists(service.image.file);
  const relatedPosts = service.relatedPosts
    .map((s) => getPostBySlug(s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));
  const otherServices = services.filter((s) => s.slug !== service.slug);
  const whatsappText = `Merhaba, ${service.title.toLowerCase()} hizmeti hakkında bilgi almak istiyorum.`;

  return (
    <>
      <JsonLd
        type="BreadcrumbList"
        data={buildBreadcrumbJsonLd([
          { name: "Ana Sayfa", href: "/" },
          { name: "Hizmetler", href: "/hizmetler" },
          { name: service.title, href: `/hizmetler/${service.slug}` },
        ])}
      />
      <JsonLd
        type="Service"
        data={{
          name: service.h1,
          serviceType: service.title,
          description: service.metaDescription,
          url: `${siteConfig.siteUrl}/hizmetler/${service.slug}`,
        }}
      />
      {service.faqs.length > 0 && (
        <JsonLd type="FAQ" data={buildFaqJsonLd(service.faqs)} />
      )}

      <article className="py-10 sm:py-14 md:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Sayfa konumu" className="mb-6 text-sm text-gray-400">
            <Link href="/" className="hover:text-gray-600">Ana Sayfa</Link>
            <span className="mx-2">/</span>
            <Link href="/hizmetler" className="hover:text-gray-600">Hizmetler</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-600">{service.title}</span>
          </nav>

          <header>
            <span className="text-4xl block mb-3" aria-hidden="true">{service.icon}</span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              {service.h1}
            </h1>
          </header>

          <div className="mt-5 space-y-4 text-gray-600 leading-relaxed sm:text-lg">
            {service.intro.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          {/* Hızlı iletişim */}
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a
              href={getPhoneUrl(contactInfo.phone)}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary-600 text-white px-6 py-3 text-sm sm:text-base font-bold hover:bg-primary-700 transition-colors"
            >
              📞 Hemen Ara: {contactInfo.phoneDisplay}
            </a>
            <a
              href={getWhatsAppUrl(contactInfo.whatsapp, whatsappText)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25d366] text-white px-6 py-3 text-sm sm:text-base font-bold hover:bg-[#20bd5a] transition-colors"
            >
              WhatsApp ile Yazın
            </a>
          </div>

          {hasImage && (
            <figure className="mt-8 overflow-hidden rounded-xl border border-gray-200">
              <div className="relative aspect-[16/10]">
                <Image
                  src={photoUrl(service.image.file)}
                  alt={service.image.alt}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 768px"
                  className="object-cover"
                />
              </div>
            </figure>
          )}

          {/* İçerik bölümleri */}
          {service.sections.map((section) => (
            <section key={section.heading} className="mt-10">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                {section.heading}
              </h2>
              {section.list && (
                <ul className="mb-4 space-y-2 text-gray-600">
                  {section.list.map((item) => (
                    <li key={item} className="flex gap-2.5">
                      <span className="text-primary-500 mt-0.5" aria-hidden="true">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
              {section.paragraphs?.map((p) => (
                <p key={p} className="text-gray-600 leading-relaxed mb-4">
                  {p}
                </p>
              ))}
            </section>
          ))}

          {/* SSS */}
          {service.faqs.length > 0 && (
            <section className="mt-12">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                Sık Sorulan Sorular
              </h2>
              <div className="space-y-3">
                {service.faqs.map((faq) => (
                  <details
                    key={faq.question}
                    className="group rounded-lg border border-gray-200 bg-white"
                  >
                    <summary className="cursor-pointer list-none px-5 py-4 font-medium text-gray-900 flex justify-between gap-4">
                      {faq.question}
                      <span className="text-gray-400 group-open:rotate-180 transition-transform" aria-hidden="true">⌄</span>
                    </summary>
                    <p className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>
          )}

          {/* Hizmet bölgesi */}
          <section className="mt-12 rounded-xl bg-gray-50 border border-gray-200 p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-2">Hizmet Bölgesi</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Düzce Merkez başta olmak üzere Akçakoca, Gölyaka, Çilimli, Cumayeri,
              Gümüşova, Kaynaşlı, Beyköy ve Yığılca&apos;da hizmet veriyoruz.
              Dükkânımız: {contactInfo.address}.{" "}
              <Link href="/hizmet-bolgeleri" className="font-medium text-primary-700 underline underline-offset-2">
                Tüm hizmet bölgelerini görün
              </Link>
              .
            </p>
          </section>

          {/* İlgili yazılar */}
          {relatedPosts.length > 0 && (
            <section className="mt-12">
              <h2 className="text-lg font-bold text-gray-900 mb-4">İlgili Yazılar</h2>
              <ul className="space-y-2">
                {relatedPosts.map((post) => (
                  <li key={post.slug}>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-primary-700 hover:text-primary-900 underline underline-offset-2"
                    >
                      {post.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Diğer hizmetler */}
          <section className="mt-12">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Diğer Hizmetlerimiz</h2>
            <div className="flex flex-wrap gap-2">
              {otherServices.map((s) => (
                <Link
                  key={s.slug}
                  href={`/hizmetler/${s.slug}`}
                  className="rounded-full border border-gray-200 px-4 py-2 text-sm text-gray-700 hover:border-primary-300 hover:text-primary-700 transition-colors"
                >
                  {s.title}
                </Link>
              ))}
            </div>
          </section>
        </div>
      </article>

      <CTASection />
    </>
  );
}

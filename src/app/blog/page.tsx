import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/data/blog";
import { formatDate } from "@/lib/utils";
import SectionTitle from "@/components/ui/SectionTitle";
import JsonLd, { buildBreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Blog | Düzce Çilingir",
  description:
    "Çilingir hizmetleri, kilit güvenliği, kapı bakımı ve daha fazlası hakkında bilgilendirici yazılar.",
  alternates: {
    canonical: "https://www.duzcecilingirci.com/blog",
  },
};

export default function BlogPage() {
  return (
    <>
      <JsonLd
        type="BreadcrumbList"
        data={buildBreadcrumbJsonLd([
          { name: "Ana Sayfa", href: "/" },
          { name: "Blog", href: "/blog" },
        ])}
      />

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Blog"
            subtitle="Çilingir hizmetleri ve güvenlik hakkında faydalı bilgiler"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group rounded-xl border border-gray-200 bg-white overflow-hidden hover:border-primary-200 hover:shadow-md transition-all duration-200"
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                    <span>·</span>
                    <span>{post.readTime} okuma</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-700 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <span className="inline-block mt-4 text-sm font-semibold text-primary-600 group-hover:text-primary-800 transition-colors">
                    Devamını Oku →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

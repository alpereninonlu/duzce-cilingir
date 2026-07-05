import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts } from "@/data/blog";
import { formatDate } from "@/lib/utils";
import { siteConfig } from "@/data/siteConfig";
import JsonLd, { buildBreadcrumbJsonLd } from "@/components/seo/JsonLd";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `${siteConfig.siteUrl}/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Basit markdown → paragraf dönüşümü
  const contentParagraphs = post.content
    .split("\n\n")
    .filter((p) => p.trim());

  return (
    <>
      <JsonLd
        type="BreadcrumbList"
        data={buildBreadcrumbJsonLd([
          { name: "Ana Sayfa", href: "/" },
          { name: "Blog", href: "/blog" },
          { name: post.title, href: `/blog/${post.slug}` },
        ])}
      />
      <JsonLd
        type="Article"
        data={{
          headline: post.title,
          description: post.excerpt,
          datePublished: post.date,
          author: {
            "@type": "Person",
            name: post.author,
          },
          url: `${siteConfig.siteUrl}/blog/${post.slug}`,
        }}
      />

      <article className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm text-gray-400">
            <Link href="/" className="hover:text-gray-600 transition-colors">
              Ana Sayfa
            </Link>
            <span className="mx-2">/</span>
            <Link
              href="/blog"
              className="hover:text-gray-600 transition-colors"
            >
              Blog
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-600">{post.title}</span>
          </nav>

          {/* Başlık */}
          <header className="mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span>·</span>
              <span>{post.readTime} okuma</span>
              <span>·</span>
              <span>{post.author}</span>
            </div>
          </header>

          {/* İçerik */}
          <div className="prose prose-gray max-w-none">
            {contentParagraphs.map((paragraph, i) => {
              if (paragraph.startsWith("## ")) {
                return (
                  <h2
                    key={i}
                    className="text-xl font-bold text-gray-900 mt-8 mb-4"
                  >
                    {paragraph.replace("## ", "")}
                  </h2>
                );
              }
              return (
                <p
                  key={i}
                  className="text-gray-600 leading-relaxed mb-4"
                >
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Geri dön */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link
              href="/blog"
              className="text-sm font-semibold text-primary-600 hover:text-primary-800 transition-colors"
            >
              ← Tüm Yazılar
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}

// =============================================
// Düzce Çilingirci — TypeScript Tip Tanımlamaları
// =============================================

export interface ContactInfo {
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  whatsappMessage: string;
  email: string;
  address: string;
  streetAddress: string;
  neighborhood: string;
  city: string;
  district: string;
  postalCode: string;
  /** Google İşletme Profili linki (Maps "Paylaş" linki). Boşsa Yol Tarifi butonu gizlenir. */
  googleMapsPlaceUrl: string;
  /** Google yorum yazma linki. Boşsa "Google'da bizi değerlendirin" butonu gizlenir. */
  googleReviewUrl: string;
  /** Google Maps "Haritayı yerleştir" iframe src değeri. Boşsa adres ile harita gösterilir. */
  googleMapsEmbedUrl: string;
  workingHours: WorkingHours;
}

export interface WorkingHours {
  weekdays: string;
  saturday: string;
  sunday: string;
  note: string;
}

export interface ServiceSection {
  heading: string;
  paragraphs?: string[];
  list?: string[];
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  /** Kartlarda görünen kısa açıklama */
  description: string;
  icon: string;
  /** Detay sayfası H1 */
  h1: string;
  /** <title> (marka şablonla eklenir) */
  metaTitle: string;
  metaDescription: string;
  intro: string[];
  sections: ServiceSection[];
  faqs: { question: string; answer: string }[];
  /** İlgili blog yazılarının slug'ları */
  relatedPosts: string[];
  /** /public/images altındaki görsel dosyası (varsa otomatik gösterilir) */
  image: { file: string; alt: string };
}

export interface Region {
  id: string;
  name: string;
  description: string;
  slug: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  readTime: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface SiteConfig {
  siteName: string;
  siteTitle: string;
  siteDescription: string;
  siteUrl: string;
  locale: string;
}

export interface NavLink {
  label: string;
  href: string;
}

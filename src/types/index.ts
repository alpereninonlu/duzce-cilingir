// =============================================
// Düzce Çilingir — TypeScript Tip Tanımlamaları
// =============================================

export interface ContactInfo {
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  whatsappMessage: string;
  email: string;
  address: string;
  city: string;
  district: string;
  googleMapsEmbedUrl: string;
  googleMapsDirectionUrl: string;
  workingHours: WorkingHours;
}

export interface WorkingHours {
  weekdays: string;
  saturday: string;
  sunday: string;
  note: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  slug: string;
}

export interface Testimonial {
  id: string;
  name: string;
  comment: string;
  rating: number;
  date: string;
  location: string;
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
  ogImage: string;
  twitterHandle: string;
}

export interface NavLink {
  label: string;
  href: string;
}

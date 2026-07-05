/**
 * Yardımcı fonksiyonlar
 * İleride API/CMS entegrasyonu için bu dosya genişletilebilir.
 */

/** CSS class adlarını birleştirir, falsy değerleri filtreler */
export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

/** Tarihi Türkçe formatlar */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("tr-TR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/** WhatsApp chat URL'si oluşturur */
export function getWhatsAppUrl(phone: string, message?: string): string {
  const encodedMessage = message ? encodeURIComponent(message) : "";
  return `https://wa.me/${phone}${encodedMessage ? `?text=${encodedMessage}` : ""}`;
}

/** Telefon URL'si oluşturur */
export function getPhoneUrl(phone: string): string {
  return `tel:${phone}`;
}

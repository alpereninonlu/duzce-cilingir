import type { ContactInfo } from "@/types";

/**
 * İşletmenin tek doğruluk kaynağı (NAP: Name, Address, Phone).
 * Google İşletme Profili'ndeki bilgilerle birebir aynı tutulmalıdır.
 */
export const contactInfo: ContactInfo = {
  phone: "+905468816007",
  phoneDisplay: "0546 881 60 07",
  whatsapp: "905468816007",
  whatsappMessage: "Merhaba, çilingir hizmeti hakkında bilgi almak istiyorum.",
  email: "altunsoyanahtar@gmail.com",
  address: "Burhaniye Mah. Bolu Cad. No:17, Merkez/Düzce",
  streetAddress: "Burhaniye Mah. Bolu Cad. No:17",
  neighborhood: "Burhaniye",
  city: "Düzce",
  district: "Merkez",
  // Doğru posta kodunu biliyorsanız yazın (Google profilindekiyle aynı olmalı)
  postalCode: "",
  // Google İşletme Profili hazır olduğunda doldurun:
  // Maps'te işletmeyi açın → Paylaş → linki kopyalayın (örn. https://maps.app.goo.gl/xxxx)
  googleMapsPlaceUrl: "",
  // İşletme Profili → "Yorum iste" → linki kopyalayın (örn. https://g.page/r/xxxx/review)
  googleReviewUrl: "",
  // Maps → Paylaş → Haritayı yerleştir → iframe içindeki src değeri
  googleMapsEmbedUrl: "",
  workingHours: {
    weekdays: "7/24 Açık",
    saturday: "7/24 Açık",
    sunday: "7/24 Açık",
    note: "Acil durumlarda 7 gün 24 saat hizmetinizdeyiz.",
  },
};

/** Adres tabanlı harita (Google profili linki gelene kadar) */
export const addressMapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
  `${contactInfo.streetAddress}, ${contactInfo.district}, ${contactInfo.city}`
)}&z=16&output=embed`;

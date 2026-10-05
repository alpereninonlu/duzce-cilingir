export interface Testimonial {
  id: string;
  name: string;
  district: string;
  text: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Ahmet Y.",
    district: "Merkez",
    text: "Gece yarısı kapıda kaldık, 10 dakika içinde gelip kapımızı hasarsız açtılar. Çok profesyonel ve güvenilir bir hizmet. Kesinlikle tavsiye ederim.",
    rating: 5,
  },
  {
    id: "2",
    name: "Ayşe K.",
    district: "Kalıcı Konutlar",
    text: "Yeni taşındığımız evin kilitlerini değiştirmek için çağırdık. Hem kaliteli Kale kilit taktılar hem de fiyatları gayet uygundu.",
    rating: 5,
  },
  {
    id: "3",
    name: "Mehmet D.",
    district: "Akçakoca",
    text: "Aracımın anahtarını içinde unuttum. Düzce Merkez'den kısa sürede geldiler ve arabama hiçbir zarar vermeden açtılar. Ustalıklarına sağlık.",
    rating: 5,
  },
];

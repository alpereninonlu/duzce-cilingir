import fs from "node:fs";
import path from "node:path";

/**
 * Gerçek işletme fotoğrafları.
 * Dosyaları /public/images klasörüne bu isimlerle (WebP önerilir) koyduğunuzda
 * ilgili sayfalarda otomatik görünür. Dosya yoksa o alan hiç render edilmez.
 */
export interface Photo {
  file: string;
  alt: string;
  caption?: string;
}

export const businessPhotos: Photo[] = [
  { file: "dukkan-dis.webp", alt: "Düzce Çilingirci dükkânının Bolu Caddesi'nden dış görünümü", caption: "Dükkânımız – Burhaniye Mah. Bolu Cad. No:17" },
  { file: "dukkan-ici.webp", alt: "Düzce Çilingirci dükkânının içi, anahtar ve kilit rafları", caption: "Dükkân içi" },
  { file: "calisma-araci.webp", alt: "Düzce Çilingirci servis aracı", caption: "Servis aracımız" },
  { file: "anahtar-kilit-urunleri.webp", alt: "Dükkânda satılan kilit göbekleri ve anahtar çeşitleri", caption: "Kilit ve anahtar ürünleri" },
  { file: "usta.webp", alt: "Düzce Çilingirci ustası iş başında", caption: "Ustamız iş başında" },
];

const IMAGES_DIR = path.join(process.cwd(), "public", "images");

export function photoExists(file: string): boolean {
  try {
    return fs.existsSync(path.join(IMAGES_DIR, file));
  } catch {
    return false;
  }
}

export function getAvailablePhotos(photos: Photo[] = businessPhotos): Photo[] {
  return photos.filter((p) => photoExists(p.file));
}

export function photoUrl(file: string): string {
  return `/images/${file}`;
}

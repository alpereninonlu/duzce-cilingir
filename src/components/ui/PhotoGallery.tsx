import Image from "next/image";
import { getAvailablePhotos, photoUrl, type Photo } from "@/lib/photos";

/**
 * Sadece /public/images içinde gerçekten var olan fotoğrafları gösterir.
 * Hiç fotoğraf yoksa hiçbir şey render etmez (boş/stok görsel yok).
 */
export default function PhotoGallery({
  photos,
  title,
}: {
  photos?: Photo[];
  title?: string;
}) {
  const available = getAvailablePhotos(photos);
  if (available.length === 0) return null;

  return (
    <div>
      {title && (
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 text-center">
          {title}
        </h2>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {available.map((photo) => (
          <figure
            key={photo.file}
            className="overflow-hidden rounded-xl border border-gray-200 bg-white"
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={photoUrl(photo.file)}
                alt={photo.alt}
                fill
                loading="lazy"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
            {photo.caption && (
              <figcaption className="px-4 py-3 text-sm text-gray-600">
                {photo.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    </div>
  );
}

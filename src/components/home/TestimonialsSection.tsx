import { testimonials } from "@/data/testimonials";
import SectionTitle from "@/components/ui/SectionTitle";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} üzerinden 5 yıldız`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={`text-xs sm:text-sm ${i < rating ? "text-amber-400" : "text-gray-200"}`}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Müşteri Yorumları"
          subtitle="Müşterilerimizin hizmetimiz hakkındaki görüşleri"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {testimonials.slice(0, 6).map((testimonial) => (
            <div
              key={testimonial.id}
              className="rounded-xl border border-gray-200 bg-white p-4 sm:p-6"
            >
              <StarRating rating={testimonial.rating} />
              <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-4">
                &ldquo;{testimonial.comment}&rdquo;
              </p>
              <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-100 flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 text-primary-700 text-xs font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-gray-400">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

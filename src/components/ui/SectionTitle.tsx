interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  /** Sayfanın ana başlığı ise "h1" verin (her sayfada tek H1) */
  as?: "h1" | "h2";
}

export default function SectionTitle({
  title,
  subtitle,
  centered = true,
  as: Tag = "h2",
}: SectionTitleProps) {
  return (
    <div className={`mb-8 sm:mb-10 md:mb-12 ${centered ? "text-center" : ""}`}>
      <Tag
        className={
          Tag === "h1"
            ? "text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900"
            : "text-xl sm:text-2xl md:text-3xl font-bold text-gray-900"
        }
      >
        {title}
      </Tag>
      {subtitle && (
        <p className="mt-2 sm:mt-3 text-gray-500 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}

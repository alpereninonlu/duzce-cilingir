interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionTitle({
  title,
  subtitle,
  centered = true,
}: SectionTitleProps) {
  return (
    <div className={`mb-8 sm:mb-10 md:mb-12 ${centered ? "text-center" : ""}`}>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">{title}</h2>
      {subtitle && (
        <p className="mt-2 sm:mt-3 text-gray-500 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}

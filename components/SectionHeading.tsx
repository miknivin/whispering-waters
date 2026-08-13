type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  tone = "dark",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center items-center mx-auto" : "text-left items-start";

  return (
    <div className={`flex flex-col ${alignClass} max-w-2xl`}>
      <span className={`eyebrow ${tone === "light" ? "text-gold-soft" : ""}`}>{eyebrow}</span>
      <h2
        className={`mt-3 text-balance text-[2rem] leading-[1.15] sm:text-[2.6rem] ${
          tone === "light" ? "text-cream" : ""
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-balance text-[1.02rem] leading-relaxed ${
            tone === "light" ? "text-cream/75" : "text-ink-soft"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

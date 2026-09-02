import ScrollReveal from "./ScrollReveal";
import Badge from "./Badge";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const alignClass =
    align === "center"
      ? "mx-auto text-center items-center"
      : "text-left items-start";

  return (
    <ScrollReveal
      className={`flex flex-col gap-5 ${alignClass} max-w-3xl ${className}`}
    >
      {eyebrow && <Badge>{eyebrow}</Badge>}
      <h2 className="display text-[clamp(36px,5vw,64px)] text-cream">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-2xl text-lg leading-relaxed text-cream-dim">
          {subtitle}
        </p>
      )}
    </ScrollReveal>
  );
}

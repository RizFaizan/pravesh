import Badge from "@/components/ui/Badge";
import type { ReactNode } from "react";

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  lede?: string;
}

export default function PageHero({ eyebrow, title, lede }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pb-10 pt-36 text-center md:pt-44">
      <div className="absolute -top-20 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-gold/10 blur-3xl" />
      <div className="relative mx-auto flex w-[min(900px,calc(100%-48px))] flex-col items-center gap-6 pt-10">
        <Badge>{eyebrow}</Badge>
        <h1 className="display text-[clamp(44px,7vw,84px)] text-cream">
          {title}
        </h1>
        {lede && (
          <p className="max-w-2xl text-lg leading-relaxed text-cream-dim">
            {lede}
          </p>
        )}
      </div>
    </section>
  );
}

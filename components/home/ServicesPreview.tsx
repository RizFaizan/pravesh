import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { SERVICES_PREVIEW } from "@/lib/constants";

export default function ServicesPreview() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto w-[min(1200px,calc(100%-48px))]">
        <SectionHeading
          eyebrow="What we do"
          title="Three worlds. One workshop."
          subtitle="From a single family sofa to complete restaurant fit-outs and taxi fleets — every piece meets the same standard of craft."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {SERVICES_PREVIEW.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 0.1}>
              <Link
                href={s.href}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.06] bg-surface/40 transition-all duration-500 hover:-translate-y-2 hover:border-gold/30"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep/80 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-deep/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-gold-light backdrop-blur-md">
                    {s.title}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="flex-1 text-[15px] leading-relaxed text-cream-dim">
                    {s.desc}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold-light">
                    Explore {s.title.toLowerCase()}
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

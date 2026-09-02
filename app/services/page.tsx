import { Check } from "lucide-react";

import Badge from "@/components/ui/Badge";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";
import CTASection from "@/components/home/CTASection";
import { SERVICE_CATEGORIES } from "@/lib/constants";

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Service architecture"
        title={
          <>
            Craft, organised for every
            <br />
            <span className="text-gradient-gold">room</span> and every{" "}
            <span className="text-gradient-gold">fleet</span>.
          </>
        }
        lede="Every project — a single armchair or a 24-booth restaurant fit-out — passes through the same careful process and the same quality bar."
      />

      {/* Categories */}
      <section className="py-14 md:py-20">
        <div className="mx-auto flex w-[min(1200px,calc(100%-48px))] flex-col gap-16">
          {SERVICE_CATEGORIES.map((cat, i) => (
            <div
              key={cat.id}
              id={cat.id}
              className="scroll-mt-28"
            >
              <ScrollReveal>
                <div
                  className={`grid items-center gap-10 lg:grid-cols-2 ${
                    i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  {cat.img && (
                    <div className="overflow-hidden rounded-2xl border border-white/[0.06]">
                      <img
                        src={cat.img}
                        alt={cat.title}
                        className="aspect-[4/3] w-full object-cover"
                      />
                    </div>
                  )}
                  <div
                    className={cat.img ? "" : "lg:col-span-2"}
                  >
                    <Badge>{cat.title}</Badge>
                    <p className="mt-5 max-w-xl text-lg leading-relaxed text-cream-dim">
                      {cat.intro}
                    </p>
                    <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                      {cat.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-[15px] text-cream"
                        >
                          <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gold/15">
                            <Check className="h-3 w-3 text-gold-light" />
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </section>

      {/* Safety & materials band */}
      <section className="pb-20">
        <div className="mx-auto w-[min(1200px,calc(100%-48px))]">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-3xl border border-gold/20 bg-gradient-to-br from-surface to-deep px-8 py-14 text-center">
              <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gold/10 blur-3xl" />
              <SectionHeading
                eyebrow="Safety & materials"
                title="Built to be seen and to last."
                subtitle="FR-graded contract fabrics for commercial work, quality-checked foams and springs, and materials chosen to suit how your piece is actually used."
              />
              <div className="mt-8 flex justify-center">
                <Button href="/about" variant="ghost">
                  Read the atelier notes
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}

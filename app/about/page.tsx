import { MapPin, Gem, HeartHandshake, Ruler } from "lucide-react";

import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import CTASection from "@/components/home/CTASection";
import { COVERAGE_AREAS } from "@/lib/constants";

const VALUES = [
  {
    icon: Gem,
    title: "Precision",
    desc: "Foam densities, seam allowances and fabric direction are all measured and matched to the piece — never guessed.",
  },
  {
    icon: HeartHandshake,
    title: "Heritage",
    desc: "Since 2009 we've treated every piece as if it were our own — respecting original character while rebuilding it to last.",
  },
  {
    icon: Ruler,
    title: "Trust",
    desc: "Clear quotes, no hidden extras, and a workshop you can visit. We'd rather over-communicate than under-deliver.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="The atelier"
        title={
          <>
            A workshop, not a
            <br />
            <span className="text-gradient-gold">showroom</span>.
          </>
        }
        lede="Parvesh Upholstery is a working workshop in Hayes, West London. Fabric, foam, springs and frames — every element is handled under one roof."
      />

      {/* Story section */}
      <section className="py-14 md:py-20">
        <div className="mx-auto grid w-[min(1200px,calc(100%-48px))] items-center gap-10 lg:grid-cols-2">
          <ScrollReveal direction="left">
            <div className="overflow-hidden rounded-2xl border border-white/[0.06]">
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=70"
                alt="Hand crafting fabric in the workshop"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={0.1}>
            <Badge>Our story</Badge>
            <h2 className="display mt-5 text-[clamp(32px,4vw,52px)] text-cream">
              Built on fabric, springs and trust.
            </h2>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-cream-dim">
              <p>
                What began as a single workbench restoring family chairs has
                grown into a full-service workshop serving homes, restaurants,
                hotels and taxi fleets across West London.
              </p>
              <p>
                In the workshop nothing is rushed. Frames are inspected,
                springs re-tied where needed, and every seam is cut, stitched
                and finished by hand. It&apos;s slower than a production line —
                and it&apos;s exactly why our pieces outlast them.
              </p>
              <p>
                Whether it&apos;s a grandmother&apos;s armchair or a 24-seat
                banquette, the same care applies: inspect, specify, restore,
                return.
              </p>
            </div>
            <div className="mt-8">
              <Button href="/gallery">See our work</Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Values */}
      <section className="border-y border-white/[0.06] bg-surface/20 py-20 md:py-28">
        <div className="mx-auto w-[min(1200px,calc(100%-48px))]">
          <SectionHeading
            eyebrow="What guides us"
            title="Three values, every piece."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {VALUES.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.1}>
                <div className="flex h-full flex-col rounded-2xl border border-white/[0.06] bg-surface/40 p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/30">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-gold-light to-gold text-deep">
                    <v.icon className="h-6 w-6" />
                  </div>
                  <h3 className="display mt-6 text-2xl font-semibold text-cream">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-cream-dim">
                    {v.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="py-20 md:py-28">
        <div className="mx-auto w-[min(1200px,calc(100%-48px))]">
          <ScrollReveal>
            <div className="rounded-3xl border border-white/[0.06] bg-surface/30 p-8 md:p-12">
              <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <Badge>Where we work</Badge>
                  <h2 className="display mt-5 text-[clamp(32px,4vw,52px)] text-cream">
                    Serving West London &amp; beyond.
                  </h2>
                  <p className="mt-3 max-w-xl text-cream-dim">
                    Workshop collection &amp; delivery, plus on-site work across
                    the region. If you&apos;re outside the area, get in touch —
                    we often travel further for commercial projects.
                  </p>
                </div>
                <div className="grid shrink-0 grid-cols-2 gap-3">
                  {COVERAGE_AREAS.map((area) => (
                    <span
                      key={area}
                      className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-sm text-cream-dim"
                    >
                      <MapPin className="h-3.5 w-3.5 text-gold" />
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}

import type { Metadata } from "next";

import PageHero from "@/components/ui/PageHero";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Stars from "@/components/ui/Stars";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import CTASection from "@/components/home/CTASection";
import { TESTIMONIALS, BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Client Reviews",
  description:
    "What West London clients say about Parvesh Upholstery — domestic, commercial and vehicle reupholstery with a 4.9-star rating.",
};

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Client words"
        title={
          <>
            What our clients
            <br />
            <span className="text-gradient-gold">say</span>.
          </>
        }
        lede="Real feedback from homes, restaurants and fleets across West London."
      />

      {/* Summary stats */}
      <section className="pb-10">
        <div className="mx-auto flex w-[min(900px,calc(100%-48px))] flex-col items-center gap-6 rounded-3xl border border-white/[0.06] bg-surface/30 p-8 text-center md:flex-row md:justify-center md:gap-14">
          <div>
            <div className="display text-[clamp(44px,5vw,64px)] text-gradient-gold">
              {BUSINESS.reviewsGoogle}
            </div>
            <Stars rating={5} className="justify-center" />
            <div className="mt-2 text-sm text-cream-dim">
              Google rating
            </div>
          </div>
          <div className="hidden h-16 w-px bg-white/10 md:block" />
          <div>
            <div className="display text-[clamp(44px,5vw,64px)] text-cream">
              {BUSINESS.reviewsCount}+
            </div>
            <div className="mt-2 text-sm text-cream-dim">Verified reviews</div>
          </div>
          <div className="hidden h-16 w-px bg-white/10 md:block" />
          <div>
            <div className="display text-[clamp(44px,5vw,64px)] text-cream">
              92%
            </div>
            <div className="mt-2 text-sm text-cream-dim">
              Would recommend us
            </div>
          </div>
        </div>
      </section>

      {/* Review grid */}
      <section className="pb-20 pt-10">
        <div className="mx-auto grid w-[min(1200px,calc(100%-48px))] gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <ScrollReveal key={t.name} delay={(i % 3) * 0.08}>
              <figure className="flex h-full flex-col rounded-2xl border border-white/[0.06] bg-surface/40 p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/30">
                <div className="flex items-center justify-between">
                  <Stars rating={t.rating} />
                  <span className="text-xs text-muted">{t.date}</span>
                </div>
                <blockquote className="mt-5 flex-1 text-[15px] leading-relaxed text-cream">
                  “{t.text}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-white/[0.06] pt-4">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-gold-light to-gold text-sm font-bold text-deep">
                    {t.name.charAt(0)}
                  </span>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-cream">
                      {t.name}
                    </div>
                    <div className="text-xs text-muted">
                      {t.area} · {t.service}
                    </div>
                  </div>
                </figcaption>
              </figure>
            </ScrollReveal>
          ))}
        </div>

        {/* Google CTA */}
        <div className="mt-12 text-center">
          <Badge>Leave us a review</Badge>
          <div className="mt-6">
            <Button href="#" variant="ghost">
              Review us on Google
            </Button>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

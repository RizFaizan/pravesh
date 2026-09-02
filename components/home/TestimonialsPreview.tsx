import ScrollReveal from "@/components/ui/ScrollReveal";
import Stars from "@/components/ui/Stars";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

const FEATURED = [
  {
    name: "Priya S.",
    area: "Hayes",
    rating: 5,
    text: "Sent a photo on WhatsApp, got a quote the same afternoon. The sofa came back better than the day we bought it.",
  },
  {
    name: "Daniel M.",
    area: "Hounslow",
    rating: 5,
    text: "They reupholstered 24 booth seats for our restaurant over a weekend. Zero disruption, immaculate finish.",
  },
  {
    name: "Ayesha K.",
    area: "Uxbridge",
    rating: 5,
    text: "The attention to detail is exceptional. The finished headboard looks like it cost triple what we paid.",
  },
];

export default function TestimonialsPreview() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto w-[min(1200px,calc(100%-48px))]">
        <SectionHeading
          eyebrow="Client words"
          title="Trusted across West London."
          subtitle="Real clients, real projects — from family homes to busy restaurants."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {FEATURED.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 0.1}>
              <figure className="flex h-full flex-col rounded-2xl border border-white/[0.06] bg-surface/40 p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/30">
                <Stars rating={t.rating} />
                <blockquote className="mt-5 flex-1 text-[15px] leading-relaxed text-cream">
                  “{t.text}”
                </blockquote>
                <figcaption className="mt-6 flex items-center justify-between border-t border-white/[0.06] pt-4">
                  <div>
                    <div className="text-sm font-semibold text-cream">
                      {t.name}
                    </div>
                    <div className="text-xs text-muted">{t.area}</div>
                  </div>
                  <span className="text-[11px] uppercase tracking-widest text-gold-light">
                    Verified
                  </span>
                </figcaption>
              </figure>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button href="/reviews" variant="ghost">
            Read all reviews
          </Button>
        </div>
      </div>
    </section>
  );
}

import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function CTASection() {
  return (
    <section className="pb-24">
      <div className="mx-auto w-[min(1200px,calc(100%-48px))]">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-3xl border border-gold/20 bg-gradient-to-br from-surface to-deep px-8 py-16 text-center md:py-20">
            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />
            <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-warm/10 blur-3xl" />

            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-gold-light">
                Quote in hours, not weeks
              </span>
              <h2 className="display mx-auto mt-6 max-w-2xl text-[clamp(36px,5vw,60px)] text-cream">
                Send a photo. We&apos;ll reply with a path.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-cream-dim">
                WhatsApp us a few photos of your piece and we&apos;ll walk you
                through fabric options and a clear, fixed quote.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Button href="/contact">Open the atelier desk</Button>
                <Button href="/services" variant="ghost">
                  Browse services
                </Button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

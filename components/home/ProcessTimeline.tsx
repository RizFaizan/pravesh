import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { PROCESS_STEPS } from "@/lib/constants";

export default function ProcessTimeline() {
  return (
    <section className="border-y border-white/[0.06] bg-surface/20 py-20 md:py-28">
      <div className="mx-auto w-[min(1200px,calc(100%-48px))]">
        <SectionHeading
          eyebrow="The process"
          title="Unhurried. Uncompromised."
          subtitle="Four steps from first enquiry to finished piece — with clear communication the whole way."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((step, i) => (
            <ScrollReveal key={step.step} delay={i * 0.1}>
              <div className="group flex h-full flex-col rounded-2xl border border-white/[0.06] bg-surface/40 p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/30">
                <span className="display text-5xl font-semibold text-gold/40 transition-colors duration-500 group-hover:text-gold/70">
                  {step.step}
                </span>
                <h3 className="display mt-5 text-2xl font-semibold text-cream">
                  {step.title}
                </h3>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-cream-dim">
                  {step.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

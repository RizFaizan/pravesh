import type { Metadata } from "next";

import PageHero from "@/components/ui/PageHero";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import Badge from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Contact & Quote",
  description:
    "Request a free quote from Parvesh Upholstery in Hayes, West London. WhatsApp, call or use the form — no obligation.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="The atelier desk"
        title={
          <>
            Tell us the piece.
            <br />
            We&apos;ll tell you the <span className="text-gradient-gold">path</span>.
          </>
        }
        lede="Send a photo, visit the workshop, or give us a call. Every quote is clear, fixed, and free of obligation."
      />

      <section className="pb-20 md:pb-28">
        <div className="mx-auto grid w-[min(1200px,calc(100%-48px))] gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <ScrollReveal>
            <ContactForm />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <ContactInfo />
          </ScrollReveal>
        </div>

        <div className="mx-auto mt-14 flex w-[min(1200px,calc(100%-48px))] justify-center">
          <Badge>We respond within 24 hours, usually much faster</Badge>
        </div>
      </section>
    </>
  );
}

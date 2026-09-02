import type { Metadata } from "next";

import PageHero from "@/components/ui/PageHero";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Before and after upholstery work from Parvesh Upholstery — sofas, dining sets, banquettes, headboards and vehicle seats.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Before & after"
        title={
          <>
            Proof lives in the
            <br />
            <span className="text-gradient-gold">grain of the cloth</span>.
          </>
        }
        lede="Browse recent restorations from the workshop — filter by domestic, commercial or vehicle work."
      />
      <GalleryGrid />
      <CTASection />
    </>
  );
}

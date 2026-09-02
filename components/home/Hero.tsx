"use client";

import { motion } from "motion/react";

import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

const META = ["Domestic", "Commercial", "Vehicle"];

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background image with dark overlay */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=2000&q=80"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-deep/80 via-deep/70 to-deep" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,168,83,0.15),transparent_60%)]" />
      </div>

      <div className="mx-auto flex w-[min(1200px,calc(100%-48px))] flex-col items-center py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <Badge>{`Hayes · West London · UK`}</Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="display mt-8 max-w-5xl text-[clamp(52px,9vw,120px)] tracking-tight text-cream"
        >
          Furniture,
          <br />
          <span className="text-gradient-gold">reborn</span> in fabric &amp;
          light.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-7 max-w-xl text-lg leading-relaxed text-cream-dim"
        >
          Award-level upholstery, restoration and re-trimming from our Hayes
          workshop and across West London.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Button href="/contact">Start a restoration</Button>
          <Button href="/gallery" variant="ghost">
            See the craft
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 flex flex-wrap items-center justify-center gap-3"
        >
          {META.map((m) => (
            <span
              key={m}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 text-sm font-medium text-cream"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              {m}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

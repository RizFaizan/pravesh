"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "motion/react";

interface StatCounterProps {
  value: number;
  suffix?: string;
  label: string;
}

export default function StatCounter({
  value,
  suffix = "",
  label,
}: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 2000, bounce: 0 });
  const [rendered, setRendered] = useState("0");

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, value, motionValue]);

  useEffect(() => {
    const unsubscribe = spring.on("change", (latest: number) => {
      setRendered(`${Math.round(latest).toLocaleString()}${suffix}`);
    });
    return unsubscribe;
  }, [spring, suffix]);

  return (
    <div ref={ref} className="flex flex-col items-center gap-3 text-center">
      <div className="display text-[clamp(48px,6vw,72px)] text-gradient-gold">
        {rendered}
      </div>
      <p className="text-sm uppercase tracking-widest text-cream-dim">
        {label}
      </p>
    </div>
  );
}

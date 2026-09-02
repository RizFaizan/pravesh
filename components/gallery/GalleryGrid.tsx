"use client";

import { useMemo, useState, useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X, ZoomIn } from "lucide-react";

import { GALLERY_FILTERS, GALLERY_ITEMS } from "@/lib/constants";

export default function GalleryGrid() {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const items = useMemo(
    () =>
      filter === "All"
        ? GALLERY_ITEMS
        : GALLERY_ITEMS.filter((i) => i.category === filter),
    [filter]
  );

  const closeLightbox = useCallback(() => setLightbox(null), []);

  return (
    <section className="pb-20 md:pb-28">
      <div className="mx-auto w-[min(1200px,calc(100%-48px))]">
        {/* Filter bar */}
        <div className="flex flex-wrap justify-center gap-3">
          {GALLERY_FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
                filter === f
                  ? "bg-gradient-to-br from-gold-light to-gold text-deep"
                  : "border border-white/10 bg-white/[0.03] text-cream-dim hover:text-cream"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="mt-12 grid auto-rows-[280px] gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {items.map((item) => (
              <motion.button
                layout
                key={item.title}
                type="button"
                onClick={() => setLightbox(GALLERY_ITEMS.indexOf(item))}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative overflow-hidden rounded-2xl border border-white/[0.06] text-left ${
                  item.wide ? "sm:row-span-2" : ""
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute bottom-4 left-4 right-4 translate-y-3 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <div className="text-base font-semibold text-cream">
                        {item.title}
                      </div>
                      <div className="text-xs text-cream-dim">{item.tag}</div>
                    </div>
                    <ZoomIn className="h-5 w-5 shrink-0 text-gold-light" />
                  </div>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-deep/95 p-6 backdrop-blur-md"
            onClick={closeLightbox}
          >
            <button
              type="button"
              aria-label="Close"
              className="absolute right-6 top-6 grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/5 text-cream transition-colors hover:text-gold-light"
            >
              <X className="h-5 w-5" />
            </button>
            <motion.figure
              key={lightbox}
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="max-h-[85vh] overflow-hidden rounded-2xl border border-white/10 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={GALLERY_ITEMS[lightbox].image}
                alt={GALLERY_ITEMS[lightbox].title}
                className="max-h-[75vh] w-auto object-contain"
              />
              <figcaption className="flex items-center justify-between border-t border-white/10 bg-surface p-5">
                <div>
                  <div className="text-lg font-semibold text-cream">
                    {GALLERY_ITEMS[lightbox].title}
                  </div>
                  <div className="text-sm text-cream-dim">
                    {GALLERY_ITEMS[lightbox].category} · {GALLERY_ITEMS[lightbox].tag}
                  </div>
                </div>
                <a
                  href="/contact"
                  className="rounded-full border border-gold/40 px-4 py-2 text-sm font-semibold text-gold-light transition-colors hover:bg-gold/10"
                >
                  Get a quote
                </a>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

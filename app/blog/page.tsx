import type { Metadata } from "next";

import PageHero from "@/components/ui/PageHero";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import CTASection from "@/components/home/CTASection";
import { BLOG_POSTS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "From the Workshop Bench",
  description:
    "Upholstery care tips, industry insights and workshop updates from Parvesh Upholstery, Hayes, West London.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="The journal"
        title={
          <>
            From the
            <br />
            <span className="text-gradient-gold">workshop bench</span>.
          </>
        }
        lede="Fabric care, craft notes and honest advice from behind the workbench."
      />

      <section className="pb-20 md:pb-28">
        <div className="mx-auto w-[min(1200px,calc(100%-48px))]">
          <div className="grid gap-6 md:grid-cols-2">
            {BLOG_POSTS.map((post, i) => (
              <ScrollReveal key={post.title} delay={(i % 2) * 0.08}>
                <article className="group flex h-full flex-col rounded-2xl border border-white/[0.06] bg-surface/40 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/30">
                  <div className="flex items-center gap-3 p-7 pb-0">
                    <Badge>{post.category}</Badge>
                    <span className="text-xs text-muted">
                      {post.date} · {post.readTime} read
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-7 pt-5">
                    <h3 className="display text-2xl font-semibold leading-tight text-cream transition-colors group-hover:text-gold-light">
                      {post.title}
                    </h3>
                    <p className="mt-3 flex-1 text-[15px] leading-relaxed text-cream-dim">
                      {post.excerpt}
                    </p>
                    <span className="mt-5 inline-flex items-center text-sm font-semibold text-gold-light">
                      Read the post →
                    </span>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Button href="#" variant="ghost">
              Load more posts
            </Button>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

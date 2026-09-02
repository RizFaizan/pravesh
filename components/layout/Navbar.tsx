"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Armchair } from "lucide-react";

import { BUSINESS, NAV_LINKS } from "@/lib/constants";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string, exact: boolean) =>
    exact ? pathname === href : pathname.startsWith(href);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav
        className={`mx-auto mt-4 flex w-[min(1180px,calc(100%-28px))] items-center justify-between rounded-full px-5 py-3 transition-all duration-500 ${
          scrolled || open
            ? "glass shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]"
            : "border border-transparent"
        }`}
      >
        <Link
          href="/"
          className="flex items-center gap-3 text-left"
          aria-label="Parvesh Upholstery home"
        >
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-gold-light to-gold text-deep">
            <Armchair className="h-5 w-5" />
          </span>
          <span className="leading-tight">
            <span className="display block text-lg leading-none font-semibold text-cream">
              {BUSINESS.shortName}
            </span>
            <span className="block text-[10px] uppercase tracking-[0.2em] text-cream-dim">
              Upholstery
            </span>
          </span>
        </Link>

        <div
          className={`${
            open
              ? "flex flex-col gap-1"
              : "hidden lg:flex lg:items-center lg:gap-1"
          }`}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-full px-4 py-2 text-[13px] font-medium transition-colors ${
                isActive(link.href, link.exact)
                  ? "bg-white/[0.08] text-cream"
                  : "text-cream-dim hover:bg-white/[0.05] hover:text-cream"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button href="/contact" className="hidden lg:inline-flex px-5 py-2.5">
            Request a quote
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-cream lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="mx-auto mt-2 w-[min(1180px,calc(100%-28px))] rounded-3xl border border-white/10 bg-deep/95 p-4 backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-2xl px-4 py-3 text-sm font-medium transition-colors ${
                  isActive(link.href, link.exact)
                    ? "bg-white/[0.08] text-cream"
                    : "text-cream-dim hover:bg-white/[0.05] hover:text-cream"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button href="/contact" className="mt-3 w-full">
              Request a quote
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

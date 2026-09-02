import Link from "next/link";
import {
  Armchair,
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";

import { BUSINESS } from "@/lib/constants";

const SERVICE_LINKS = [
  { label: "Domestic upholstery", href: "/services#domestic" },
  { label: "Commercial seating", href: "/services#commercial" },
  { label: "Vehicle interiors", href: "/services#vehicle" },
  { label: "Workshop services", href: "/services#workshop" },
  { label: "On-site fitting", href: "/services#onsite" },
];

const COMPANY_LINKS = [
  { label: "About the atelier", href: "/about" },
  { label: "Our gallery", href: "/gallery" },
  { label: "Client reviews", href: "/reviews" },
  { label: "From the blog", href: "/blog" },
  { label: "Contact us", href: "/contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] bg-surface/40">
      <div className="mx-auto w-[min(1200px,calc(100%-48px))] py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-gold-light to-gold text-deep">
                <Armchair className="h-5 w-5" />
              </span>
              <span className="leading-tight">
                <span className="display block text-xl font-semibold text-cream">
                  {BUSINESS.shortName}
                </span>
                <span className="block text-[10px] uppercase tracking-[0.2em] text-cream-dim">
                  Upholstery Ltd
                </span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-[15px] leading-relaxed text-cream-dim">
              {BUSINESS.tagline} Expert upholstery, restoration and re-trimming
              from our Hayes workshop since {BUSINESS.established}.
            </p>
            <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-[13px] font-medium text-gold-light">
              <span className="inline-block h-2 w-2 rounded-full bg-gold" />
              Accepting new projects
            </p>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
              Services
            </h3>
            <ul className="mt-5 space-y-3">
              {SERVICE_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[15px] text-cream-dim transition-colors hover:text-gold-light"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
              Company
            </h3>
            <ul className="mt-5 space-y-3">
              {COMPANY_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[15px] text-cream-dim transition-colors hover:text-gold-light"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + CTA */}
          <div className="lg:col-span-4">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
              Get in touch
            </h3>
            <ul className="mt-5 space-y-3 text-[15px] text-cream-dim">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>{BUSINESS.address}, {BUSINESS.city}</span>
              </li>
              <li>
                <a
                  href={BUSINESS.phoneHref}
                  className="flex items-start gap-3 transition-colors hover:text-gold-light"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  {BUSINESS.phone}
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS.emailHref}
                  className="flex items-start gap-3 transition-colors hover:text-gold-light"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  {BUSINESS.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                {BUSINESS.hours}
              </li>
            </ul>

            <a
              href={BUSINESS.phoneHref}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-gold-light to-gold px-6 py-3 text-sm font-semibold uppercase tracking-wider text-deep shadow-[0_12px_40px_-12px_rgba(212,168,83,0.5)] transition-all hover:-translate-y-0.5 hover:shadow-[0_20px_50px_-12px_rgba(212,168,83,0.7)]"
            >
              Request a quote
              <ArrowUpRight className="h-4 w-4" />
            </a>

            <div className="mt-6 flex items-center gap-3">
              {[
                { icon: Facebook, label: "Facebook", href: "#" },
                { icon: Instagram, label: "Instagram", href: "#" },
                { icon: MessageCircle, label: "WhatsApp", href: BUSINESS.whatsapp },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-cream-dim transition-colors hover:border-gold/40 hover:text-gold-light"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/[0.06] pt-6 text-sm text-muted md:flex-row md:items-center">
          <p>
            © {year} {BUSINESS.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span className="text-cream-dim">
              Serving{" "}
              <span className="text-gold-light">
                Hayes, Hounslow, Southall, Uxbridge, Ealing, Wembley
              </span>{" "}
              &amp; wider West London
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

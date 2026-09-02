import { MapPin, Phone, Mail, MessageCircle, Clock } from "lucide-react";

import { BUSINESS } from "@/lib/constants";

const items = [
  {
    icon: MapPin,
    label: "Workshop",
    value: BUSINESS.address,
    hint: "Hayes · West London",
  },
  {
    icon: Phone,
    label: "Phone",
    value: BUSINESS.phone,
    href: BUSINESS.phoneHref,
    hint: "Call the atelier desk",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Photo quotes welcome",
    href: BUSINESS.whatsapp,
    hint: "Send photos for a fast quote",
  },
  {
    icon: Mail,
    label: "Email",
    value: BUSINESS.email,
    href: BUSINESS.emailHref,
    hint: "For detailed enquiries",
  },
  {
    icon: Clock,
    label: "Hours",
    value: BUSINESS.hours,
    hint: "Workshop visit by appointment",
  },
];

export default function ContactInfo() {
  return (
    <div className="flex h-full flex-col gap-4">
      <div className="overflow-hidden rounded-2xl border border-white/[0.06]">
        {/* Map placeholder */}
        <div className="relative aspect-[4/3] bg-surface/40">
          <div className="absolute inset-0 grid place-items-center">
            <div className="text-center">
              <MapPin className="mx-auto h-10 w-10 text-gold" />
              <p className="mt-3 text-sm text-cream-dim">
                Map placeholder — embed Google Maps here
              </p>
            </div>
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,168,83,0.12),transparent_70%)]" />
        </div>
      </div>

      {items.map((item) => {
        const Tag = item.href ? "a" : "div";
        return (
          <div
            key={item.label}
            className="flex items-start gap-4 rounded-2xl border border-white/[0.06] bg-surface/30 p-5 transition-colors hover:border-gold/30"
          >
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-gold-light to-gold text-deep">
              <item.icon className="h-5 w-5" />
            </span>
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-widest text-muted">
                {item.label}
              </div>
              <Tag
                {...(item.href
                  ? { href: item.href, target: item.href.startsWith("http") ? "_blank" : undefined, rel: "noopener noreferrer" }
                  : {})}
                className="mt-0.5 block font-semibold text-cream hover:text-gold-light"
              >
                {item.value}
              </Tag>
              <div className="text-sm text-cream-dim">{item.hint}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

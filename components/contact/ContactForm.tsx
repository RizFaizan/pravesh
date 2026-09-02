"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email").optional().or(z.literal("")),
  area: z.string().min(1, "Please select your area"),
  workType: z.string().min(1, "Please select a work type"),
  message: z.string().min(10, "Tell us a little more (at least 10 characters)"),
});

type FormValues = z.infer<typeof schema>;

const AREAS = [
  "Hayes",
  "Southall",
  "Hounslow",
  "Uxbridge",
  "Wembley",
  "Ealing",
  "Slough",
  "Other West London",
];

const WORK_TYPES = [
  "Domestic reupholstery",
  "Commercial seating",
  "Vehicle interior",
  "On-site visit",
  "Antique restoration",
  "Something else",
];

const inputClass =
  "w-full rounded-xl border border-white/10 bg-deep/60 px-4 py-3 text-[15px] text-cream placeholder:text-muted transition-colors focus:border-gold/50 focus:outline-none focus:ring-2 focus:ring-gold/20";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (values: FormValues) => {
    console.log("Form submitted (demo):", values);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-5 rounded-2xl border border-gold/20 bg-surface/40 p-12 text-center md:p-16">
        <div className="grid h-16 w-16 place-items-center rounded-full bg-gold/15">
          <CheckCircle2 className="h-8 w-8 text-gold-light" />
        </div>
        <h3 className="display text-3xl font-semibold text-cream">
          Message received.
        </h3>
        <p className="max-w-sm text-cream-dim">
          Thanks — this is a demo prototype. On the live build this form wires
          to email &amp; WhatsApp so we can reply within a few hours.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid gap-5 rounded-2xl border border-white/[0.06] bg-surface/40 p-6 md:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid gap-2">
          <label className="text-xs uppercase tracking-widest text-muted" htmlFor="name">
            Name *
          </label>
          <input id="name" type="text" placeholder="Your full name" className={inputClass} {...register("name")} />
          {errors.name && (
            <p className="text-sm text-red-400">{errors.name.message}</p>
          )}
        </div>

        <div className="grid gap-2">
          <label className="text-xs uppercase tracking-widest text-muted" htmlFor="phone">
            Phone *
          </label>
          <input id="phone" type="tel" placeholder="07xxx xxx xxx" className={inputClass} {...register("phone")} />
          {errors.phone && (
            <p className="text-sm text-red-400">{errors.phone.message}</p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid gap-2">
          <label className="text-xs uppercase tracking-widest text-muted" htmlFor="area">
            Your area *
          </label>
          <select id="area" className={inputClass} {...register("area")}>
            <option value="">Select your area</option>
            {AREAS.map((a) => (
              <option key={a} value={a}>
                {a}
              </option>
            ))}
          </select>
          {errors.area && (
            <p className="text-sm text-red-400">{errors.area.message}</p>
          )}
        </div>

        <div className="grid gap-2">
          <label className="text-xs uppercase tracking-widest text-muted" htmlFor="workType">
            Work type *
          </label>
          <select id="workType" className={inputClass} {...register("workType")}>
            <option value="">Select the type of work</option>
            {WORK_TYPES.map((w) => (
              <option key={w} value={w}>
                {w}
              </option>
            ))}
          </select>
          {errors.workType && (
            <p className="text-sm text-red-400">{errors.workType.message}</p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid gap-2 sm:col-span-2">
          <label className="text-xs uppercase tracking-widest text-muted" htmlFor="email">
            Email (optional)
          </label>
          <input id="email" type="email" placeholder="you@email.com" className={inputClass} {...register("email")} />
          {errors.email && (
            <p className="text-sm text-red-400">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid gap-2">
        <label className="text-xs uppercase tracking-widest text-muted" htmlFor="message">
          About your piece *
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="Tell us what you'd like reupholstered, the fabric type, and whether you can visit the workshop or need a collection…"
          className={`${inputClass} resize-none`}
          {...register("message")}
        />
        {errors.message && (
          <p className="text-sm text-red-400">{errors.message.message}</p>
        )}
      </div>

      <div className="flex items-center justify-between gap-4 pt-2">
        <p className="text-xs text-muted">
          Demo prototype — form isn&apos;t wired to email yet.
        </p>
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-gold-light to-gold px-7 py-3 text-sm font-semibold uppercase tracking-wider text-deep shadow-[0_12px_40px_-12px_rgba(212,168,83,0.5)] transition-all hover:-translate-y-0.5 hover:shadow-[0_20px_50px_-12px_rgba(212,168,83,0.7)]"
        >
          Send enquiry
          <Send className="h-4 w-4" />
        </button>
      </div>
    </form>
  );
}

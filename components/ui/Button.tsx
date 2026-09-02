import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "gold" | "ghost" | "outline";

interface ButtonProps {
  href?: string;
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-semibold uppercase tracking-wider transition-all duration-300";

const variants: Record<ButtonVariant, string> = {
  gold: "btn-gold-grad",
  ghost:
    "border border-white/10 bg-white/5 text-cream backdrop-blur-md hover:border-white/25 hover:bg-white/10 hover:-translate-y-0.5",
  outline:
    "border border-gold/50 text-gold-light hover:bg-gold/10 hover:border-gold transition-colors",
};

export default function Button({
  href,
  variant = "gold",
  children,
  className = "",
  onClick,
  type = "button",
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    const external = href.startsWith("http");
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

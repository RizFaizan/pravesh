import type { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export default function GlassCard({ children, className = "" }: GlassCardProps) {
  return (
    <div
      className={`glass rounded-2xl transition-all duration-500 hover:-translate-y-1.5 hover:bg-white/[0.06] ${className}`}
    >
      {children}
    </div>
  );
}

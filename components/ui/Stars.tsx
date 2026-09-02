import { Star, StarHalf } from "lucide-react";

interface StarsProps {
  rating: number;
  className?: string;
}

export default function Stars({ rating, className = "" }: StarsProps) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;

  return (
    <div className={`flex items-center gap-0.5 ${className}`}>
      {Array.from({ length: full }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-gold text-gold" />
      ))}
      {half && <StarHalf className="h-4 w-4 fill-gold text-gold" />}
    </div>
  );
}

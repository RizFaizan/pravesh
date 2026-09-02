import StatCounter from "@/components/ui/StatCounter";
import { STATS } from "@/lib/constants";

export default function StatsBar() {
  return (
    <section className="border-y border-white/[0.06] bg-surface/30">
      <div className="mx-auto grid w-[min(1200px,calc(100%-48px))] grid-cols-2 gap-10 py-16 md:grid-cols-4">
        {STATS.map((s) => (
          <StatCounter
            key={s.label}
            value={s.value}
            suffix={s.suffix}
            label={s.label}
          />
        ))}
      </div>
    </section>
  );
}

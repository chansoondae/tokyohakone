import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface Props {
  day: number;
  weekday: string;
  region: string;
  spots: string[];
}

export function DayHighlightCard({ day, weekday, region, spots }: Props) {
  return (
    <Link
      href={`/day/${day}`}
      className="group flex items-stretch bg-card rounded-2xl border border-line overflow-hidden active:scale-[0.98] transition-transform"
    >
      <div className="w-16 shrink-0 flex flex-col items-center justify-center bg-accent-soft text-accent py-4">
        <p className="text-[0.65rem] font-bold tracking-[0.18em]">DAY</p>
        <p className="font-serif font-bold text-3xl leading-none mt-1">{day}</p>
      </div>
      <div className="flex-1 min-w-0 px-4 py-3.5">
        <p className="text-xs text-ink-faint">
          <span className="font-bold text-ink-sub">{weekday}요일</span> · {region}
        </p>
        <p className="flex flex-wrap gap-x-1 text-sm font-bold mt-1.5 leading-snug">
          {spots.map((s, i) => (
            <span key={s} className="whitespace-nowrap">{s}{i < spots.length - 1 && <span className="text-ink-faint font-normal"> ·</span>}</span>
          ))}
        </p>
      </div>
      <span className="flex items-center pr-3">
        <ChevronRight className="h-4 w-4 text-ink-faint" />
      </span>
    </Link>
  );
}

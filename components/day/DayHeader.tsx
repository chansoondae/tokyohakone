import { ArrowRight } from "lucide-react";

interface Props {
  dayNumber: number;
  weekday: string;
  region: string;
  transport: string;
  summary: string[];
}

export function DayHeader({ dayNumber, weekday, region, transport, summary }: Props) {
  return (
    <header className="space-y-4">
      <div className="relative overflow-hidden rounded-3xl bg-night text-white px-5 pt-6 pb-5">
        <span className="absolute right-5 top-5 w-9 h-9 rounded-full bg-sun" aria-hidden />
        <span
          className="absolute -right-2 -bottom-6 font-serif font-bold text-[7rem] leading-none text-white/[0.07] select-none"
          aria-hidden
        >
          {String(dayNumber).padStart(2, "0")}
        </span>
        <p className="relative text-xs font-bold tracking-[0.2em] text-white/70">DAY {dayNumber}</p>
        <h1 className="relative font-serif font-bold text-3xl mt-2">{weekday}요일</h1>
        <p className="relative text-sm text-white/80 mt-1.5">{region}</p>
        <div className="relative mt-5 h-px bg-white/30" aria-hidden />
        <p className="relative mt-3 text-sm font-semibold text-white/90">{transport}</p>
      </div>

      <div className="flex flex-wrap items-center gap-x-1.5 gap-y-1.5 text-sm text-ink px-1">
        {summary.map((s, i) => (
          <span key={s} className="flex items-center gap-1.5">
            {i > 0 && <ArrowRight className="h-3.5 w-3.5 text-ink-faint" />}
            <span className="font-medium">{s}</span>
          </span>
        ))}
      </div>
    </header>
  );
}

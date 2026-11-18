import { Mic } from "lucide-react";

const exhibitions = ["오르세", "루브르", "터너", "신시내티", "알베르 마르케", "고흐 〈해바라기〉", "에노우라 측후소", "쿠사마 야요이 뮤지엄", "폴라 미술관"];

// 에노우라 측후소(스기모토 히로시의 수평선)와 하코네 너머 후지산을 모티프로 한 풍경
function Horizon() {
  return (
    <svg viewBox="0 0 400 130" className="block w-full h-auto" aria-hidden>
      <circle cx="318" cy="34" r="13" fill="var(--color-sun)" />
      {/* 후지산 */}
      <path d="M170 92 L246 38 Q256 31 266 38 L344 92 Z" fill="#34496e" />
      <path d="M232 48 L246 38 Q256 31 266 38 L280 48 L271 45 L263 51 L256 45 L248 51 Z" fill="#e8ecf2" />
      {/* 하코네 능선 */}
      <path d="M0 92 C36 72 78 66 118 78 C146 86 168 72 200 79 C238 88 272 82 304 86 C340 90 370 77 400 81 L400 93 L0 93 Z" fill="#283b5e" />
      {/* 수평선과 바다 */}
      <rect x="0" y="93" width="400" height="37" fill="#16213a" />
      <line x1="0" y1="93" x2="400" y2="93" stroke="#ffffff" strokeOpacity="0.45" strokeWidth="1" />
      <line x1="40" y1="104" x2="150" y2="104" stroke="#ffffff" strokeOpacity="0.12" />
      <line x1="230" y1="112" x2="370" y2="112" stroke="#ffffff" strokeOpacity="0.1" />
      <line x1="296" y1="100" x2="340" y2="100" stroke="var(--color-sun)" strokeOpacity="0.5" />
    </svg>
  );
}

export function HeroBanner() {
  return (
    <section className="overflow-hidden rounded-3xl bg-night text-white">
      <div className="px-6 pt-8 bg-gradient-to-b from-[#2a3d63] to-night">
        <p className="text-xs font-bold tracking-[0.2em] text-white/70">ART FRIENDS · DOCENT ART TOUR 2026</p>
        <h1 className="font-serif font-bold text-[2rem] leading-tight mt-4">
          도슨트와 함께하는<br />도쿄 · 하코네<br />미술관 여행
        </h1>
        <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-3 py-1.5 text-sm">
          <Mic className="h-4 w-4 text-sun-soft" aria-hidden />
          <span><strong className="font-bold">이용규 · 채수한 도슨트</strong> 동행 해설</span>
        </p>
        <p className="tabular mt-4 text-sm text-white/85">
          목 — 일 · 3박 4일
        </p>
      </div>

      <Horizon />

      <div className="bg-[#16213a] px-6 pb-7 pt-1">
        <p className="text-xs text-white/65 mb-2">이번 여행의 미술관 · 특별전</p>
        <ul className="flex flex-wrap gap-1.5">
          {exhibitions.map((e) => (
            <li key={e} className="text-xs font-medium px-2.5 py-1 rounded-full border border-white/15 bg-white/[0.06] text-white/90">
              {e}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

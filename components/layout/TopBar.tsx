"use client";
import Link from "next/link";
import { useFontSize } from "@/components/FontSizeProvider";
import { Minus, Plus, Printer } from "lucide-react";

const iconButton =
  "w-11 h-11 rounded-full flex items-center justify-center transition text-ink-sub active:bg-line disabled:text-line";

export function TopBar() {
  const { step, increase, decrease } = useFontSize();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-paper/90 backdrop-blur-md border-b border-line h-14">
      <div className="max-w-lg mx-auto h-full flex items-center justify-between pl-4 pr-2">
        <Link href="/" className="flex items-center gap-2.5 min-h-11 min-w-0">
          {/* 해 · 후지산 · 수평선 — 히어로 풍경을 줄인 인장 */}
          <svg viewBox="0 0 32 32" className="w-8 h-8 shrink-0 rounded-lg" aria-hidden>
            <rect width="32" height="32" fill="var(--color-night)" />
            <circle cx="23" cy="9.5" r="3" fill="var(--color-sun)" />
            <path d="M5 22 L14 13.5 Q16 11.8 18 13.5 L27 22 Z" fill="#4a6191" />
            <path d="M12.2 15.2 L14 13.5 Q16 11.8 18 13.5 L19.8 15.2 L18.2 14.6 L16.9 15.8 L16 14.8 L15.1 15.8 L13.8 14.6 Z" fill="#e8ecf2" />
            <rect x="0" y="22" width="32" height="10" fill="#16213a" />
            <line x1="0" y1="22" x2="32" y2="22" stroke="#ffffff" strokeOpacity="0.6" strokeWidth="0.8" />
          </svg>
          <span className="flex flex-col leading-tight min-w-0">
            <span className="font-serif font-bold text-[15px] tracking-tight truncate">도쿄 하코네 아트 투어</span>
            <span className="text-[11px] font-medium text-accent truncate">도슨트와 함께하는 미술관 여행</span>
          </span>
        </Link>
        <div className="flex items-center shrink-0">
          <span className="hidden min-[400px]:inline text-xs text-ink-faint mr-1">글자</span>
          <button onClick={decrease} disabled={step === 0} className={iconButton} aria-label="글자 작게">
            <Minus className="h-4 w-4" />
          </button>
          <button onClick={increase} disabled={step === 4} className={iconButton} aria-label="글자 크게">
            <Plus className="h-4 w-4" />
          </button>
          <span className="w-px h-5 bg-line mx-1" />
          <button onClick={() => window.print()} className={iconButton} aria-label="인쇄 / PDF 저장">
            <Printer className="h-4 w-4" />
          </button>
        </div>
      </div>
    </header>
  );
}

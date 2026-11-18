import Image from "next/image";
import { docents, flights } from "@/lib/itinerary";
import { Calendar, User, Bus, Hotel, PlaneTakeoff } from "lucide-react";

const items = [
  { icon: Calendar, label: "기간", value: "목 ~ 일 · 3박 4일" },
  { icon: User, label: "인솔자", value: "이용규 도슨트 · 채수한 도슨트" },
  { icon: Bus, label: "교통편", value: "전용차량" },
  { icon: Hotel, label: "숙소", value: "호텔 메트로폴리탄 이케부쿠로 2박 · 스스키노하라 이치노유(하코네) 1박" },
];

// "인천 → 나리타" + "08:25 → 10:50"  →  "인천 08:25 → 나리타 10:50"
function legText({ route, time }: { route: string; time: string }) {
  const [from, to] = route.split(" → ");
  const [dep, arr] = time.split(" → ");
  return `${from} ${dep} → ${to} ${arr}`;
}

export function TourSummaryCard() {
  return (
    <section className="bg-card rounded-2xl border border-line p-4">
      <h2 className="font-serif font-bold text-lg mb-3">투어 요약</h2>
      <dl className="divide-y divide-line">
        {items.map(({ icon: Icon, label, value }) => (
          <div key={label} className="flex items-start gap-3 py-2.5">
            <Icon className="h-4 w-4 text-accent shrink-0 mt-0.5" />
            <dt className="text-sm text-ink-faint w-14 shrink-0">{label}</dt>
            <dd className="text-sm font-medium">{value}</dd>
          </div>
        ))}
      </dl>

      <h3 className="font-bold text-sm mt-4 mb-1">항공편</h3>
      <p className="text-xs text-ink-faint mb-2.5">도슨트팀별로 항공편과 3일차 오후 일정이 다르고, 나머지 일정은 같습니다.</p>
      <div className="space-y-2.5">
        {flights.map((f) => (
          <div key={f.team} className="rounded-xl bg-paper px-3.5 py-3">
            <Image
              src={docents[f.docent].profileImage}
              alt={docents[f.docent].profileAlt}
              width={1169}
              height={364}
              sizes="(max-width: 512px) 100vw, 512px"
              className="mb-3 block w-full h-auto rounded-lg"
            />
            <p className="flex items-baseline justify-between gap-2">
              <span className="font-bold text-sm">{f.team}</span>
              <span className="text-xs text-ink-sub">{f.airline}</span>
            </p>
            <ul className="mt-2 space-y-1.5">
              {[
                { Icon: PlaneTakeoff, leg: f.outbound },
                { Icon: PlaneTakeoff, leg: f.inbound },
              ].map(({ Icon, leg }) => (
                <li key={leg.flight} className="flex items-start gap-2 text-sm">
                  <Icon className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span className="tabular font-bold w-14 shrink-0">{leg.flight}</span>
                  <span className="tabular text-ink-sub">
                    <span className="text-ink-faint">{leg.date}</span> {legText(leg)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

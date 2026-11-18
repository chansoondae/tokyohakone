export type SpotKind = "airport" | "museum" | "free" | "meal" | "move";

export interface Spot {
  kind: SpotKind;
  time: string;
  name: string;
  exhibition?: string;
  description?: string;
  options?: string[];
  address?: string;
  imagePath?: string;
  mapsUrl?: string;
  docent?: DocentId; // 특정 도슨트팀만 가는 일정
}

export interface Day {
  dayNumber: number;
  weekday: string; // "목"
  date: string; // "12월 3일"
  dow: string; // "THU"
  region: string;
  transport: string;
  summary: string[];
  breakfast: string;
  lunch: string;
  dinner: string;
  accommodation: string;
  hotelMapsUrl: string;
  hotelImagePath?: string;
  spots: Spot[];
}

const NARITA_MAPS = "https://www.google.com/maps/search/?api=1&query=成田国際空港";

export type DocentId = "lee" | "chae";

export const docents: Record<DocentId, { team: string; profileImage: string; profileAlt: string }> = {
  lee: {
    team: "이용규 도슨트팀",
    profileImage: "/images/docent-lee-yonggyu.jpg",
    profileAlt:
      "이용규 도슨트 — (현) 트래블레이블 대표, (현) 예술의전당 한가람미술관 등 전시 해설 도슨트, 2005~2016 루브르 박물관·오르세미술관 도슨트, 〈90일밤의 미술관〉 대표 저자",
  },
  chae: {
    team: "채수한 도슨트팀",
    profileImage: "/images/docent-chae-suhan.jpg",
    profileAlt:
      "채수한 도슨트 — 홍익대학교 예술 경영 석사, (현) 예술의전당 한가람미술관 등 전시 해설 도슨트, (현) 상하이·나오시마·아부다비 루브르 전시 해설, (전) 2016~2020 이탈리아 가이드 및 관광청 홍보대사",
  },
};

// 두 도슨트팀은 항공편과 3일차 오후 일정(에노우라 측후소 / 쿠사마 야요이 뮤지엄)만 다르고 나머지 일정은 동일합니다.
export const flights = [
  {
    team: "이용규 도슨트팀",
    airline: "제주항공",
    docent: "lee" as DocentId,
    outbound: { flight: "7C1125", date: "목", time: "08:25 → 10:50", route: "인천 → 나리타" },
    inbound: { flight: "7C1110", date: "일", time: "19:50 → 22:50", route: "나리타 → 인천" },
  },
  {
    team: "채수한 도슨트팀",
    airline: "이스타항공",
    docent: "chae" as DocentId,
    outbound: { flight: "ZE601", date: "목", time: "08:40 → 10:55", route: "인천 → 나리타" },
    inbound: { flight: "ZE608", date: "일", time: "20:00 → 22:40", route: "나리타 → 인천" },
  },
];

export const days: Day[] = [
  {
    dayNumber: 1,
    weekday: "목",
    date: "12월 3일",
    dow: "THU",
    region: "나리타 · 우에노",
    transport: "✈️ 나리타 도착 · 12:00 공항 미팅",
    summary: ["나리타 공항", "국립서양미술관", "우에노모리 미술관"],
    breakfast: "불포함",
    lunch: "점심식사",
    dinner: "저녁식사",
    accommodation: "호텔 메트로폴리탄 이케부쿠로",
    hotelMapsUrl: "https://www.google.com/maps/search/?api=1&query=Hotel+Metropolitan+Tokyo+Ikebukuro",
    hotelImagePath: "/images/metropolitanikebukuro.jpg",
    spots: [
      {
        kind: "airport",
        time: "10:55",
        name: "나리타 공항 도착",
        description: "도슨트팀별로 항공편이 다릅니다.\n· 이용규 도슨트팀: 제주항공 7C1125 (인천 08:25 → 나리타 10:50)\n· 채수한 도슨트팀: 이스타항공 ZE601 (인천 08:40 → 나리타 10:55)\n\n입국 수속 후 12:00에 공항에서 모여 함께 출발합니다.",
        address: "成田国際空港, Chiba",
        mapsUrl: NARITA_MAPS,
      },
      {
        kind: "move",
        time: "12:00",
        name: "공항 미팅 · 도쿄로 이동",
      },
      { kind: "meal", time: "13:00", name: "점심식사" },
      {
        kind: "museum",
        time: "14:30",
        name: "국립서양미술관",
        exhibition: "테이트 미술관 터너전 ― 숭고의 회화, 현대미술과의 대화 + 상설전",
        description: "영국 풍경화의 거장 J.M.W. 터너의 작품을 런던 테이트 미술관 소장품으로 소개합니다. 유화와 수채화 등 80점 이상이 출품됩니다.\n\n자연의 압도적인 힘을 그린 '숭고'의 풍경화(대표작 〈그리종 주의 눈사태〉 등)와 함께, 터너에게서 영향을 받은 현대미술 작품을 나란히 놓아 대화하듯 보여줍니다.\n\n👀 꼭 봐야 할 작품\n· 〈그리종 주의 눈사태〉(1810) ― 2장. 알프스 눈사태의 공포를 그린 '숭고'의 대표작. 옆의 엘리아슨 〈녹는 빙하 시리즈 1999/2019〉와 비교해 보세요.\n· 〈바쿠스와 아리아드네〉(1840) ― 3장. 신화를 그린 역사화\n· 〈베네치아 ― 산타 마리아 델라 살루테 성당〉(1844) ― 4장. 빛에 녹아드는 물의 도시\n· 〈포경선 에레버스호 만세! 또 한 마리 잡았다!〉(1846) ― 5장. 말년의 거친 바다\n· 〈부표가 있는 바다 풍경〉(1840년경) ― 6장. 바다와 하늘의 경계가 사라지는 말년의 터너\n· 〈월광, 밀뱅크에서의 습작〉(1797) ― 서장. 20대 초반 터너의 템스강 밤 풍경\n\n🟥 마크 로스코도 있어요\n마지막 7장 '근원적 숭고'에서 말년의 터너 바다 그림(〈거친 바다와 돌고래〉 등) 곁에 로스코 〈무제〉(1969, 종이에 아크릴)와 바넷 뉴먼의 작품이 함께 걸립니다. 형태가 사라지고 색과 빛만 남은 말년의 터너가 왜 추상표현주의의 선구자로 불리는지 직접 비교해 볼 수 있어요.\n\n🖼 터너전 관람 후 모네 〈수련〉 등 마쓰카타 컬렉션으로 유명한 상설전도 함께 둘러봅니다.\n\n전시 기간 2026.10.24 ~ 2027.2.21",
        address: "7-7 Uenokoen, Taito City, Tokyo 110-0007",
        imagePath: "/images/nmwa-turner.png",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=7-7+Uenokoen,+Taito+City,+Tokyo+110-0007",
      },
      {
        kind: "museum",
        time: "16:30",
        name: "우에노모리 미술관",
        exhibition: "신시내티 미술관전 ― 미국으로 건너간 유럽의 보물",
        description: "미국 신시내티 미술관의 서양 근대미술 84점이 일본에 왔으며, 그중 81점이 일본 첫 공개입니다. 신고전주의부터 입체주의까지 4개 장으로 구성됩니다.\n\n코로, 쿠르베, 마네, 세잔, 모네, 르누아르, 고흐, 고갱, 피카소, 모딜리아니, 샤갈 등의 작품이 나오며, 고흐 최만년의 〈포플러 숲 속의 두 사람〉(1890), 마네 〈경마장의 여인들〉, 르누아르 〈건지섬의 안개〉가 대표작입니다.\n\n전시 기간 2026.10.10 ~ 2027.1.10",
        imagePath: "/images/uenomori-cincinnati.png",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=上野の森美術館",
      },
      { kind: "meal", time: "18:30", name: "저녁식사" },
    ],
  },
  {
    dayNumber: 2,
    weekday: "금",
    date: "12월 4일",
    dow: "FRI",
    region: "우에노 · 아자부다이 · 롯폰기",
    transport: "🚌 전용차량 이동",
    summary: ["도쿄도 미술관", "아자부다이힐스", "국립신미술관"],
    breakfast: "호텔식",
    lunch: "점심식사",
    dinner: "저녁식사",
    accommodation: "호텔 메트로폴리탄 이케부쿠로",
    hotelMapsUrl: "https://www.google.com/maps/search/?api=1&query=Hotel+Metropolitan+Tokyo+Ikebukuro",
    hotelImagePath: "/images/metropolitanikebukuro.jpg",
    spots: [
      {
        kind: "move",
        time: "08:00",
        name: "호텔 출발",
      },
      {
        kind: "move",
        time: "08:30",
        name: "도쿄도 미술관 도착 · 줄서기",
      },
      {
        kind: "museum",
        time: "09:30",
        name: "도쿄도 미술관",
        exhibition: "오르세 미술관 소장 ― 지금을 사는 기쁨",
        description: "도쿄도 미술관 개관 100주년 기념전으로, '인상파의 전당' 오르세 미술관 소장품 약 110점(회화·조각·공예·사진)이 '지금을 사는 기쁨'을 주제로 모였습니다.\n\n밀레 〈이삭 줍는 사람들〉, 고흐 〈론강의 별이 빛나는 밤〉, 르누아르 〈목욕하는 여인들〉, 고갱 〈아레아레아〉 등 미술사의 명작을 만날 수 있습니다.\n\n🕗 08:30부터 줄을 서서 09:30에 입장합니다. 개막 직후라 붐빌 수 있으니 대표작부터 먼저 보시길 추천해요.\n\n전시 기간 2026.11.14 ~ 2027.3.28",
        address: "8-36 Uenokoen, Taito City, Tokyo 110-0007",
        imagePath: "/images/tobikan-orsay.png",
        mapsUrl: "https://maps.app.goo.gl/eGVQ4mZYER1mi7E6A",
      },
      { kind: "meal", time: "13:00", name: "점심식사" },
      {
        kind: "free",
        time: "14:00",
        name: "아자부다이힐스 자유시간",
        description: "2023년 문을 연 도쿄의 새 복합단지입니다. 토마스 헤더윅이 디자인한 저층부와 정원, 상점·카페를 자유롭게 둘러보세요.\n\n⏰ 16:00에 국립신미술관으로 이동하니 시간에 맞춰 모여 주세요.",
        address: "1 Chome-3-1 Azabudai, Minato City, Tokyo 106-0041",
        imagePath: "/images/azabudaihills.jpg",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=麻布台ヒルズ",
      },
      {
        kind: "museum",
        time: "16:00",
        name: "국립신미술관",
        exhibition: "루브르 미술관전 ― 르네상스",
        description: "루브르 미술관 소장 르네상스 작품 50여 점을 소개하는 전시입니다.\n\n최대 화제작은 레오나르도 다빈치의 〈여인의 초상〉(일명 '아름다운 페로니에르')입니다. 다빈치 작품이 일본에서 공개되는 것은 1974년 〈모나리자〉 이후 처음이라고 합니다. 보티첼리, 티치아노, 뒤러 등 르네상스 거장들의 작품도 함께 볼 수 있습니다.\n\n전시 기간 2026.9.9 ~ 12.13",
        address: "7 Chome-22-2 Roppongi, Minato City, Tokyo 106-8558",
        imagePath: "/images/nact-louvre.png",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=7+Chome-22-2+Roppongi,+Minato+City,+Tokyo+106-8558",
      },
      { kind: "meal", time: "19:00", name: "저녁식사" },
    ],
  },
  {
    dayNumber: 3,
    weekday: "토",
    date: "12월 5일",
    dow: "SAT",
    region: "신주쿠 · 오다와라 · 하코네",
    transport: "🚌 전용차량 이동",
    summary: ["솜포 미술관", "신주쿠", "에노우라 측후소 / 쿠사마 야요이 뮤지엄", "하코네"],
    breakfast: "호텔식",
    lunch: "가부키초 점심",
    dinner: "가이세키 요리",
    accommodation: "스스키노하라 이치노유 (하코네)",
    hotelMapsUrl: "https://www.google.com/maps/search/?api=1&query=すすきの原+一の湯",
    hotelImagePath: "/images/susukinohara-ichinoyu.jpg",
    spots: [
      {
        kind: "move",
        time: "09:30",
        name: "호텔 출발",
      },
      {
        kind: "museum",
        time: "10:00",
        name: "솜포 미술관",
        exhibition: "알베르 마르케전",
        description: "프랑스 근대 화가 알베르 마르케(1875~1947) 탄생 150주년 회고전으로, 일본에서는 35년 만에 열리는 대규모 전시입니다. 고향 보르도 미술관 등에서 온 약 90점이 나옵니다.\n\n센강·남프랑스·알제 등 물가 풍경을 즐겨 그린 '물가의 화가'로, '마르케의 회색'이라 불리는 섬세한 색조가 특징입니다. 평생의 친구 마티스는 그를 '우리의 호쿠사이'라고 불렀습니다.\n\n🌻 솜포 미술관 소장품인 고흐 〈해바라기〉와 세잔 〈사과와 냅킨〉도 함께 관람합니다.\n\n전시 기간 2026.9.22 ~ 12.13",
        address: "1 Chome-26-1 Nishishinjuku, Shinjuku City, Tokyo 160-0023",
        imagePath: "/images/sompo-marquet.png",
        mapsUrl: "https://maps.app.goo.gl/o9QZba5NUw8gpxsb8",
      },
      { kind: "meal", time: "11:30", name: "가부키초에서 점심식사" },
      {
        kind: "free",
        time: "",
        name: "신주쿠 자유시간",
        description: "점심 후 신주쿠를 자유롭게 둘러보세요.\n\n오후에는 도슨트팀별로 일정이 나뉩니다.\n· 이용규 도슨트팀: 13:00 에노우라 측후소로 출발\n· 채수한 도슨트팀: 쿠사마 야요이 뮤지엄 관람\n\n⏰ 출발 시간에 맞춰 모여 주세요.",
      },
      {
        kind: "move",
        time: "13:00",
        name: "에노우라 측후소로 이동",
        description: "이용규 도슨트팀",
      },
      {
        kind: "museum",
        time: "",
        name: "에노우라 측후소",
        description: "사진가·현대미술가 스기모토 히로시가 오다와라 바닷가 귤밭 언덕에 지은 예술 공간입니다. 사가미만을 내려다보는 100m 길이의 '여름 동지 광선 요배 갤러리', 광학유리 무대, 돌로 쌓은 터널 등이 동지·하지의 해 뜨는 방향에 맞춰 배치되어 있습니다.\n\n대부분 야외를 걸으며 관람하니 편한 신발과 따뜻한 옷을 준비하세요.",
        address: "神奈川県小田原市江之浦362-1",
        imagePath: "/images/enoura-observatory.jpg",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=江之浦測候所",
        docent: "lee",
      },
      {
        kind: "museum",
        time: "",
        name: "쿠사마 야요이 뮤지엄",
        description: "물방울(도트)과 호박으로 잘 알려진 현대미술가 쿠사마 야요이가 2017년 신주쿠에 세운 미술관입니다. 5층 규모의 하얀 건물에서 주기적으로 바뀌는 기획전으로 회화·조각·설치 작품을 소개합니다.\n\n입장은 날짜·시간 지정 사전 예약제로 운영됩니다.",
        address: "東京都新宿区弁天町107",
        imagePath: "/images/kusama-museum.jpg",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=草間彌生美術館",
        docent: "chae",
      },
      {
        kind: "move",
        time: "18:00",
        name: "하코네 숙소 도착",
        description: "스스키노하라 이치노유",
      },
      { kind: "meal", time: "", name: "호텔에서 가이세키 요리 · 노미호다이(음료 무제한)" },
    ],
  },
  {
    dayNumber: 4,
    weekday: "일",
    date: "12월 6일",
    dow: "SUN",
    region: "하코네 · 귀국",
    transport: "✈️ 나리타 출발 19:50 / 20:00",
    summary: ["폴라 미술관", "후지산 전망", "나리타 공항"],
    breakfast: "호텔식",
    lunch: "현지식",
    dinner: "불포함",
    accommodation: "귀국",
    hotelMapsUrl: "",
    spots: [
      {
        kind: "museum",
        time: "10:00",
        name: "폴라 미술관",
        description: "하코네 센고쿠하라의 숲속에 자리한 미술관으로, 모네·르누아르·고흐·세잔·피카소 등 인상파와 근대 서양회화 컬렉션으로 유명합니다. 숲과 어우러지도록 지어진 유리 건물과 미술관 뒤편 산책로도 함께 즐겨 보세요.",
        address: "神奈川県足柄下郡箱根町仙石原小塚山1285",
        imagePath: "/images/pola-museum.jpg",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=ポーラ美術館",
      },
      { kind: "meal", time: "13:00", name: "점심식사 (현지식)" },
      {
        kind: "free",
        time: "14:00",
        name: "후지산 전망",
        description: "맑은 날에는 하코네에서 후지산을 가까이 볼 수 있습니다.",
        imagePath: "/images/arakurayama.jpg",
      },
      {
        kind: "move",
        time: "15:00",
        name: "나리타 공항으로 이동",
        description: "17:30 공항 도착 예정",
      },
      {
        kind: "airport",
        time: "17:30",
        name: "나리타 공항 도착 · 귀국",
        description: "출국 수속 후 도슨트팀별 항공편으로 귀국합니다.\n· 이용규 도슨트팀: 제주항공 7C1110 (나리타 19:50 → 인천 22:50)\n· 채수한 도슨트팀: 이스타항공 ZE608 (나리타 20:00 → 인천 22:40)\n\n3박 4일의 아트 투어를 마칩니다.",
        address: "成田国際空港, Chiba",
        mapsUrl: NARITA_MAPS,
      },
    ],
  },
];

export const getDay = (n: number) => days.find((d) => d.dayNumber === n);

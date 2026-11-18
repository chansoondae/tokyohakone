import type { Metadata, Viewport } from "next";
import { Noto_Sans_KR, Noto_Serif_KR } from "next/font/google";
import "./globals.css";
import { pageMetadata, siteName } from "@/lib/seo";
import { TopBar } from "@/components/layout/TopBar";
import { BottomNav } from "@/components/layout/BottomNav";
import { FontSizeProvider } from "@/components/FontSizeProvider";

const notoSans = Noto_Sans_KR({
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans",
  preload: false,
});

const notoSerif = Noto_Serif_KR({
  weight: ["500", "700"],
  variable: "--font-noto-serif",
  preload: false,
});

const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

const homeTitle = `${siteName} | 3박 4일`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  ...pageMetadata({
    title: homeTitle,
    description:
      "오르세 · 루브르 · 터너 특별전부터 에노우라 측후소, 하코네 폴라 미술관까지. 목~일 3박 4일, 아트프렌즈 ART FRIENDS와 함께하는 미술관 여행 일정표입니다.",
    path: "/",
  }),
  title: { default: homeTitle, template: `%s | ${siteName}` },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🎨</text></svg>",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#f4f2ed",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={`${notoSans.variable} ${notoSerif.variable}`}>
      <body className="min-h-screen flex flex-col">
        <FontSizeProvider>
          <div className="max-w-lg mx-auto w-full relative">
            <TopBar />
            <main className="flex-1 pb-24 pt-14">
              {children}
            </main>
            <BottomNav />
          </div>
        </FontSizeProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "신쭈꾸미 파주점 - 신선한 쭈꾸미 전문점",
  description: "파주 신촌동 위치, 신선한 쭈꾸미 요리 전문점. 쭈꾸미볶음, 철판요리, 정식 메뉴 제공",
  keywords: "신쭈꾸미, 파주 쭈꾸미, 파주 맛집, 쭈꾸미 맛집, 신촌동 맛집",
  openGraph: {
    title: "신쭈꾸미 파주점",
    description: "신선한 쭈꾸미로 만드는 정성 가득한 요리",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

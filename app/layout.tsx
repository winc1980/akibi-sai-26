import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Inter,
  Zen_Kaku_Gothic_New,
} from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import BackGround from "@/components/BackGround";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const zenKakuGothicNew = Zen_Kaku_Gothic_New({
  variable: "--font-zen-kaku-gothic-new",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "あきび祭2026",
  description: "秋田公立美術大学の学園祭、あきび祭2025の公式サイト",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ja"
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        zenKakuGothicNew.variable,
        "font-sans",
        inter.variable,
      )}
    >
      <head>
        <meta name="apple-mobile-web-app-title" content="あきび祭2026" />
      </head>
      <body className="flex min-h-full flex-col">
        <BackGround />
        <Header />
        {children}
      </body>
    </html>
  );
}

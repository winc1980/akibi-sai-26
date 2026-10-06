import type { Metadata } from "next";
import { Inter, Zen_Kaku_Gothic_New, Yuji_Boku, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "cn";
import BackGround from "@/components/BackGround";
import Header from "@/components/Header";
import Footer from "@/components/Footer/Footer";
import ServerLayout from "./server-layout";
import { GoogleAnalytics } from "@next/third-parties/google";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const zenKakuGothicNew = Zen_Kaku_Gothic_New({
  variable: "--font-zen-kaku-gothic-new",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

const yujiBoku = Yuji_Boku({
  variable: "--font-yuji-boku",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "あきび祭2026",
  description: "秋田公立美術大学の学園祭、あきび祭2026の公式サイト",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ja"
      data-scroll-behavior="smooth"
      className={cn(
        "h-full",
        "antialiased",
        zenKakuGothicNew.variable,
        yujiBoku.variable,
        "font-sans",
        geist.variable,
      )}
    >
      <head>
        <meta name="apple-mobile-web-app-title" content="あきび祭2026" />
      </head>
      <body className="text-akibi-black font-zen flex min-h-full w-full flex-col font-semibold">
        <BackGround />
        <Header />
        <ServerLayout>{children}</ServerLayout>
        <Footer />
      </body>
            {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID} />
      )}
    </html>
  );
}

import Link from "next/link";
import Winc from "./Winc";

export default function Footer() {
  return (
    <>
      <footer className="bg-secondary text-akibi-black font-zen flex w-full flex-col items-center pt-8 font-bold">
        <div className="flex w-[90vw] flex-col items-center justify-center gap-12 md:flex-row md:justify-center">
          <img className="max-w-30" src="/akibi_logo.svg" alt="あきび祭ロゴ" />
          <div className="flex flex-col gap-6 md:flex-row">
            <div className="flex w-full flex-col gap-3 text-center md:text-start">
              <Link href="/" className="font-bold hover:underline">
                トップ (開催概要)
              </Link>
              <div className="flex w-full flex-col text-sm opacity-80 md:text-start">
                <Link href="/#theme" className="text-nowrap hover:underline">
                  ２０２６年度テーマ「お鍋」
                </Link>
                <Link href="/#greeting" className="hover:underline">
                  ごあいさつ
                </Link>
                <Link href="/#access" className="hover:underline">
                  アクセス
                </Link>
              </div>
            </div>

            <div className="flex w-full flex-col gap-1 text-center text-sm md:text-start">
              <Link href="/exhibitions" className="hover:underline">
                展示
              </Link>
              <Link href="/shops" className="hover:underline">
                模擬店
              </Link>
              <Link href="/events" className="hover:underline">
                イベントスケジュール
              </Link>
              <Link href="/maps" className="hover:underline">
                マップ
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pb-4 text-sm">© 2026年度あきび祭実行委員会</div>
      </footer>
      <Winc />
    </>
  );
}

import { XIcon } from "lucide-react";
import { MenuIcon } from "lucide-react";
import Link from "next/link";

type Toggle = () => void;
export function Menu({ toggle }: { toggle: Toggle }) {
  return (
    <div className="text-akibiBlack fixed top-0 left-0 z-50 h-screen w-screen bg-amber-50">
      <button
        type="button"
        className="flex-cols mb-auto flex h-23 w-full items-center justify-end p-4"
        onClick={toggle}
      >
        <XIcon className="m-4 h-8 w-8" />
      </button>
      <div className="flex-cols mb-auto flex h-30 w-full items-center justify-center">
        <img
          src="/akibi_text_logo.svg"
          alt="あきび祭ロゴ"
          className="h-auto w-47"
        />
      </div>

      <Link
        onClick={toggle}
        href="/"
        className="px-8 pt-6 pb-3 text-[15px] font-bold hover:underline"
      >
        トップ（開催概要）
      </Link>
      <div className="px-11 pt-2 pb-4">
        <div className="flex flex-col rounded-bl-2xl border-b-2 border-l-2 *:px-6">
          <Link
            onClick={toggle}
            href="/#theme"
            className="py-2 text-nowrap hover:underline"
          >
            2026年度テーマ「お鍋」
          </Link>
          <Link
            onClick={toggle}
            href="/#greeting"
            className="py-2 hover:underline"
          >
            ごあいさつ
          </Link>
          <Link
            onClick={toggle}
            href="/#access"
            className="pt-2 pb-5 hover:underline"
          >
            アクセス
          </Link>
        </div>
      </div>

      <div className="flex h-100 w-full flex-col px-10 *:py-2 *:text-[15px]">
        <Link onClick={toggle} href="/exhibitions" className="hover:underline">
          展示
        </Link>
        <Link onClick={toggle} href="/shops" className="hover:underline">
          模擬店
        </Link>
        <Link onClick={toggle} href="/events" className="hover:underline">
          イベントスケジュール
        </Link>
        <Link onClick={toggle} href="/maps" className="hover:underline">
          マップ
        </Link>
      </div>
    </div>
  );
}

export function MenuBar({ toggle }: { toggle: Toggle }) {
  return (
    <div>
      <div className="fixed top-0 z-40 flex w-full flex-col p-2">
        <div className="flex h-17 w-full flex-row items-center justify-between rounded-2xl bg-amber-50 px-5">
          <img
            src="/akibi_logo.svg"
            alt="あきびアイコン"
            className="h-13 w-13"
          />
          <button type="button" onClick={toggle}>
            <MenuIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

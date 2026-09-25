"use client";
import { useState } from "react";
import { Menu, MenuBar } from "./Menu";
import Link from "next/link";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  function toggleMenuVisibility() {
    if (showMenu) {
      setShowMenu(false);
    } else {
      setShowMenu(true);
    }
  }
  return (
    <div className="font-zen font-bold">
      <div className="md:hidden">
        {showMenu ? (
          <MenuBar toggle={toggleMenuVisibility} />
        ) : (
          <Menu toggle={toggleMenuVisibility} />
        )}
      </div>
      <div className="fixed top-0 hidden h-23 w-screen flex-row items-center justify-center gap-14 text-2xl md:flex">
        <Link href="/" className="font-bold hover:underline">
          トップ
        </Link>
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
  );
}

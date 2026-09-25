"use client";
import { useState } from "react";
import { Menu, MenuBar } from "./Menu";
import Link from "next/link";

export default function Header() {
  const [showMenu, setShowMenu] = useState(true);
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
        <Link
          onClick={toggleMenuVisibility}
          href="/"
          className="font-bold hover:underline"
        >
          トップ
        </Link>
        <Link
          onClick={toggleMenuVisibility}
          href="/exhibitions"
          className="hover:underline"
        >
          展示
        </Link>
        <Link
          onClick={toggleMenuVisibility}
          href="/shops"
          className="hover:underline"
        >
          模擬店
        </Link>
        <Link
          onClick={toggleMenuVisibility}
          href="/events"
          className="hover:underline"
        >
          イベントスケジュール
        </Link>
        <Link
          onClick={toggleMenuVisibility}
          href="/maps"
          className="hover:underline"
        >
          マップ
        </Link>
      </div>
    </div>
  );
}

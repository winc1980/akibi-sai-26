import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 z-10 flex w-full scrollbar-none items-center justify-start gap-0 overflow-x-auto pl-8 text-[1.3rem] font-bold whitespace-nowrap [&::-webkit-scrollbar]:hidden">
      <HeaderLink href="/">トップ</HeaderLink>
      <HeaderLink href="/maps">マップ</HeaderLink>
      <HeaderLink href="/events">イベントスケジュール</HeaderLink>
      <HeaderLink href="/shops">模擬店</HeaderLink>
      <HeaderLink href="/exhibitions">展示</HeaderLink>
    </header>
  );
}

function HeaderLink({ children, href }: { children: string; href: string }) {
  return (
    <div className="text-black-soft relative mr-[1.2rem] flex h-16 w-auto items-center justify-center">
      <Link href={href} className="no-underline">
        {children}
      </Link>
    </div>
  );
}

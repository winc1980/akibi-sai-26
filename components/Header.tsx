import Link from "next/link";

export default function Header() {
  return (
    <header className="font-zen-kaku fixed top-0 left-0 z-50 flex w-dvw justify-start pl-8 text-[1.3rem] font-bold">
      <AnimationLink _src="/たこさん.png" href="/">
        トップ
      </AnimationLink>
      <AnimationLink _src="/たこさん.png" href="/maps">
        マップ
      </AnimationLink>
      <AnimationLink _src="/たこさん.png" href="/events">
        イベントスケジュール
      </AnimationLink>
      <AnimationLink _src="/たこさん.png" href="/shops">
        模擬店
      </AnimationLink>
      <AnimationLink _src="/たこさん.png" href="/exhibitions">
        展示
      </AnimationLink>
      <AnimationLink _src="/たこさん.png" href="/sponsors">
        協賛
      </AnimationLink>
    </header>
  );
}
function AnimationLink({
  children,
  href,
  _src,
}: {
  children: string;
  href: string;
  _src: string;
}) {
  //   const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="text-default_black relative mr-5 flex h-16 items-center justify-center">
      <Link href={href}>{children}</Link>
    </div>
  );
}

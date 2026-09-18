export default function Header() {
  return (
    <header className="font-zen-kaku fixed top-0 left-0 z-50 flex w-dvw justify-start pl-8 text-[1.3rem] font-bold">
      <AnimationLink src="/たこさん.png" href="/">
        トップ
      </AnimationLink>
      <AnimationLink src="/たこさん.png" href="/maps">
        マップ
      </AnimationLink>
      <AnimationLink src="/たこさん.png" href="schedules">
        イベントスケジュール
      </AnimationLink>
      <AnimationLink src="/たこさん.png" href="/shops">
        模擬店
      </AnimationLink>
      <AnimationLink src="/たこさん.png" href="exhibitions">
        展示
      </AnimationLink>
      <AnimationLink src="/たこさん.png" href="sponsors">
        協賛
      </AnimationLink>
    </header>
  );
}
function AnimationLink({
  children,
  href,
  src,
}: {
  children: string;
  href: string;
  src: string;
}) {
  //   const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="text-default_black relative mr-5 flex h-16 items-center justify-center">
      <a href={href}>{children}</a>
    </div>
  );
}

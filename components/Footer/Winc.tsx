import Link from "next/link";

export default function Winc() {
  return (
    <div className="bg-secondary w-full pt-4">
      <section className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-8 px-3 py-6 md:flex-row md:items-start md:text-end">
        <img
          src="/Footer/winc_logo.svg"
          alt="Logo"
          width={160}
          height={64}
          className="shrink-0"
        />

        <p className="text-winc-black text-center text-sm leading-5 md:text-start lg:text-end">
          このウェブサイトは、早稲田大学コンピューター研究会(WINC)との共同プロジェクトとして制作されました。
          <br />
          WINCではサークルや学生団体に対して無償でWebサイトを制作・提供をしています。
          <br />
          詳しくは
          <Link
            href="https://winc.ne.jp"
            className="underline hover:opacity-70"
          >
            https://winc.ne.jp
          </Link>
          をご覧ください。
        </p>
      </section>
    </div>
  );
}

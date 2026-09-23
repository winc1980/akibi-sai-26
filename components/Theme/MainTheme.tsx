import MoveIngredients from "./MoveIngredients";

export default function MainTheme({ theme }: { theme: string }) {
  return (
    <MoveIngredients content={theme} src="/mainTheme/hakusai.png">
      <div className="relative grid w-[90vw] place-items-center overflow-x-clip text-center lg:w-[50vw] lg:overflow-visible">
        <img
          className="h-auto w-full [grid-area:1/1]"
          src="/mainTheme/pot.png"
          alt="メインテーマ"
        />
        <div className="text-akibi-black font-yuji absolute top-[25%] flex flex-col gap-0 text-center font-bold lg:top-[20%]">
          <p className="text-[4cqw] leading-none lg:text-[2cqw]">
            2026年度テーマ
          </p>
          <p className="text-[20cqw] leading-none lg:text-[10cqw]">お鍋</p>
        </div>
        <img
          className="absolute top-[-10%] left-[-20%] w-1/2"
          src="/mainTheme/tofu.png"
          alt="豆腐"
        />
        <img
          className="absolute top-[-30%] right-[-10%] w-1/2"
          src="/mainTheme/shiitake.png"
          alt="しいたけ"
        />
        <img
          className="absolute top-[-40%] left-[-10%] w-[40%]"
          src="/mainTheme/kamaboko.png"
          alt="かまぼこ"
        />
      </div>
    </MoveIngredients>
  );
}

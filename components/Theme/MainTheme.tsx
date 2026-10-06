import { WhiteTextBox } from "@/components/WhiteTextBox";
import AnimationTheme from "./AnimationTheme";
import DecoratedText from "../DecoratedText";
import ViewPortChecker from "../ViewPortChecker";

export default function MainTheme({ theme }: { theme: string }) {
  return (
    <ViewPortChecker>
      <div className="relative z-10">
        <img
          className="relative -bottom-1 w-full md:hidden"
          src="/wave_small.webp"
          alt="sample"
        />
        <img
          className="relative -bottom-1 hidden w-full md:block"
          src="/wave_large.webp"
          alt="sample"
        />
      </div>
      <div
        id="theme"
        className="font-zen bg-primary xs:pt-70 relative flex w-full flex-col items-center justify-around gap-y-8 pt-50 md:gap-x-24 md:px-8 md:pt-70 lg:flex-row lg:overflow-visible lg:pt-28"
      >
        <AnimationTheme />
        <div className="grid w-[90vw] place-items-center lg:w-[50vw]">
          <WhiteTextBox className="[grid-area:1/1] lg:w-[45vw]">
            <DecoratedText text={theme}></DecoratedText>
          </WhiteTextBox>
        </div>
        <div className="bg-primary absolute -bottom-10 -z-10 h-10 w-full [clip-path:ellipse(87%_57%_at_50%_41%)] md:h-40"></div>
      </div>
    </ViewPortChecker>
  );
}

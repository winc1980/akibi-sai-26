import { WhiteTextBox } from "@/components/WhiteTextBox";
import AnimationTheme from "./AnimationTheme";
import { WavePath } from "../WavePath";
import MoveBackground from "../MoveBackground";

export default function MainTheme({ theme }: { theme: string }) {
  return (
    <MoveBackground>
      <div className="relative z-10">
        <WavePath className="relative -bottom-1" />
        <WavePath className="absolute bottom-4 opacity-50" />
        <div>
          <img
            style={{
              top: "-20%",
              width: "10%",
            }}
            src="/mainTheme/single-carrot-a.webp"
            alt="人参"
            className="absolute"
          />
          <img
            style={{
              top: "-50%",
              left: "20%",
              width: "8%",
            }}
            src="/mainTheme/hakusai.webp"
            alt="白菜"
            className="absolute"
          />
          <img
            style={{
              top: "-10%",
              left: "30%",
              width: "8%",
            }}
            src="/mainTheme/single-shiitake-a.webp"
            alt="しいたけ"
            className="absolute"
          />
          <img
            style={{
              top: "40%",
              left: "40%",
              width: "6%",
            }}
            src="/mainTheme/single-kamaboko-a.webp"
            alt="かまぼこ"
            className="absolute"
          />
          <img
            style={{
              top: "-20%",
              left: "50%",
              width: "10%",
            }}
            src="/mainTheme/single-carrot-b.webp"
            alt="人参"
            className="absolute"
          />
          <img
            style={{
              top: "-20%",
              left: "70%",
              width: "10vw",
            }}
            src="/mainTheme/single-tofu-a.webp"
            alt="豆腐"
            className="absolute"
          />
          <img
            style={{
              top: "-15%",
              left: "90%",
              width: "10%",
            }}
            src="/mainTheme/single-shiitake-b.webp"
            alt="しいたけ"
            className="absolute"
          />
        </div>
      </div>
      <div
        id="theme"
        className="font-zen bg-primary xs:pt-70 relative flex w-full flex-col items-center justify-around gap-y-8 pt-50 md:gap-x-24 md:px-8 md:pt-70 lg:flex-row lg:overflow-visible lg:pt-28"
      >
        <AnimationTheme />
        <div className="grid w-[90vw] place-items-center lg:w-[50vw]">
          <WhiteTextBox className="[grid-area:1/1] lg:w-[45vw]">
            <p>{theme}</p>
          </WhiteTextBox>
        </div>
        <div className="bg-primary absolute -bottom-10 -z-10 h-10 w-full [clip-path:ellipse(87%_57%_at_50%_41%)] md:h-40"></div>
      </div>
    </MoveBackground>
  );
}

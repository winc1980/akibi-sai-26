"use client";
import { WhiteTextBox } from "@/components/WhiteTextBox";
import AnimationTheme from "./AnimationTheme";

export default function MainTheme({ theme }: { theme: string }) {
  return (
    <div
      id="theme"
      className="font-zen flex w-full flex-col items-center justify-around gap-y-8 overflow-x-clip pt-28 md:gap-x-24 md:px-8 lg:flex-row lg:overflow-visible"
    >
      <AnimationTheme />
      <div className="grid w-[90vw] place-items-center lg:w-[50vw]">
        <WhiteTextBox className="text-akibi-black w-[90vw] px-8 py-2 whitespace-pre-wrap [grid-area:1/1] lg:w-[45vw]">
          <p>{theme}</p>
        </WhiteTextBox>
      </div>
    </div>
  );
}

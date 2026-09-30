import type { ComponentProps } from "react";
import { cn } from "cn";

function WhiteTextBox({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="white-text-box"
      className={cn(
        "font-zen text-akibi-black text-black-soft w-[90vw] rounded-[3rem] bg-white/60 px-6 py-12 text-[1.2rem] leading-loose font-bold whitespace-pre-wrap",
        className,
      )}
      {...props}
    />
  );
}

export { WhiteTextBox };

import type { ComponentProps } from "react";
import { cn } from "cn";

function WhiteTextBox({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="white-text-box"
      className={cn(
        "font-zen rounded-[3rem] bg-white/60 px-6 py-12 text-[1.2rem] leading-loose font-bold",
        className,
      )}
      {...props}
    />
  );
}

export { WhiteTextBox };

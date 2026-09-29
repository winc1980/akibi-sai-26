import type { ComponentProps } from "react";
import { cn } from "cn";

function WhiteTextBox({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="white-text-box"
      className={cn(
        "font-zen rounded-[3rem] bg-white/60 text-[1.2rem] leading-15 font-bold",
        className,
      )}
      {...props}
    />
  );
}

export { WhiteTextBox };

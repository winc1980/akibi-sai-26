"use client";
import { cn } from "cn";
import { useMotionValue } from "motion/react";
import { ReactNode, useEffect, useState } from "react";
import MoveBackground from "./MoveBackground";

export default function ViewPortChecker({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  const [innerWidth, setInnerWidth] = useState(0);
  const Threshold = 768; //mdが48rem=768px

  useEffect(() => {
    const handleResize = () => {
      setInnerWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [innerWidth]);
  if (innerWidth < Threshold) {
    console.log("スマホだよ");
    return (
      <div
        style={{
          marginBottom: "-3rem",
        }}
        className={cn("relative z-20 h-full w-full overflow-x-clip", className)}
      >
        {children}
      </div>
    );
  } else {
    console.log("パソコンだよ");
    return <MoveBackground className={className}>{children}</MoveBackground>;
  }
}

"use client";
import { cn } from "cn";
import { useMotionValue } from "motion/react";
import { ReactNode, useEffect } from "react";
import MoveBackground from "./MoveBackground";

export default function ViewPortChecker({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  const innerWidth = useMotionValue(0);
  const Threshold = 768; //mdが48rem=768px

  useEffect(() => {
    const handleResize = () => {
      innerWidth.set(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [innerWidth]);
  if (innerWidth.get() < Threshold) {
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
    return <MoveBackground className={className}>{children}</MoveBackground>;
  }
}

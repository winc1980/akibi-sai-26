"use client";
import { cn } from "cn";
import { ReactNode, useEffect, useState } from "react";
import MoveBackground from "./MoveBackground";

export default function ViewPortChecker({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  const [viewPointWidth, setViewPointWidth] = useState(0);
  const Threshold = 768; //mdが48rem=768px

  useEffect(() => {
    const handleResize = () => {
      setViewPointWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener("DOMContentLoaded", handleResize);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("DOMContentLoaded", handleResize);
    };
  }, []);

  if (viewPointWidth === 0) {
    return null;
  }
  return (
    <>
      {viewPointWidth < Threshold ? (
        <div
          style={{
            marginBottom: "-3rem",
          }}
          className={cn(
            "relative z-20 h-full w-full overflow-x-clip",
            className,
          )}
        >
          {children}
        </div>
      ) : (
        <MoveBackground className={className}>{children}</MoveBackground>
      )}
    </>
  );
}

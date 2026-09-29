"use client";
import { cn } from "cn";
import { motion, useScroll, useTransform } from "motion/react";
import { ReactNode, useEffect, useRef, useState } from "react";
export default function MoveBackground({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const childrenRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const element = childrenRef.current;
    if (!element) return;

    const observer = new ResizeObserver(([entry]) => {
      setHeight(entry.contentRect.height);
    });

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    ["10dvh", `${-height - 60}px`],
  );

  return (
    <div
      ref={ref}
      style={{
        marginBottom: "-10vh",
      }}
      className={cn("relative z-20 h-full w-full overflow-x-clip", className)}
    >
      <motion.div
        ref={childrenRef}
        className="absolute w-dvw"
        style={{
          top: y,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

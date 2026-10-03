"use client";
import { cn } from "cn";
import { motion, useMotionValue, useScroll, useTransform } from "motion/react";
import { ReactNode, useEffect, useRef } from "react";
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
  const height = useMotionValue(0);
  useEffect(() => {
    const element = childrenRef.current;
    if (!element) return;

    const observer = new ResizeObserver(([entry]) => {
      height.set(entry.contentRect.height);
    });

    observer.observe(element);

    return () => observer.disconnect();
  }, [height]);

  const y = useTransform([scrollYProgress, height], ([p, h]: number[]) => {
    return `calc(${10 * (1 - p)}dvh + ${p * (-h - 60)}px)`;
  });

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
          y: y,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

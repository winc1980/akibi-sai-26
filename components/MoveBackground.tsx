"use client";
import { cn } from "cn";
import { motion, useMotionValue, useScroll, useTransform } from "motion/react";
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
  const [height, setHeight] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const MotionHeight = useMotionValue(0);
  useEffect(() => {
    if (!childrenRef.current) {
      return;
    }
    MotionHeight.set(childrenRef.current.clientHeight);
    setHeight(childrenRef.current.clientHeight);
  }, [MotionHeight]);

  const y = useTransform(
    [scrollYProgress, MotionHeight],
    ([p, h]: number[]) => {
      return `calc(${10 * (1 - p)}dvh + ${p * -h}px)`;
    },
  );

  return (
    <div
      ref={ref}
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

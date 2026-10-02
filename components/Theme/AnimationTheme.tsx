"use client";
import { motion } from "motion/react";

export default function AnimationTheme() {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.5 }}
      className="relative z-20 grid w-[90vw] place-items-center overflow-x-clip text-center lg:w-[50vw]"
    >
      <img
        className="h-auto w-full [grid-area:1/1]"
        src="/mainTheme/pot.webp"
        alt="メインテーマ"
      />

      <motion.div
        variants={{ offscreen: { opacity: 0 }, onscreen: { opacity: 1 } }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="text-akibi-black font-yuji absolute top-[25%] flex flex-col gap-0 text-center font-bold lg:top-[20%]"
      >
        <p className="text-[4cqw] leading-none lg:text-[2cqw]">
          2026年度テーマ
        </p>
        <p className="text-[20cqw] leading-none lg:text-[10cqw]">お鍋</p>
      </motion.div>
      <div className="@container-size pointer-events-none absolute inset-0">
        <AnimationImage
          src="/mainTheme/tofu.webp"
          alt="豆腐"
          from={{ top: 40, left: 40, width: 1 }}
          to={{ top: 20, left: 0, width: 30 }}
        />
        <AnimationImage
          src="/mainTheme/shiitake.webp"
          alt="しいたけ"
          from={{ top: 40, left: 50, width: 1 }}
          to={{ top: -30, left: 70, width: 30 }}
        />
        <AnimationImage
          src="/mainTheme/kamaboko.webp"
          alt="かまぼこ"
          from={{ top: 10, left: 30, width: 1 }}
          to={{ top: -60, left: 0, width: 40 }}
        />
        <AnimationImage
          src="/mainTheme/takosan.webp"
          alt="たこさん"
          from={{ top: 50, left: 40, width: 1 }}
          to={{ top: 0, left: 50, width: 70 }}
        />
        <AnimationImage
          src="/mainTheme/carrot.webp"
          alt="にんじん"
          from={{ top: 50, left: 20, width: 1 }}
          to={{ top: -60, left: 30, width: 40 }}
        />
      </div>
    </motion.div>
  );
}

function AnimationImage({
  src,
  alt,
  from,
  to,
}: {
  src: string;
  alt: string;
  from: { top: number; left: number; width: number };
  to: { top: number; left: number; width: number };
}) {
  return (
    <motion.img
      variants={{
        offscreen: {
          x: `${from.left - to.left}cqw`,
          y: `${from.top - to.top}cqh`,
          scale: from.width / to.width,
        },
        onscreen: { x: "0cqw", y: "0cqh", scale: 1 },
      }}
      transition={{ type: "spring", duration: 0.8 }}
      style={{
        top: `${to.top}%`,
        left: `${to.left}%`,
        width: `${to.width}%`,
        originX: 0,
        originY: 0,
      }}
      className="absolute h-auto"
      src={src}
      alt={alt}
    />
  );
}

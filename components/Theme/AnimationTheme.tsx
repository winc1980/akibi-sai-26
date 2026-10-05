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
      <div className="@container-size pointer-events-none absolute inset-0 flex items-center justify-center">
        <motion.img
          variants={{
            offscreen: {
              scale: 0,
            },
            onscreen: {
              scale: 1,
            },
          }}
          style={{
            top: "-18%",
          }}
          className="relative"
          transition={{ type: "spring", duration: 0.8 }}
          src="/mainTheme/fly.webp"
          alt=""
        />
      </div>
    </motion.div>
  );
}

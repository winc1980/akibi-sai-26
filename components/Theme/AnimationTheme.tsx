"use client";
import { motion } from "motion/react";

export default function AnimationTheme() {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 1 }}

      className="relative grid w-[90vw] place-items-center text-center lg:w-[50vw]"
    >
      <img
        className="h-auto w-full [grid-area:1/1]"
        src="/mainTheme/pot.png"
        alt="メインテーマ"
      />
      <motion.div
        variants={{
          offscreen: {
            opacity: 0,
          },
          onscreen: {
            opacity: 1,
          },
        }}

        transition={{
          type: "spring",
          duration: 0.8,
        }}
        className="text-akibi-black font-yuji absolute top-[25%] flex flex-col gap-0 text-center font-bold lg:top-[20%]"
      >
        <p className="text-[4cqw] leading-none lg:text-[2cqw]">
          2026年度テーマ
        </p>
        <p className="text-[20cqw] leading-none lg:text-[10cqw]">お鍋</p>
      </motion.div>
      <AnimationImage
        initial={{
          top: "40%",
          left: "40%",
          width: "1%",
        }}
        whileInView={{
          top: "20%",
          left: "0%",
          width: "30%",
        }}
        src="/mainTheme/tofu.png"
        alt="豆腐"
      />
      <AnimationImage
        initial={{
          top: "40%",
          left: "50%",
          width: "1%",
        }}
        whileInView={{
          top: "-30%",
          left: "70%",
          width: "30%",
        }}

        src="/mainTheme/shiitake.png"
        alt="しいたけ"
      />
      <AnimationImage
        initial={{
          top: "10%",
          left: "30%",
          width: "1%",
        }}

        whileInView={{
          top: "-60%",
          left: "0%",
          width: "40%",
        }}
        src="/mainTheme/kamaboko.png"
        alt="かまぼこ"
      />
    </motion.div>
  );
}

function AnimationImage({
  src,
  alt,
  initial,
  whileInView,
}: {
  src: string;
  alt: string;
  initial: {
    top: string;
    left: string;
    width: string;
  };
  whileInView: {
    top: string;
    left: string;
    width: string;
  };
}) {
  return (
    <motion.img
      variants={{
        offscreen: initial,
        onscreen: whileInView,
      }}
      transition={{
        type: "spring",
        duration: 0.8,
      }}
      className="absolute"
      src={src}
      alt={alt}
    />
  );
}

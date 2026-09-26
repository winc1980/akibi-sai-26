"use client";
import { motion } from "motion/react";
import MoveIngredients from "./MoveIngredients";

export default function MainTheme({ theme }: { theme: string }) {
  return (
    <MoveIngredients content={theme} src="/mainTheme/hakusai.png">
      <div className="relative grid w-[90vw] place-items-center overflow-x-clip text-center lg:w-[50vw] lg:overflow-visible">
        <img
          className="h-auto w-full [grid-area:1/1]"
          src="/mainTheme/pot.png"
          alt="メインテーマ"
        />
        <div className="text-akibi-black font-yuji absolute top-[25%] flex flex-col gap-0 text-center font-bold lg:top-[20%]">
          <p className="text-[4cqw] leading-none lg:text-[2cqw]">
            2026年度テーマ
          </p>
          <p className="text-[20cqw] leading-none lg:text-[10cqw]">お鍋</p>
        </div>
        <motion.img
          style={{
            top: "-10%",
            // left: "-20%",
          }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ delay: 1, duration: 0.8 }}
          initial={{
            left: "-20%",
          }}
          whileInView={{
            left: "60%",
          }}
          className="absolute w-1/2"
          src="/mainTheme/tofu.png"
          alt="豆腐"
        />
        <motion.img
          style={{
            top: "-30%",
            right: "-10%",
          }}
          className="absolute w-1/2"
          src="/mainTheme/shiitake.png"
          alt="しいたけ"
        />
        <motion.img
          style={{
            top: "-40%",
            left: "-10%",
          }}
          className="absolute w-[40%]"
          src="/mainTheme/kamaboko.png"
          alt="かまぼこ"
        />
      </div>
    </MoveIngredients>
  );
}

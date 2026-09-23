"use client";

import { motion } from "motion/react";

export default function Greeting({ message: greeting }: { message: string }) {
  return (
    <div
      id="greeting"
      className="mx-auto flex w-[90dvw] flex-col items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
      >
        <div className="font-yuji text-black-soft flex items-center justify-center text-center text-8xl leading-24 font-normal">
          <img
            className="max-w-[20vw]"
            src="/akibi_goods.png"
            alt="学祭グッズ"
          />
          <p>ごあいさつ</p>
        </div>
      </motion.div>

      <motion.div
        className="font-zen text-black-soft rounded-[3rem] bg-white/20 p-4 pr-4 pl-8 text-[1.2rem] leading-10 font-bold whitespace-pre-wrap"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.8,
          delay: 0.25,
          ease: "easeOut",
        }}
      >
        <p>{greeting}</p>
      </motion.div>
    </div>
  );
}

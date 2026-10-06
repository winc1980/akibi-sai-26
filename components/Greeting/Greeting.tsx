"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { WhiteTextBox } from "@/components/WhiteTextBox";
import { useRef } from "react";
import DecoratedText from "../DecoratedText";

export default function Greeting({ message: greeting }: { message: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);

  return (
    <div className="relative z-10 h-full w-full overflow-x-clip" ref={ref}>
      {/*<SlideIngredients />*/}
      <motion.div
        style={{ translateY: y }}
        id="greeting"
        className="bg-secondary mx-auto flex w-full flex-col items-center justify-center py-10"
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
              src="/akibi_goods.webp"
              alt="学祭グッズ"
            />
            <p>ごあいさつ</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            delay: 0.25,
            ease: "easeOut",
          }}
        >
          <WhiteTextBox>
            <DecoratedText text={greeting}></DecoratedText>
          </WhiteTextBox>
        </motion.div>
      </motion.div>
    </div>
  );
}

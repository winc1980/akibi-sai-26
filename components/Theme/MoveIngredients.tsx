"use client";
import { motion } from "motion/react";
import { ReactNode } from "react";

export default function MoveIngredients({
  src,
  alt,
  content,
  children,
}: {
  src: string;
  alt?: string;
  content: string;
  children: ReactNode;
}) {
  return (
    <div
      id="theme"
      className="font-zen flex w-full flex-col items-center justify-around gap-y-8 overflow-x-clip pt-28 md:gap-x-24 md:px-8 lg:flex-row"
    >
      {children}
      <div className="grid w-[90vw] place-items-center overflow-x-clip lg:w-[50vw]">
        <motion.img
          initial={{ opacity: 1, scale: 1, rotate: 0 }}
          whileInView={{ scale: [1, 1.1, 0], rotate: [0, 0, 360] }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.8 }}
          className="h-auto max-h-[80vh] w-auto max-w-[50vw] object-contain [grid-area:1/1]"
          src={src}
          alt={alt}
        />

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: [0, 1.2, 0.95, 1] }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, delay: 0.75, ease: "easeOut" }}
          className="text-akibi-black w-[90vw] rounded-[3rem] bg-white/20 px-8 py-2 text-[1.2rem] leading-10 font-bold whitespace-pre-wrap [grid-area:1/1] lg:w-[45vw]"
        >
          <p>{content}</p>
        </motion.div>
      </div>
    </div>
  );
}

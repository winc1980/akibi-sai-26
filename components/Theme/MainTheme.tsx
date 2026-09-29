// "use client";
// import { WhiteTextBox } from "@/components/WhiteTextBox";
// import AnimationTheme from "./AnimationTheme";
// import { WavePath } from "../WavePath";
// import {
//   motion,
//   useMotionValueEvent,
//   useScroll,
//   useTransform,
// } from "motion/react";
// import { useRef } from "react";

// export default function MainTheme({ theme }: { theme: string }) {
//   const ref = useRef<HTMLDivElement>(null);

//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"],
//   });
//   useMotionValueEvent(scrollYProgress, "change", (latest) => {
//     console.log(latest);
//   });

//   const translateY = useTransform(scrollYProgress, [0, 1], [100, -100]);
//   return (
//     <motion.div
//       ref={ref}
//       style={{
//         translateY: translateY,
//       }}
//     >
//       <div className="relative z-10">
//         <WavePath className="relative -bottom-1" />
//         <WavePath className="absolute bottom-4 opacity-50" />
//         <div>
//           <img
//             style={{
//               top: "-20%",
//               width: "10%",
//             }}
//             src="/mainTheme/single-carrot-a.png"
//             alt="人参"
//             className="absolute"
//           />
//           <img
//             style={{
//               top: "-50%",
//               left: "20%",
//               width: "8%",
//             }}
//             src="/mainTheme/hakusai.png"
//             alt="白菜"
//             className="absolute"
//           />
//           <img
//             style={{
//               top: "-10%",
//               left: "30%",
//               width: "8%",
//             }}
//             src="/mainTheme/single-shiitake-a.png"
//             alt="しいたけ"
//             className="absolute"
//           />
//           <img
//             style={{
//               top: "40%",
//               left: "40%",
//               width: "6%",
//             }}
//             src="/mainTheme/single-kamaboko-a.png"
//             alt="かまぼこ"
//             className="absolute"
//           />
//           <img
//             style={{
//               top: "-20%",
//               left: "50%",
//               width: "10%",
//             }}
//             src="/mainTheme/single-carrot-b.png"
//             alt="人参"
//             className="absolute"
//           />
//           <img
//             style={{
//               top: "-20%",
//               left: "70%",
//               width: "10vw",
//             }}
//             src="/mainTheme/single-tofu-a.png"
//             alt="豆腐"
//             className="absolute"
//           />
//           <img
//             style={{
//               top: "-15%",
//               left: "90%",
//               width: "10%",
//             }}
//             src="/mainTheme/single-shiitake-b.png"
//             alt="しいたけ"
//             className="absolute"
//           />
//         </div>
//       </div>
//       <div
//         id="theme"
//         className="font-zen bg-primary xs:pt-70 relative flex w-full flex-col items-center justify-around gap-y-8 pt-50 pb-10 md:gap-x-24 md:px-8 md:pt-70 lg:flex-row lg:overflow-visible lg:pt-28"
//       >
//         <AnimationTheme />
//         <div className="grid w-[90vw] place-items-center lg:w-[50vw]">
//           <WhiteTextBox className="text-akibi-black w-[90vw] whitespace-pre-wrap [grid-area:1/1] lg:w-[45vw]">
//             <p>{theme}</p>
//           </WhiteTextBox>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

"use client";
import { WhiteTextBox } from "@/components/WhiteTextBox";
import AnimationTheme from "./AnimationTheme";
import { WavePath } from "../WavePath";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function MainTheme({ theme }: { theme: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -1000]);

  return (
    <div ref={ref}>
      <motion.div style={{ y: y }}>
        <div className="relative z-10">
          <WavePath className="relative -bottom-1" />
          <WavePath className="absolute bottom-4 opacity-50" />
          <div>
            <img
              style={{
                top: "-20%",
                width: "10%",
              }}
              src="/mainTheme/single-carrot-a.png"
              alt="人参"
              className="absolute"
            />
            <img
              style={{
                top: "-50%",
                left: "20%",
                width: "8%",
              }}
              src="/mainTheme/hakusai.png"
              alt="白菜"
              className="absolute"
            />
            <img
              style={{
                top: "-10%",
                left: "30%",
                width: "8%",
              }}
              src="/mainTheme/single-shiitake-a.png"
              alt="しいたけ"
              className="absolute"
            />
            <img
              style={{
                top: "40%",
                left: "40%",
                width: "6%",
              }}
              src="/mainTheme/single-kamaboko-a.png"
              alt="かまぼこ"
              className="absolute"
            />
            <img
              style={{
                top: "-20%",
                left: "50%",
                width: "10%",
              }}
              src="/mainTheme/single-carrot-b.png"
              alt="人参"
              className="absolute"
            />
            <img
              style={{
                top: "-20%",
                left: "70%",
                width: "10vw",
              }}
              src="/mainTheme/single-tofu-a.png"
              alt="豆腐"
              className="absolute"
            />
            <img
              style={{
                top: "-15%",
                left: "90%",
                width: "10%",
              }}
              src="/mainTheme/single-shiitake-b.png"
              alt="しいたけ"
              className="absolute"
            />
          </div>
        </div>
        <div
          id="theme"
          className="font-zen bg-primary xs:pt-70 relative flex w-full flex-col items-center justify-around gap-y-8 pt-50 pb-10 md:gap-x-24 md:px-8 md:pt-70 lg:flex-row lg:overflow-visible lg:pt-28"
        >
          <AnimationTheme />
          <div className="grid w-[90vw] place-items-center lg:w-[50vw]">
            <WhiteTextBox className="text-akibi-black w-[90vw] whitespace-pre-wrap [grid-area:1/1] lg:w-[45vw]">
              <p>{theme}</p>
            </WhiteTextBox>
          </div>
        </div>{" "}
      </motion.div>
    </div>
  );
}

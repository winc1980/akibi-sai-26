import * as motion from "motion/react-client";
import type { ReactNode } from "react";
import { Access, GoogleMap } from "./MapCards";

export default function Maps() {
  return (
    <div className="bg-secondary relative flex w-full flex-col items-center justify-center gap-80 overflow-x-clip pt-80 pb-20 sm:gap-100 sm:pt-100 md:flex-row md:gap-2 md:px-2 lg:gap-7">
      <PodShapedCardContainer label="アクセス">
        <Access />
      </PodShapedCardContainer>

      <PodShapedCardContainer label="マップ">
        <GoogleMap />
      </PodShapedCardContainer>
    </div>
  );
}

function PodShapedCardContainer({
  children,
  label,
}: {
  children: ReactNode;
  label: string;
}) {
  return (
    <div className="xs:w-[80%] w-[90%] pt-50 sm:w-[85%] md:w-[95%] md:max-w-md lg:w-full lg:max-w-xl">
      <motion.div
        className="card-container border-t-lid relative isolate z-0 mx-auto flex max-h-48 w-full max-w-xl items-center justify-center rounded-b-[5rem] border-t-4 text-center"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ amount: 1 }}
      >
        {/* 動くコンテンツ */}
        <motion.div
          className="relative z-10 flex h-107.5 w-full flex-col items-center justify-center gap-4"
          style={{
            transformOrigin: "10% 60%",
          }}
          variants={{
            offscreen: {
              y: 70,
            },
            onscreen: {
              y: "clamp(-300px, -40vw, -160px)",
              transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.6,
              },
            },
          }}
        >
          {/* フタ */}
          <motion.div
            variants={{
              offscreen: {
                rotate: 0,
              },
              onscreen: {
                rotate: -7,
                y: "clamp(-35px, -4vw, -25px)",
                transition: {
                  type: "spring",
                  bounce: 0.4,
                  duration: 0.8,
                },
              },
            }}
            className="relative z-10 flex w-full flex-col items-center"
          >
            {/* ふたの持ち手 */}
            <div className="h-6 w-16 rounded-t-2xl bg-black" />

            {/* ふた */}
            <div className="bg-pod border-b-lid h-6 w-full rounded-t-2xl border-b-4" />
          </motion.div>

          {/* children */}
          <motion.div
            className="relative z-10 h-107.5 w-full md:px-2"
            variants={{
              offscreen: {
                opacity: 0,
              },
              onscreen: {
                opacity: 1,
              },
            }}
          >
            {children}
          </motion.div>
        </motion.div>

        {/* 背景 */}
        <div className="bg-pod pointer-events-none absolute inset-0 z-20 rounded-b-[5rem]" />

        {/* ラベル */}
        <div className="font-yuji text-black-soft pointer-events-none absolute top-1/2 left-1/2 z-30 -translate-x-1/2 -translate-y-1/2 text-[2.5rem] font-normal sm:text-5xl">
          {label}
        </div>
      </motion.div>
    </div>
  );
}

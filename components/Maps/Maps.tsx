import * as motion from "motion/react-client";
import type { ReactNode } from "react";
import { Access, GoogleMap } from "./MapCards";

export default function Maps() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center gap-70 overflow-x-clip pt-70 pb-20 sm:gap-100 sm:pt-100 md:flex-row md:gap-7">
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
    <div className="w-[80%] max-w-xl pt-25 md:w-full">
      <motion.div
        className="card-container bg-pod border-t-lid relative z-auto mx-auto flex max-h-48 w-full max-w-xl items-center justify-center rounded-b-[5rem] border-t-4 text-center"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ amount: 1 }}
      >
        <motion.div
          className="-z-10 flex h-107.5 w-full flex-col items-center justify-center gap-4"
          style={{
            transformOrigin: "10% 60%",
          }}
          variants={{
            offscreen: {
              y: 70,
            },
            onscreen: {
              y: "clamp(-280px, -35vw, -180px)",
              rotate: -10,
              transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.8,
              },
            },
          }}
        >
          <div className="flex w-full flex-col items-center">
            <div className="h-6 w-16 rounded-t-2xl bg-black">
              {/* ふたの持ち手 */}
            </div>
            <div className="bg-pod border-b-lid h-6 w-full rounded-t-2xl border-b-4">
              {/* ふた */}
            </div>
          </div>
          <motion.div
            className="h-107.5 w-full"
            variants={{
              offscreen: { opacity: 0 },
              onscreen: { opacity: 1 },
            }}
          >
            {children}
          </motion.div>
        </motion.div>
        <div className="font-yuji text-black-soft pointer-events-none absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-5xl font-normal">
          {label}
        </div>
      </motion.div>
    </div>
  );
}

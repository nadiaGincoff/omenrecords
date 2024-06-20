"use client";

import {motion} from "framer-motion";

export function SubtitleHeader({subtitle}: {subtitle: string}) {
  return (
    <motion.div
      className="mt-5 w-full p-3 md:mt-20 md:w-fit md:bg-white"
      initial={{
        opacity: 0,
        x: -100,
      }}
      viewport={{once: true}}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: {
          duration: 1, // Animation duration
        },
      }}
    >
      <div className="flex max-h-16 items-center justify-center px-10 md:max-h-28">
        <h1 className="text-medium my-2 flex flex-col font-sans text-4xl font-semibold uppercase text-background md:my-12 md:text-8xl lg:text-7xl  xl:text-9xl">
          {subtitle}
          <span className="font-bold text-bg"></span>
        </h1>
      </div>
    </motion.div>
  );
}

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
      <div className="flex max-h-16 items-center justify-center px-10 md:max-h-28 md:border-4 md:border-background">
        <h1 className="text-bold my-24 text-center text-3xl uppercase text-white md:text-5xl md:text-background">
          {subtitle}
          <span className="font-bold text-background">✦</span>
        </h1>
      </div>
    </motion.div>
  );
}

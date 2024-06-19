"use client";
import {useRef} from "react";
import {useScroll, useTransform, motion} from "framer-motion";

import Paragraph from "./paragraph";
import styles from "./style.module.scss";

export default function Index() {
  const container = useRef(null);
  const {scrollYProgress} = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

  return (
    <div
      ref={container}
      className="container flex min-h-screen w-full flex-col items-center justify-center gap-10 px-5 md:px-10 lg:px-32 mb-[30vh]"
    >
      <Paragraph />
      <motion.div className={styles.circleContainer} style={{height}}>
        <div className={styles.circle} />
      </motion.div>
    </div>
  );
}

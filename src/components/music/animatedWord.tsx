import type {MotionValue} from "framer-motion";

import {motion, useTransform} from "framer-motion";

import styles from "../../app/page.module.scss";

export default function AnimatedWord({
  word,
  scrollYProgress,
}: {
  word: string;
  scrollYProgress: MotionValue<number>;
}) {
  return (
    <p className={styles.body}>
      {word.split("").map((letter, i) => {
        const y = useTransform(scrollYProgress, [0, 1], [0, Math.floor(Math.random() * -75) - 25]);

        return (
          <motion.span key={`l_${i}`} style={{top: y}}>
            {letter}
          </motion.span>
        );
      })}
    </p>
  );
}

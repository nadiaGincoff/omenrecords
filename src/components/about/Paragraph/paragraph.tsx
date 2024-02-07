import {motion, useScroll, useTransform} from "framer-motion";
import React, {useRef} from "react";

import about from "@/data/about.json";

import styles from "./style.module.scss";

interface WordProps {
  children: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  progress: any;
  range: number[];
}

// eslint-disable-next-line react/function-component-definition
const Word: React.FC<WordProps> = ({children, progress, range}) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className={styles.word}>
      <span className={styles.shadow}>{children}</span>
      <motion.span style={{opacity}}>{children}</motion.span>
    </span>
  );
};
// eslint-disable-next-line @typescript-eslint/no-unused-vars, react/function-component-definition
const Paragraph: React.FC = () => {
  const paragraph = about.paragraph;

  const container = useRef<HTMLParagraphElement>(null);
  const {scrollYProgress} = useScroll({
    target: container,
    offset: ["start 0.3", "start 0.07"],
  });

  const words = paragraph.split(" ");

  return (
    <p ref={container} className={styles.paragraph}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;

        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </p>
  );
};

export default Paragraph;

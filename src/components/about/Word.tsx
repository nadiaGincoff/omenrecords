import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';
import styles from './style.module.scss';
import about from '@/data/about.json';

interface WordProps {
  children: string;
  progress: any;
  range: number[];
}

const Word: React.FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className={styles.word}>
      <span className={styles.shadow}>{children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
};

const Paragraph: React.FC = () => {
  const paragraph = about.paragraph;

  const container = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start 0.3', 'start 0.07'],
  });

  const words = paragraph.split(' ');

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
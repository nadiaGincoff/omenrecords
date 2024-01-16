"use client";
/* eslint-disable react/function-component-definition */
import type {Song} from "@/types";

import {useRef} from "react";
import Link from "next/link";
import {motion, useScroll, useTransform} from "framer-motion";

import styles from "../../app/page.module.scss";

import AnimatedWord from "./animatedWord";

interface ImageWithDescriptionProps {
  song: Song;
}

const ImageWithDescription: React.FC<ImageWithDescriptionProps> = ({
  song,
}: ImageWithDescriptionProps) => {
  const container = useRef(null);

  const {scrollYProgress} = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const sm = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const md = useTransform(scrollYProgress, [0, 1], [0, -250]);
  const lg = useTransform(scrollYProgress, [0, 1], [0, -350]);

  const images = [
    {
      src: song.image,
      y: 0,
    },
    {
      src: song.image,
      y: lg,
    },
    {
      src: song.image,
      y: md,
    },
  ];

  return (
    <div ref={container} className={styles.container}>
      <div className={styles.images}>
        {images.map(({src, y}, i) => {
          return (
            <motion.div key={`i_${i}`} className={styles.imageContainer} style={{y}}>
              <img alt={src} src={src} />
            </motion.div>
          );
        })}
      </div>
      <div className={`${styles.body} flex flex-col justify-center text-left sm:w-full md:w-1/2`}>
        <motion.h1 style={{y: sm}}>{song.artist}</motion.h1>
        <AnimatedWord scrollYProgress={scrollYProgress} word={song.name} />
        <motion.h1 style={{y: sm}}>Buy / Stream</motion.h1>
      </div>
    </div>
  );
};

export default ImageWithDescription;

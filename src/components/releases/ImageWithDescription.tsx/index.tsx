"use client";

import type {Release} from "@/types";

import Image from "next/image";
import {motion, useScroll, useTransform} from "framer-motion";
import {useRef} from "react";

import styles from "./style.module.scss";
interface ImageWithDescriptionProps {
  release: Release;
}

export default function ImageWithDescription({release}: ImageWithDescriptionProps) {
  const container = useRef(null);

  const {scrollYProgress} = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const lg = useTransform(scrollYProgress, [0, 1], [0, -250]);

  const images = [
    {
      src: release.imageSrc,
      y: 0,
    },
    {
      src: release.imageTwoSrc,
      y: lg,
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <h1>{release.songName}</h1>
        <h1>{release.artistName}</h1>

        <div className={styles.word}>
          <p>
            {release.description.split("").map((letter, i) => {
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const y = useTransform(
                scrollYProgress,
                [0, 1],
                [0, Math.floor(Math.random() * -75) - 25],
              );

              return (
                <motion.span key={`l_${i}`} style={{top: y}}>
                  {letter}
                </motion.span>
              );
            })}
          </p>
        </div>
      </div>

      <div className={styles.images}>
        {images.map(({src, y}, i) => {
          return (
            <motion.div key={`i_${i}`} className={styles.imageContainer} style={{y}}>
              <Image fill alt="image" className="border border-white" src={src} />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

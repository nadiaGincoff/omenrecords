"use client";

import Image from "next/image";
import {motion, useScroll, useTransform} from "framer-motion";
import {useRef} from "react";

import Picture1 from "../../../../public/medias/1.png";
import Picture2 from "../../../../public/medias/2.png";
import Picture3 from "../../../../public/medias/3.png";

import styles from "./style.module.scss";

const word = "with framer-motion";

export default function ImageWithDescription({release}) {
  const container = useRef(null);

  const {scrollYProgress} = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const sm = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const md = useTransform(scrollYProgress, [0, 1], [0, -150]);
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
              <Image fill alt="image" className="border border-2 border-white" src={src} />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

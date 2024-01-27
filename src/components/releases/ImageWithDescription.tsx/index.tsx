"use client";
import {useRef} from "react";
import { CldImage } from 'next-cloudinary';
import {motion, useScroll, useTransform} from "framer-motion";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import type {Release} from "@/types";

import styles from "./style.module.scss";
interface ImageWithDescriptionProps {
  release: Release;
}

function SoundcloudEmberPlayer({soundcloudId}: {soundcloudId: string}) {
  return (
    <div className="py-10">
      <iframe 
        title={soundcloudId}
        id="soundcloud"
        height="166" 
        width="100%"
        className="soundcloud"
        src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${soundcloudId}&amp;color=f9ac45ff&show_artwork=false&single_active=true&show_playcount=false`} 
      >
      </iframe>
    </div>
  )
}

export default function ImageWithDescription({release}: ImageWithDescriptionProps) {
  const container = useRef(null);

  const {scrollYProgress} = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const lg = useTransform(scrollYProgress, [0, 1], [0, 350]);

  const images = [
    {
      src: release.imageSrc,
      y: 0,
    },
    {
      src: release.imageSrc,
      y: lg,
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <h1>{release.songName}</h1>
        <div>
          <h2>
            {release.artistName.split("").map((letter, i) => {
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const y = useTransform(
                scrollYProgress,
                [0, 1],
                [0, Math.floor(Math.random() * -15) - 10],
              );

              return (
                <motion.span key={`l_${i}`} style={{top: y}}>
                  {letter}
                </motion.span>
              );
            })}
          </h2>
        </div>
        <SoundcloudEmberPlayer soundcloudId={release.soundcloudId} />
      </div>

      <div className={styles.images}>
        {images.map(({src, y}, i) => {
          return (
            <motion.div key={`i_${i}`} className={styles.imageContainer} style={{y}}>
              <CldImage
                priority
                alt="release image"
                className="border border-white"
                height="600"
                sizes="100vw"
                src={src}
                width="960"
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

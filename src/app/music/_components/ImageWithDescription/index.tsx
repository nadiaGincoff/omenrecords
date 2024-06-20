"use client";
import type {Release} from "@/types";

import Link from "next/link";
import {useRef} from "react";
import {CldImage} from "next-cloudinary";
import {motion, useScroll, useTransform} from "framer-motion";

import styles from "./style.module.scss";
interface ImageWithDescriptionProps {
  release: Release;
}

function SoundcloudEmberPlayer({soundcloudId}: {soundcloudId: string}) {
  return (
    <div className="py-10">
      <iframe
        className="soundcloud"
        height="100"
        id="soundcloud"
        src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${soundcloudId}&amp;color=4d7c0f&show_artwork=false&single_active=true&show_playcount=false&show_user=false`}
        title={soundcloudId}
        width="100%"
      />
    </div>
  );
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
    <motion.div
      className={styles.container}
      initial={{
        opacity: 0,
        // if odd index card,slide from right instead of left
        x: -50,
      }}
      viewport={{once: true}}
      whileInView={{
        opacity: 1,
        x: 0, // Slide in to its original position
        transition: {
          duration: 1, // Animation duration
        },
      }}
    >
      <div className={styles.body}>
        <h1>{release.songName}</h1>
        <div>
          <div>
            <h2>
              {release.artistName.split("").map((letter, i) => {
                // eslint-disable-next-line react-hooks/rules-of-hooks
                const y = useTransform(
                  scrollYProgress,
                  [0, 1],
                  [0, Math.floor(Math.random() * -10) - 10],
                );

                return (
                  <motion.span key={`l_${i}`} className="text-lime-100" style={{top: y}}>
                    {letter}
                  </motion.span>
                );
              })}
            </h2>
          </div>
        </div>
        <Link href={release.hypedditUrl}>
          <h3 className="transform transition-transform hover:translate-x-1 hover:text-red-700">
            Buy / Stream
          </h3>
        </Link>
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
    </motion.div>
  );
}

"use client";
import type {Release} from "@/types";

import Link from "next/link";
import {CldImage} from "next-cloudinary";
import {motion} from "framer-motion";

interface ArtistImageWithNameProps {
  release: Release;
  index: number;
}

export default function ArtworkWithName({release, index}: ArtistImageWithNameProps) {
  return (
    <Link
      className="group relative inline-block w-full cursor-pointer  p-5 transition-all md:w-1/4 md:p-0"
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      href={`music/${release.id}`}
    >
      <motion.div
        className="relative h-full"
        initial={{
          opacity: 0,
          y: index % 2 === 0 ? 50 : -50,
        }}
        viewport={{once: true}}
        whileInView={{
          opacity: 1,
          y: 0, // Slide in to its original position
          transition: {
            duration: 1, // Animation duration
          },
        }}
      >
        <CldImage
          alt={release.imageSrc || ""}
          className="contrast-105 h-full w-full object-cover transition-opacity duration-500 ease-in-out"
          height="500"
          src={release.imageSrc || ""}
          width="500"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background opacity-90 transition-opacity duration-500 md:opacity-0 md:group-hover:opacity-100" />
        <div className="absolute inset-0 flex items-end justify-center text-white opacity-100 transition-opacity duration-500 sm:pb-0 md:pb-4 md:opacity-0 md:group-hover:opacity-100">
          <p className="flex flex-col p-5 text-center text-2xl font-thin uppercase md:text-2xl">
            <span className="uppercase">{release.songName}</span>
            <span className="text-sm italic"> by </span>
            <span className="uppercase">{release.artistName}</span>
          </p>
        </div>
      </motion.div>
    </Link>
  );
}

"use client";
import type {Artist} from "@/types";

import Link from "next/link";
import {CldImage} from "next-cloudinary";
import {motion} from "framer-motion";

interface ArtistImageWithNameProps {
  artist: Artist;
  index: number;
}

export default function ArtistImageWithName({artist, index}: ArtistImageWithNameProps) {
  return (
    <Link
      className="group relative inline-block w-full cursor-pointer p-5 transition-all md:w-1/4 md:p-0"
      href={`artists/${artist.name}`}
    >
      <motion.div
        className="relative h-full"
        initial={{
          opacity: 0,
          // if odd index card,slide from right instead of left
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
          alt={artist.name || ""}
          className="h-full w-full object-cover transition duration-1000 ease-in-out md:aspect-[500/500]"
          height="500"
          src={artist.imageSrc || ""}
          width="500"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background opacity-100 transition-opacity duration-500 md:opacity-0 md:group-hover:opacity-100" />
        <div className="absolute inset-0 flex items-end justify-center pb-4 text-white opacity-100 transition-opacity duration-500 md:opacity-0 md:group-hover:opacity-100">
          <p className="flex flex-col p-2 text-center text-2xl font-thin uppercase md:text-2xl">
            <span className="uppercase">{artist.name}</span>
          </p>
        </div>
      </motion.div>
    </Link>
  );
}

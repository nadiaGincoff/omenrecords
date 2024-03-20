"use client";
import type {Artist} from "@/types";

import {CldImage} from "next-cloudinary";
import {motion} from "framer-motion";

import {useMediaQuery} from "@/hooks/useMediaQuery";
import SocialMediaButton from "@/components/socialMediaButton";

export default function Artist({artist}: {artist: Artist}) {
  const isSmall = useMediaQuery("(max-width: 768px)");
  const socialMediaLinks = [
    {id: 1, href: artist.soundcloudUrl || ""},
    {id: 2, href: artist.instagramUrl || ""},
    {id: 3, href: artist.spotifyUrl || ""},
  ];

  return (
    <motion.section
      className="flex min-h-screen flex-col items-center justify-between gap-5 md:flex-row md:px-40"
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
      <aside className="relative w-full md:w-1/2">
        <CldImage
          alt={artist.name || ""}
          className="artistImage aspect-[700/500] max-w-full object-cover transition duration-500 ease-in-out"
          height="500"
          src={artist.imageSrc || ""}
          width="600"
        />
        {isSmall ? (
          <>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background opacity-100" />
            <div className="absolute inset-x-0 bottom-0 py-1 text-center text-white">
              <p className="flex flex-col text-center text-4xl font-thin uppercase md:text-5xl">
                {artist.name}
              </p>
            </div>
          </>
        ) : null}
      </aside>
      <aside className="flex flex-col gap-7 p-5 md:w-1/2">
        {!isSmall ? (
          <p className="f text-left text-4xl uppercase md:text-8xl md:font-bold">{artist.name}</p>
        ) : null}
        <h2 className="font-thin text-white">{artist.biography}</h2>
        <div className="flex flex-row gap-5">
          {socialMediaLinks.map((link, index) => {
            return (
              <SocialMediaButton
                key={index}
                color="white"
                href={link.href}
                id={link.id}
                size={30}
              />
            );
          })}
        </div>
      </aside>
    </motion.section>
  );
}

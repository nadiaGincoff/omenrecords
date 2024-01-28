'use client'

import React from 'react';
import about from '@/data/about.json';
import { CldImage } from "next-cloudinary";

export default function TitleAndDescription() {
  return (
    <section className='text-center flex min-h-screen items-center justify-center relative'>
      <div className='absolute lg:top-1/3 h-100 flex flex-col gap-7 w-full items-center px-5'>
        <h1 className='text-[10vw] leading-10 font-bold md:text-9xl w-2/4 uppercase'>{about.name}.</h1>
        <h2 className='text-1xl md:text-3xl uppercase box-sizing'>{about.description}</h2>
      </div>
      <CldImage
        priority
        alt="release image"
        height="300"
        src={about.backgroundImagePath}
        width="1240"
        opacity={70}
      />
    </section>
  );
}
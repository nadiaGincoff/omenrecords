import React from 'react';
import about from '@/data/about.json';
import { CldImage } from "next-cloudinary";

export default function Contact() {
  return (
    <section className='min-h-screen'>
      <p className='flex flex-col w-1/3'>
        <span className='text-left'>Let's work</span>
        <span className='text-right'>together</span>
      </p>      
    </section>
  );
}
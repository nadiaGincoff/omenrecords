"use client";

import { useEffect, useRef, useState} from 'react';
import Paragraph from "@/components/about/Paragraph";
import TitleAndDescription from "@/components/about/TitleWithDescription";
import Contact from "@/components/about/Contact";
import styles from './page.module.css'

export default function Home() {

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  const container = useRef<HTMLDivElement>(null);
  const stickyMask = useRef<HTMLDivElement>(null);

  const initialMaskSize = 0.8;
  const targetMaskSize = 30;

  useEffect( () => {
    requestAnimationFrame(animate)
  }, [])

  const animate = () => {
    const maskSizeProgress = targetMaskSize * getScrollProgress();
    if (stickyMask.current) {
      stickyMask.current.style.webkitMaskSize = (initialMaskSize + maskSizeProgress) * 100 + "%";
      requestAnimationFrame(animate);
    }
  };

  let easedScrollProgress = 0;
  const easing = 0.1;

  const getScrollProgress = () => {
    if (stickyMask.current && container.current) {
      const scrollProgress = stickyMask.current.offsetTop / (container.current.getBoundingClientRect().height - window.innerHeight);
      const delta = scrollProgress - easedScrollProgress;
      easedScrollProgress += delta * easing;
      return easedScrollProgress;
    }
    return 0;
  };

  return (
    <section>
      <main className={styles.main}>
        <div ref={container} className={styles.container}>
          <div ref={stickyMask} className={styles.stickyMask}>
            <video autoPlay muted loop>
              <source src="/assets/rollingover.mp4" type="video/mp4"/>
            </video>
          </div>
        </div>
      </main>
      <Paragraph />
      <div id="contact" className="w-full h-full"> 
        <Contact />
      </div>
    </section>
   
  )
}
"use client";

import React, {useEffect} from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {CldImage} from "next-cloudinary";
import {motion} from "framer-motion";

import about from "@/data/about.json";

import styles from "./style.module.css";

function BackgroundImage() {
  return (
    <div className={styles.backgroundVideo}>
      <CldImage
        priority
        alt="background image"
        className="sticky top-0 h-screen w-full object-cover"
        height="100"
        src={about.backgroundImagePath}
        width="2048"
      />
    </div>
  );
}

export default function TitleAndDescription() {
  useEffect(() => {
    if (!CSS.supports("animation-timeline: scroll()")) {
      gsap.registerPlugin(ScrollTrigger);
      gsap.to("header", {
        scale: 0.8,
        ease: "power1.in",
        scrollTrigger: {
          trigger: "header",
          scrub: true,
          start: "center top",
          end: "bottom top",
        },
      });
      gsap.set("header", {"--opacity": 1});
      gsap.to("header", {
        "--opacity": 0,
        ease: "power1.in",
        scrollTrigger: {
          trigger: "header",
          scrub: true,
          start: "center bottom",
          end: "bottom bottom",
        },
      });
    }
  }, []);

  return (
    <div className={styles.titleWithDescriptionContainer}>
      <BackgroundImage />
      {/* <section> */}
        {/* <motion.h1
          animate={{opacity: 1, y: 0}}
          className="flex flex-col text-center text-4xl font-semibold uppercase md:text-8xl lg:text-7xl xl:text-9xl"
          initial={{opacity: 0, y: -100}}
          transition={{duration: 0.3}}
        >
          <span>omen </span>
          <span>records.</span>
        </motion.h1>
        <motion.h2
          animate={{opacity: 1, y: 0}}
          className="text-1xl box-sizing px-5 text-center font-thin uppercase md:text-3xl"
          initial={{opacity: 0, y: -100}}
          transition={{duration: 0.5}}
        >
          {about.description}
        </motion.h2>
      </section> */}
    </div>
  );
}

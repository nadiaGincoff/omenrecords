"use client";
import {useRef, useEffect} from "react";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import gsap from "gsap";

import styles from "../../app/page.module.scss";

const phrase =
  "Energetic beats, pulsating basslines, and intricate rhythms define the drum and bass genre. Characterized by fast-paced breakbeats, deep bass, and atmospheric elements, it creates a dynamic and immersive musical experience.";

export default function AnimatedParagraph() {
  const refs = useRef([]);
  const body = useRef(null);
  const container = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    createAnimation();
  }, []);

  const createAnimation = () => {
    gsap.to(refs.current, {
      scrollTrigger: {
        trigger: container.current,
        scrub: true,
        start: `top`,
        end: `+=${window.innerHeight / 1.5}`,
      },
      opacity: 1,
      ease: "none",
      stagger: 0.1,
    });
  };

  const splitWords = (phrase) => {
    const body = [];

    phrase.split(" ").forEach((word, i) => {
      const letters = splitLetters(word);

      body.push(<p key={word + "_" + i}>{letters}</p>);
    });

    return body;
  };

  const splitLetters = (word) => {
    const letters = [];

    word.split("").forEach((letter, i) => {
      letters.push(
        <span
          key={letter + "_" + i}
          ref={(el) => {
            refs.current.push(el);
          }}
        >
          {letter}
        </span>,
      );
    });

    return letters;
  };

  return (
    <main ref={container} className={styles.paragraphContainer}>
      <div ref={body} className={styles.paragraph}>
        {splitWords(phrase)}
      </div>
    </main>
  );
}

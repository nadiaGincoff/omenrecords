"use client";
import Lenis from "@studio-freight/lenis";
import {useEffect} from "react";

import AnimatedParagraph from "@/components/music/animatedParagraph";
import ListOfSongs from "@/components/music/songs";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main>
      {/* <AnimatedParagraph /> */}
      <ListOfSongs />
    </main>
  );
}

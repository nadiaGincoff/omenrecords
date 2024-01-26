"use client";
import {useEffect} from "react";

import ListOfSongs from "@/components/releases/";

import AnimatedParagraph from "@/components/releases/animatedParagraph";

export default function Home() {
  return (
    <main>
      <ListOfSongs />
      {/* <AnimatedParagraph /> */}
    </main>
  );
}

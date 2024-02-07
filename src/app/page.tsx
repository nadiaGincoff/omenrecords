"use client";

import Paragraph from "@/components/about/Paragraph";
import TitleAndDescription from "@/components/about/TitleWithDescription";
import Contact from "@/components/about/Contact";

export default function Home() {
  return (
    <main className="w-full flex-col">
      <TitleAndDescription />
      <Paragraph />
      <Contact />
    </main>
  );
}

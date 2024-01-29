import React from "react";
import {CldImage} from "next-cloudinary";

import about from "@/data/about.json";

export default function Contact() {
  return (
    <section className="min-h-screen">
      <p className="flex w-1/3 flex-col">
        <span className="text-left">Lets work</span>
        <span className="text-right">together</span>
      </p>
    </section>
  );
}

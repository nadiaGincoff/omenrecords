import React from "react";
import {motion} from "framer-motion";

import about from "@/data/about.json";
import {socialMediaLinks} from "@/data/links";
import SocialMediaButton from "@/components/socialMediaButton";

import ContactForm from "./contactForm";

export default function Contact() {
  return (
    <section className="lg:px-15 flex min-h-screen flex-col items-center justify-center gap-20 bg-white px-5 py-10 uppercase text-background md:px-10 md:py-20">
      <div className="md:w-3/4">
        <p className="text-medium my-2 flex flex-col font-sans text-4xl font-semibold uppercase text-background md:my-12 md:text-8xl lg:text-7xl  xl:text-9xl">
          <motion.span className="text-left">{`Let's work`}</motion.span>
          <span className="text-right">together</span>
        </p>
        <div className="flex flex-col  gap-5 md:flex-row md:gap-10">
          <aside className="flex w-full flex-col gap-4 md:w-1/2 md:gap-7">
            <p className="text-1xl box-sizing font-thin uppercase lg:text-2xl">
              {about.contactInformationText}
            </p>
            <p className="text-1xl box-sizing font-thin uppercase lg:text-2xl">
              Say hi: {about.email}
            </p>
            <div className="flex flex-row gap-3">
              {socialMediaLinks.map((link, i) => {
                const {id, href} = link;

                return (
                  <motion.button
                    key={`f_${i}`}
                    animate="enter"
                    custom={i}
                    exit="exit"
                    initial="initial"
                  >
                    <SocialMediaButton href={href} id={id} size={25} />
                  </motion.button>
                );
              })}
            </div>
          </aside>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

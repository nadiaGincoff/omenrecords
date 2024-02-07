"use client";
import {useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import {useMediaQuery} from "@/hooks/useMediaQuery";

import Button from "./Button";
import Nav from "./Nav";
import styles from "./style.module.scss";

function generateMenuVariants(isSmall: boolean) {
  const variants = {
    open: {},
    closed: {
      width: "100px",
      height: "40px",
      top: "0px",
      right: "0px",
      transition: {duration: 0.2, delay: 0.35, type: "tween", ease: [0.76, 0, 0.24, 1]},
    },
  };

  if (isSmall) {
    variants.open = {
      width: "320px",
      height: "450px",
      top: "-25px",
      right: "-25px",
      transition: {duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1]},
    };
  } else {
    variants.open = {
      width: "480px",
      height: "650px",
      top: "-25px",
      right: "-25px",
      transition: {duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1]},
    };
  }

  return variants;
}

export default function Index() {
  const [isActive, setIsActive] = useState(false);
  const isSmall = useMediaQuery("(max-width: 768px)");
  const variants = generateMenuVariants(isSmall);

  return (
    <div className="fixed z-10 h-20 w-full md:h-32">
      <div className={styles.logo}>
        <Link className="flex items-center space-x-3 rtl:space-x-reverse" href="/">
          <Image
            alt="logo"
            height={isSmall ? 45 : 100}
            src="/assets/logo.png"
            width={isSmall ? 45 : 100}
          />
        </Link>
      </div>
      <div className={styles.header}>
        <motion.div
          animate={isActive ? "open" : "closed"}
          className={styles.menu}
          initial="closed"
          variants={variants}
        >
          <AnimatePresence>{isActive ? <Nav setIsActive={setIsActive} /> : null}</AnimatePresence>
        </motion.div>
        <Button
          isActive={isActive}
          toggleMenu={() => {
            setIsActive(!isActive);
          }}
        />
      </div>
    </div>
  );
}

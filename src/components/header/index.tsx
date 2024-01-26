"use client";
import {useState} from "react";
import {AnimatePresence, motion} from "framer-motion";

import Button from "./Button";
import styles from "./style.module.scss";
import Nav from "./Nav";

const menu = {
  open: {
    width: "480px",
    height: "650px",
    top: "-25px",
    right: "-25px",
    transition: {duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1]},
  },
  closed: {
    width: "100px",
    height: "40px",
    top: "0px",
    right: "0px",
    transition: {duration: 0.75, delay: 0.35, type: "tween", ease: [0.76, 0, 0.24, 1]},
  },
};

export default function Index() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <div className={styles.logo}>
        <a className="flex items-center space-x-3 rtl:space-x-reverse" href="https://flowbite.com/">
          {/* <img
            alt="Flowbite Logo"
            className="h-8"
            src="https://flowbite.com/docs/images/logo.svg"
          /> */}
          <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
            ømenrecords.
          </span>
        </a>
      </div>
      <div className={styles.header}>
        <motion.div
          animate={isActive ? "open" : "closed"}
          className={styles.menu}
          initial="closed"
          variants={menu}
        >
          <AnimatePresence>{isActive ? <Nav /> : null}</AnimatePresence>
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

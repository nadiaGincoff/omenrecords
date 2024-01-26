import {motion} from "framer-motion";
import Link from "next/link";

import styles from "./style.module.scss";
import {links, footerLinks} from "./data";
import {perspective, slideIn} from "./animation";
import SocialMediaButton from "./socialMediaButton";

export default function index() {
  return (
    <div className={styles.nav}>
      <div className={styles.body}>
        {links.map((link, i) => {
          const {title, href} = link;

          return (
            <div key={`b_${i}`} className={styles.linkContainer}>
              <motion.div
                animate="enter"
                custom={i}
                exit="exit"
                initial="initial"
                variants={perspective}
              >
                <Link href={href}>{title}</Link>
              </motion.div>
            </div>
          );
        })}
      </div>

      <motion.div className={styles.footer}>
        {footerLinks.map((link, i) => {
          const {id, href} = link;

          return (
            <motion.a
              key={`f_${i}`}
              animate="enter"
              custom={i}
              exit="exit"
              initial="initial"
              variants={slideIn}
            >
              <SocialMediaButton href={href} id={id} size={30} />
            </motion.a>
          );
        })}
      </motion.div>
    </div>
  );
}

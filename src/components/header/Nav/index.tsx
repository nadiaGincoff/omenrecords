import {motion} from "framer-motion";
import Link from "next/link";

import {navBarLinks, socialMediaLinks} from "@/data/links";
import SocialMediaButton from "@/components/common/socialMediaButton";

import styles from "./style.module.scss";
import {perspective, slideIn} from "./animation";

interface NavProps {
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const Nav: React.FC<NavProps> = ({setIsActive}) => {
  return (
    <div className={styles.nav}>
      <div className={styles.body}>
        {navBarLinks.map((link, i) => {
          const {title, href} = link;

          return (
            <div key={`b_${i}`} className={styles.linkContainer}>
              <motion.button
                animate="enter"
                className="uppercase"
                custom={i}
                exit="exit"
                initial="initial"
                variants={perspective}
              >
                <Link href={href} onClick={() => setIsActive(false)}>
                  {title}
                </Link>
              </motion.button>
            </div>
          );
        })}
      </div>

      <motion.div className={styles.footer}>
        {socialMediaLinks.map((link, i) => {
          const {id, href} = link;

          return (
            <motion.button
              key={`f_${i}`}
              animate="enter"
              custom={i}
              exit="exit"
              initial="initial"
              variants={slideIn}
            >
              <SocialMediaButton href={href} id={id} size={30} />
            </motion.button>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Nav;

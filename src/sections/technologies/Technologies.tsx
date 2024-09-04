import "./technologies.scss";
import {
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiSass,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiJest,
  SiFigma,
} from "react-icons/si";

import { motion } from "framer-motion";

export default function Technologies() {
  return (
    <>
      <section className="technologies-container">
        <h1>Tecnologias</h1>

        <div className="technologies-icons">
          <motion.div
            className="icon-container"
            animate={{ y: [10, -10] }}
            initial={{ y: -10 }}
            transition={{
              ease: "easeInOut",
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <SiReact color="#61dbfb" size={90} />
            <p>Reactjs</p>
          </motion.div>
          <motion.div
            className="icon-container"
            animate={{ y: [10, -10] }}
            initial={{ y: -10 }}
            transition={{
              ease: "easeInOut",
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <SiTypescript color="#007acc" size={90} />
            <p>Typescript</p>
          </motion.div>
          <motion.div
            className="icon-container"
            animate={{ y: [10, -10] }}
            initial={{ y: -10 }}
            transition={{
              ease: "easeInOut",
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <SiTailwindcss color="#38BDF8" size={90} />
            <p>Tailwindcss</p>
          </motion.div>
          <motion.div
            className="icon-container"
            animate={{ y: [10, -10] }}
            initial={{ y: -10 }}
            transition={{
              ease: "easeInOut",
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <SiSass color="#c69" size={90} />
            <p>Sass</p>
          </motion.div>
          <motion.div
            className="icon-container"
            animate={{ y: [10, -10] }}
            initial={{ y: -10 }}
            transition={{
              ease: "easeInOut",
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <SiNodedotjs color="#3C873A" size={90} />
            <p>Nodejs</p>
          </motion.div>
          <motion.div
            className="icon-container"
            animate={{ y: [10, -10] }}
            initial={{ y: -10 }}
            transition={{
              ease: "easeInOut",
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <SiExpress color="#3C873A" size={90} />
            <p>Express</p>
          </motion.div>
          <motion.div
            className="icon-container"
            animate={{ y: [10, -10] }}
            initial={{ y: -10 }}
            transition={{
              ease: "easeInOut",
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <SiPostgresql color="#008bb9" size={90} />
            <p>Postgresql</p>
          </motion.div>
          <motion.div
            className="icon-container"
            animate={{ y: [10, -10] }}
            initial={{ y: -10 }}
            transition={{
              ease: "easeInOut",
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <SiDocker color="#1D63ED" size={90} />
            <p>Docker</p>
          </motion.div>
          <motion.div
            className="icon-container"
            animate={{ y: [10, -10] }}
            initial={{ y: -10 }}
            transition={{
              ease: "easeInOut",
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <SiGit color="#F1502F" size={90} />
            <p>Git</p>
          </motion.div>
          <motion.div
            className="icon-container"
            animate={{ y: [10, -10] }}
            initial={{ y: -10 }}
            transition={{
              ease: "easeInOut",
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <SiJest color="#C63D14" size={90} />
            <p>Jest</p>
          </motion.div>
          <motion.div
            className="icon-container"
            animate={{ y: [10, -10] }}
            initial={{ y: -10 }}
            transition={{
              ease: "easeInOut",
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <SiFigma color="#ffffff" size={90} />
            <p>Figma</p>
          </motion.div>
        </div>
      </section>
    </>
  );
}

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
      <section
        id="tecnologies"
        className="bg-dark-purple-700 w-screen py-20 px-4 flex flex-col items-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-16">Tecnologias</h1>

        <div className="flex flex-wrap justify-center gap-8 md:gap-10 max-w-7xl">
          <motion.div
            className="w-24 md:w-32 flex flex-col items-center justify-center gap-4 p-6 border-2 border-transparent rounded-lg hover:border-cyan-accent transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            animate={{ y: [10, -10] }}
            initial={{ y: -10 }}
            transition={{
              ease: "easeInOut",
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <SiReact color="#61dbfb" size={80} className="responsive-icon" />
            <p className="text-center text-sm">Reactjs</p>
          </motion.div>
          <motion.div
            className="w-24 md:w-32 flex flex-col items-center justify-center gap-4 p-6 border-2 border-transparent rounded-lg hover:border-cyan-accent transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            animate={{ y: [10, -10] }}
            initial={{ y: -10 }}
            transition={{
              ease: "easeInOut",
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <SiTypescript
              color="#007acc"
              size={80}
              className="responsive-icon"
            />
            <p className="text-center text-sm">Typescript</p>
          </motion.div>
          <motion.div
            className="w-24 md:w-32 flex flex-col items-center justify-center gap-4 p-6 border-2 border-transparent rounded-lg hover:border-cyan-accent transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            animate={{ y: [10, -10] }}
            initial={{ y: -10 }}
            transition={{
              ease: "easeInOut",
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <SiTailwindcss
              color="#38BDF8"
              size={80}
              className="responsive-icon"
            />
            <p className="text-center text-sm">Tailwindcss</p>
          </motion.div>
          <motion.div
            className="w-24 md:w-32 flex flex-col items-center justify-center gap-4 p-6 border-2 border-transparent rounded-lg hover:border-cyan-accent transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            animate={{ y: [10, -10] }}
            initial={{ y: -10 }}
            transition={{
              ease: "easeInOut",
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <SiSass color="#c69" size={80} className="responsive-icon" />
            <p className="text-center text-sm">Sass</p>
          </motion.div>
          <motion.div
            className="w-24 md:w-32 flex flex-col items-center justify-center gap-4 p-6 border-2 border-transparent rounded-lg hover:border-cyan-accent transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            animate={{ y: [10, -10] }}
            initial={{ y: -10 }}
            transition={{
              ease: "easeInOut",
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <SiNodedotjs
              color="#3C873A"
              size={80}
              className="responsive-icon"
            />
            <p className="text-center text-sm">Nodejs</p>
          </motion.div>
          <motion.div
            className="w-24 md:w-32 flex flex-col items-center justify-center gap-4 p-6 border-2 border-transparent rounded-lg hover:border-cyan-accent transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            animate={{ y: [10, -10] }}
            initial={{ y: -10 }}
            transition={{
              ease: "easeInOut",
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <SiExpress color="#3C873A" size={80} className="responsive-icon" />
            <p className="text-center text-sm">Express</p>
          </motion.div>
          <motion.div
            className="w-24 md:w-32 flex flex-col items-center justify-center gap-4 p-6 border-2 border-transparent rounded-lg hover:border-cyan-accent transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            animate={{ y: [10, -10] }}
            initial={{ y: -10 }}
            transition={{
              ease: "easeInOut",
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <SiPostgresql
              color="#008bb9"
              size={80}
              className="responsive-icon"
            />
            <p className="text-center text-sm">Postgresql</p>
          </motion.div>
          <motion.div
            className="w-24 md:w-32 flex flex-col items-center justify-center gap-4 p-6 border-2 border-transparent rounded-lg hover:border-cyan-accent transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            animate={{ y: [10, -10] }}
            initial={{ y: -10 }}
            transition={{
              ease: "easeInOut",
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <SiDocker color="#1D63ED" size={80} className="responsive-icon" />
            <p className="text-center text-sm">Docker</p>
          </motion.div>
          <motion.div
            className="w-24 md:w-32 flex flex-col items-center justify-center gap-4 p-6 border-2 border-transparent rounded-lg hover:border-cyan-accent transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            animate={{ y: [10, -10] }}
            initial={{ y: -10 }}
            transition={{
              ease: "easeInOut",
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <SiGit color="#F1502F" size={80} className="responsive-icon" />
            <p className="text-center text-sm">Git</p>
          </motion.div>
          <motion.div
            className="w-24 md:w-32 flex flex-col items-center justify-center gap-4 p-6 border-2 border-transparent rounded-lg hover:border-cyan-accent transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            animate={{ y: [10, -10] }}
            initial={{ y: -10 }}
            transition={{
              ease: "easeInOut",
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <SiJest color="#C63D14" size={80} className="responsive-icon" />
            <p className="text-center text-sm">Jest</p>
          </motion.div>
          <motion.div
            className="w-24 md:w-32 flex flex-col items-center justify-center gap-4 p-6 border-2 border-transparent rounded-lg hover:border-cyan-accent transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            animate={{ y: [10, -10] }}
            initial={{ y: -10 }}
            transition={{
              ease: "easeInOut",
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <SiFigma color="#ffffff" size={80} className="responsive-icon" />
            <p className="text-center text-sm">Figma</p>
          </motion.div>
        </div>
      </section>
    </>
  );
}

"use client";
import { GithubIcon, LinkedinIcon } from "lucide-react";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Intro from "./components/sections/Intro";
import Projects from "./components/sections/Projects";
import Link from "next/link";
import Topbar from "./components/Topbar";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <><Topbar/>
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Aside Esquerdo */}
      <motion.aside
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.6 }}
        className="sticky top-0 h-screen pl-4 sm:pl-6 md:pl-10 w-full md:w-12 lg:w-16 xl:w-20 hidden sm:flex flex-col items-center bg-[var(--background)] z-10"
      >
        {/* Links Sociais */}
        <section className="absolute bottom-[58%] translate-y-1/2 flex flex-col items-center text-[var(--slate-light)] gap-4">
          <Link target="_blank" href="https://github.com/GabrielSilveira97">
            <GithubIcon className="links" />
          </Link>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/gabrielsilveiradev/"
          >
            <LinkedinIcon className="links" />
          </Link>
        </section>
        {/* Linha Vertical */}
        <div className="absolute bottom-0 w-[1px] h-2/4 bg-[var(--slate-light)]" />
      </motion.aside>

      {/* Conteúdo Principal */}
      <main className="flex-1 px-6 sm:px-12 lg:px-28 flex flex-col gap-24 sm:gap-32 py-10">
        <Intro />
        <About />
        <Experience />
        <Projects />
      </main>

      {/* Aside Direito */}
      <motion.aside
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.6 }}
        className="sticky top-0 h-screen pr-4 sm:pr-6 md:pr-10 w-full md:w-12 lg:w-16 xl:w-20 hidden sm:flex flex-col items-center bg-[var(--background)] z-10"
      >
        <div className="flex flex-col items-center absolute bottom-[50%]">
          <Link
            href="mailto:ramos.gsrc@gmail.com"
            className="text-sm font-medium text-[var(--slate-light)] mb-4 links"
            style={{
              writingMode: "vertical-lr",
              letterSpacing: "0.1em",
            }}
          >
            ramos.gsrc@gmail.com
          </Link>
        </div>
        {/* Linha Vertical */}
        <div className="absolute bottom-0 w-[1px] h-2/4 bg-[var(--slate-light)]" />
      </motion.aside>
    </div>
    </>
  );
};

export default Home;

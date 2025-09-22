import { motion } from "framer-motion";

const Intro = () => {
  return (
    <motion.section
      id="home"
      className="w-full max-w-4xl justify-center items-center lg:items-start  px-4 sm:px-6 lg:px-0 flex flex-col gap-4 sm:gap-6"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h3
        className="green text-sm sm:text-base"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        Olá, meu nome é
      </motion.h3>

      <motion.h1
        className="text-3xl sm:text-5xl text-center lg:text-start  font-bold text-[var(--slate-light)]"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        Gabriel Silveira.
      </motion.h1>

      <motion.h2
        className="text-xl sm:text-3xl text-center lg:text-start  font-semibold text-[var(--slate)]"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9 }}
      >
        Eu construo coisas pra web.
      </motion.h2>

      <motion.p
        className="text-sm sm:text-base text-center lg:text-start text-[var(--slate-light)] max-w-2xl"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.1 }}
      >
        Sou um desenvolvedor de software especializado em construir (e
        ocasionalmente projetar) experiências digitais excepcionais.
      </motion.p>
    </motion.section>
  );
};

export default Intro;

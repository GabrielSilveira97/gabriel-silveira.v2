import { motion } from "framer-motion";

const Intro = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
        >
            <motion.h3
                className="green"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >
                Olá, meu nome é
            </motion.h3>

            <motion.div
                className="title"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
            >
                Gabriel Silveira.
            </motion.div>

            <motion.h2
                className="sub-title"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9 }}
            >
                Eu construo coisas pra web.
            </motion.h2>

            <motion.p
                className="texts"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.1 }}
            >
                Sou um Desenvolvedor de software especializado em construir (e ocasionalmente projetar) 
                experiências digitais excepcionais.
            </motion.p>
        </motion.div>
    );
};

export default Intro;

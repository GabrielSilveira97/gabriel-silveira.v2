import Image from "next/image"
import { motion } from "framer-motion"

const About = () => {
    return(
        <div>
        <motion.section className="flex items-baseline gap-2" id="about" initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.1 }}>
            <span className="green text-xl">01.</span><h1 className="gray text-xl font-semibold topic flex items-center gap-5"> Sobre mim <div className="h-[0.5px] w-52 bg-[var(--dark-slate)] mx-auto"></div></h1>
        </motion.section>
        <div className=" flex flex-col sm:flex-row gap-7">
            <motion.section className="text-[var(--slate)] about pt-10 " initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.4 }}>
                <p>Sou um desenvolvedor Full Stack com forte base em engenharia de software, especializado em construir soluções escaláveis, seguras e de alta performance. Tenho sólida experiência no desenvolvimento de aplicações web modernas utilizando React, Next.js, Angular e seus respectivos ecossistemas.<br></br>No front-end, aplico boas práticas de design responsivo, acessibilidade e performance com Tailwind CSS, Redux e visualizações interativas com Chart.js.

<br></br>No back-end, atuo com Node.js utilizando os frameworks Express e Fastify, focando na criação e integração de APIs RESTful robustas e eficientes. Tenho domínio de bancos de dados relacionais, como PostgreSQL e MySQL, além de bancos NoSQL como MongoDB e Firebase. Estou constantemente aprimorando minhas soluções com foco em arquitetura limpa, escalabilidade e excelência na experiência do usuário.</p>
            </motion.section>
            <motion.div className="relative div-foto text-center" initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.1 }}>
                <section className="arc rounded transition-all duration-300 hidden sm:block sm:w-[250px]"></section>
                <Image
                    alt="minha foto"
                    src={'/minha-foto.jpg'}
                    width={300}
                    height={50}
                    className="rounded minha-foto hover:filter-none transition-all duration-300 mt-5 sm:w-[900px] sm:h-[280px] "
                />
            </motion.div>            
        </div>
        </div>
    )
}


export default About
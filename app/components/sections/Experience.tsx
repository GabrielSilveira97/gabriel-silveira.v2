import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

const Experience = () => {
    return(
        <div>
        <motion.section className="flex items-baseline gap-2 " id="experience" initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.6 }}>
            <span className="green text-xl">02.</span><h1 className="gray text-xl font-semibold topic flex gap-3 items-center">Minha experiência <div className="h-[0.5px] w-52 bg-[var(--dark-slate)] mx-auto"></div></h1>
        </motion.section>
        <motion.h2 initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.8 }} className="gray about pt-10">Desenvolvedor na <Link href={'https://crosoften.com/'} target="blank" className="green">CrosOften</Link></motion.h2>
        <motion.h3 initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 2 }} className="text-[var(--dark-slate)]">Fevereiro 2025 - Atual</motion.h3>
        <ul className="flex flex-col gap-3 pt-10">
            <motion.li initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 2.2 }}  className="gray flex experience"><ArrowRight className="green arrow pr-2"/>Criação de interfaces web modernas, responsivas e acessíveis utilizando Angular, com estruturação de estilos robusta e modular via SCSS, garantindo manutenção facilitada e design consistente.</motion.li>
            <motion.li initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 2.4 }}  className="gray flex experience"><ArrowRight className="green arrow pr-2"/>Implementação eficiente da comunicação entre front-end e back-end, consumindo APIs RESTful e garantindo a sincronização dos dados, além de otimizar a experiência do usuário por meio de chamadas assíncronas e tratamento de estados.</motion.li>
            <motion.li initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 2.6 }}  className="gray flex experience"><ArrowRight className="green arrow pr-2"/>Criação e manutenção de APIs RESTful escaláveis e seguras utilizando Node.js, com os frameworks Express e Fastify, assegurando alta performance, organização de rotas e integração com bancos de dados para soluções completas.</motion.li>
        </ul>
        <motion.h2 initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.8 }} className="gray about pt-10">Desenvolvedor no <Link href={'https://www.icea.decea.mil.br/'} target="blank" className="green">ICEA (Instituto de Controle do Espaço Aéreo)</Link></motion.h2>
        <motion.h3 initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 2 }} className="text-[var(--dark-slate)]">Agosto 2020 - Agosto 2024</motion.h3>
        <ul className="flex flex-col gap-3 pt-10">
            <motion.li initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 2.2 }}  className="gray flex experience"><ArrowRight className="green arrow pr-2"/>Criei interfaces de usuário intuitivas e dashboards dinâmicos, integrando dados de APIs para visualizações informativas e em tempo real e implementei de soluções que melhoraram a experiência do usuário e a análise de dados críticos.</motion.li>
            <motion.li initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 2.4 }}  className="gray flex experience"><ArrowRight className="green arrow pr-2"/>Gerenciei bancos de dados SQL e NoSQL para armazenamento e recuperação eficientes de informações e desenvolvi testes automatizados para garantir a confiabilidade e a qualidade das aplicações criadas.</motion.li>
            <motion.li initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 2.6 }}  className="gray flex experience"><ArrowRight className="green arrow pr-2"/>Administrei e fiz a manutenção de redes locais, garantindo conectividade e suporte às operações do instituto e resolvi problemas de infraestrutura e otimização de redes para atender às demandas dos sistemas desenvolvidos.</motion.li>
        </ul>
        </div>
    )
}


export default Experience
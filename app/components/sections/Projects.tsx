import { ExternalLink, GithubIcon } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

const Projects = () => {
    return(
        <div>
        <motion.section initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 2.8 }} className="flex items-baseline gap-2" id="projects">
            <span className="green text-xl">03.</span><h1 className="gray text-xl font-semibold topic flex items-center gap-5"> Meus Projetos <div className="h-[0.5px] w-52 bg-[var(--dark-slate)] mx-auto"></div></h1>
        </motion.section>
        <div className="pt-10 relative">
        <motion.img alt="Foto do Projeto" initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 3.4 }} src={"/overview.png"} width={700} height={450} className="project-photo rounded hover:filter-none transition-all duration-300 shadow-md absolute"/>
            <section className="flex flex-col items-end gap-3" >
                <motion.h1 initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 3.2 }} className="green">Projeto</motion.h1>
                <motion.h2 initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 3.4 }} className="text-[var(--slate-light)] projects font-semibold text-xl">Overview Dashboard</motion.h2>
                    <motion.section initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 3.6 }} className="project-desc text-sm rounded shadow-lg p-5   text-end ">
                        <p className="">Desenvolvi um site de dashboard focado na visualização de dados, permitindo o acompanhamento de métricas em tempo real através de gráficos dinâmicos. Utilizando tecnologias como React, TypeScript, e shadcn, o sistema oferece uma interface intuitiva e responsiva para exibição de estatísticas detalhadas.  </p>
                    </motion.section>
                <motion.ul initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 3.8 }} className="text-[var(--slate)] flex gap-3">
                    <li>Next</li>
                    <li>Tailwind</li>
                    <li>shadcn</li>
                    <li>firebase</li>
                </motion.ul>
                <motion.ul initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 4 }} className="gray flex gap-3">
                    <li ><Link href={"https://github.com/Bielzera97/dashboard"} target="blank"><GithubIcon/></Link></li>
                    <li ><Link href={"https://overview-dashboard-ashen.vercel.app/"} target="blank"><ExternalLink/></Link></li>
                </motion.ul>
            </section>
        </div>
        <div className="pt-36 relative">
            <section className="flex flex-col items-start gap-3" >
                <motion.h1 initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 3.2 }} className="green">Projeto</motion.h1>
                <motion.h2 initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 3.4 }} className="text-[var(--slate-light)] projects font-semibold text-xl">Task Manager</motion.h2>
                    <motion.section initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 3.6 }} className="project-cresc text-sm rounded shadow-lg p-5 ">
                        <p className="">O Task Manager é uma aplicação web que permite aos usuários gerenciar suas tarefas de forma simples e eficiente, oferecendo funcionalidades completas de CRUD (Create, Read, Update, Delete).</p>
                    </motion.section>
                <motion.ul initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 3.8 }} className="text-[var(--slate)] flex gap-3">
                    <li>Next</li>
                    <li>Tailwind</li>
                    <li>shadcn</li>
                    <li>firestore</li>
                </motion.ul>
                <motion.ul initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 4 }} className="gray flex gap-3">
                    <li ><Link href={"https://github.com/Bielzera97/taskmanaged"} target="blank"><GithubIcon/></Link></li>
                    <li ><Link href={"https://taskmanaged.vercel.app/"} target="blank"><ExternalLink/></Link></li>
                </motion.ul>
                <motion.img alt="Foto do Projeto" initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 3.4 }} src={"/taskmanager.png"} width={700} height={450} className="project-photo rounded hover:filter-none transition-all duration-300 shadow-md absolute left-72"/>
            </section>
            
        </div>
        <div className="pt-36 relative">
        <motion.img alt="Foto do Projeto" initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 3.4 }} src={"/rater.png"} width={700} height={450} className="project-photo rounded hover:filter-none transition-all duration-300 shadow-md absolute"/>
            <section className="flex flex-col items-end gap-3" >
                <motion.h1 initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 3.2 }} className="green">Projeto</motion.h1>
                <motion.h2 initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 3.4 }} className="text-[var(--slate-light)] projects font-semibold text-xl">Rater</motion.h2>
                    <motion.section initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 3.6 }} className="project-desc text-sm rounded shadow-lg p-5   text-end ">
                        <p className="">O projeto busca os dados da API e os exibe na tela, mostrando uma lista de filmes com detalhes como título, descrição, imagem, etc. Além disso,implementei rotas dinâmicas que permitem acessar páginas específicas com mais detalhes sobre cada filme. Ao clicar em um filme, o usuário é redirecionado para uma página de detalhes, onde informações mais completas sobre o filme são apresentadas. Isso inclui dados como sinopse, elenco, avaliações e outros detalhes, proporcionando uma experiência mais interativa. </p>
                    </motion.section>
                <motion.ul initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 3.8 }} className="text-[var(--slate)] flex gap-3">
                    <li>Next</li>
                    <li>Tailwind</li>
                    <li>shadcn</li>
                    <li>API RESTful</li>
                </motion.ul>
                <motion.ul initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 4 }} className="gray flex gap-3">
                    <li ><Link href={"https://github.com/Bielzera97/tmdb-api"} target="blank"><GithubIcon/></Link></li>
                    <li ><Link href={"https://tmdb-api-tan.vercel.app/"} target="blank"><ExternalLink/></Link></li>
                </motion.ul>
            </section>
        </div>
        </div>
    )
}


export default Projects
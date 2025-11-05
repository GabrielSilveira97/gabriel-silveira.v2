import { ExternalLink, GithubIcon } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Button from "../Button";
import { SiNextdotjs, SiShadcnui } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaDocker, FaFigma } from "react-icons/fa";
import { useIsMobile } from "@/app/hooks/useIsMobile";
import ProjectsDesktop from "@/components/core/ProjectsDesktop";

const Projects = () => {

  const isMobile = useIsMobile()
  

  return (
    <>
      {isMobile ? <div>
      <motion.section
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2.8 }}
        className="flex items-baseline gap-2"
        id="projects"
      >
        <span className="green text-xl">03.</span>
        <h1 className="gray text-xl font-semibold topic flex items-center gap-5">
          Meus Projetos
          <div className="h-[0.5px] w-52 bg-[var(--dark-slate)] mx-auto"></div>
        </h1>
      </motion.section>

      {/* Project 1 */}
      <div className="pt-10 flex flex-col lg:flex-row lg:items-center gap-8">
        <motion.img
          alt="Foto do Projeto"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 3.4 }}
          src={"/agendast.png"}
          className="project-photo rounded hover:filter-none transition-all duration-300 shadow-md max-w-full lg:w-1/2"
        />
        <section className="flex flex-col items-start lg:items-end gap-3 lg:w-1/2">
          <motion.h1
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 3.2 }}
            className="green"
          >
            Projeto
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 3.4 }}
            className="text-[var(--slate-light)] projects font-semibold text-xl"
          >
            Agendast (LP)
          </motion.h2>
          <motion.section
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 3.6 }}
            className="project-desc text-sm rounded shadow-lg p-5 text-end"
          >
            <p>
Agendast é um gerenciador de salões de beleza que facilita o controle de agendamentos, clientes e serviços. A landing page foi desenvolvida em Next.js para performance e SEO, estilizada com Tailwind CSS e componentes shadcn/ui para um visual moderno, totalmente responsivo e pixel perfect. O design foi planejado no Figma, garantindo uma interface limpa e intuitiva.            </p>
          </motion.section>
          <motion.ul
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 3.8 }}
            className="text-[var(--slate)] flex gap-3"
          >
            <SiNextdotjs className="w-6 h-6 text-green"/>
            <RiTailwindCssFill className="w-6 h-6 text-green"/>
            <SiShadcnui className="w-6 h-6 text-green"/>
            <FaFigma className="w-6 h-6 text-green"/>
          </motion.ul>
          <motion.ul
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 4 }}
            className="gray flex gap-3"
          >
            <li>
              <Link
                href={"https://github.com/developeraction/agendast-frontend-2.0"}
                target="blank"
              >
                <GithubIcon />
              </Link>
            </li>
            <li>
              <Link
                href={"https://agendast.com.br/"}
                target="blank"
              >
                <ExternalLink />
              </Link>
            </li>
          </motion.ul>
        </section>
      </div>
      <div className="pt-10 flex flex-col lg:flex-row-reverse lg:items-center gap-8">
        <motion.img
          alt="Foto do Projeto"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 3.4 }}
          src={"/agendamento.png"}
          className="project-photo rounded hover:filter-none transition-all duration-300 shadow-md max-w-full lg:w-1/2"
        />
        <section className="flex flex-col items-start lg:items-end gap-3 lg:w-1/2">
          <motion.h1
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 3.2 }}
            className="green"
          >
            Projeto
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 3.4 }}
            className="text-[var(--slate-light)] projects font-semibold text-xl"
          >
            Agendast (Agendamento)
          </motion.h2>
          <motion.section
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 3.6 }}
            className="project-desc text-sm rounded shadow-lg p-5 text-end"
          >
            <p>
Agendast (Agendamento) é uma aplicação completa para agendamento de horários em salões de beleza, permitindo gerenciar clientes, serviços e disponibilidade de forma prática e organizada. Desenvolvida em Next.js, segue boas práticas de código, possui pixel perfect e é totalmente responsiva. A interface foi planejada no Figma, estilizada com Tailwind CSS e componentes shadcn/ui para um visual moderno e consistente. Conta com integração a uma API RESTful e utiliza React Query (TanStack Query) para requisições e cache de dados em tempo real, garantindo performance e experiência fluida para o usuário.            </p>
          </motion.section>
          <motion.ul
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 3.8 }}
            className="text-[var(--slate)] flex gap-3"
          >
            <SiNextdotjs className="w-6 h-6 text-green"/>
            <RiTailwindCssFill className="w-6 h-6 text-green"/>
            <SiShadcnui className="w-6 h-6 text-green"/>
            <FaDocker className="w-6 h-6 text-green"/>
          </motion.ul>
          <motion.ul
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 4 }}
            className="gray flex gap-3"
          >
            <li>
              <Link
                href={"https://github.com/developeraction/agendast-frontend-2.0"}
                target="blank"
              >
                <GithubIcon />
              </Link>
            </li>
            <li>
              <Link
                href={"https://agendast.com.br/application/empresateste"}
                target="blank"
              >
                <ExternalLink />
              </Link>
            </li>
          </motion.ul>
        </section>
      </div>
      <div className="pt-10 flex flex-col lg:flex-row lg:items-center gap-8">
        <motion.img
          alt="Foto do Projeto"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 3.4 }}
          src={"/otica-ges.png"}
          className="project-photo rounded hover:filter-none transition-all duration-300 shadow-md max-w-full lg:w-1/2"
        />
        <section className="flex flex-col items-start lg:items-end gap-3 lg:w-1/2">
          <motion.h1
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 3.2 }}
            className="green"
          >
            Projeto
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 3.4 }}
            className="text-[var(--slate-light)] projects font-semibold text-xl"
          >
            Ótica G&S
          </motion.h2>
          <motion.section
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 3.6 }}
            className="project-desc text-sm rounded shadow-lg p-5 text-end"
          >

Ótica G&S é uma aplicação web para controle de clientes, fichas e funcionários, oferecendo gestão completa para o dia a dia da ótica. Desenvolvida em React/Next.js, é totalmente responsiva e segue boas práticas de código, com pixel perfect para garantir fidelidade ao design criado no Figma. A interface utiliza Tailwind CSS e componentes shadcn/ui para um visual moderno e consistente, enquanto a integração com API RESTful, o React Query (TanStack Query) e a autenticação com JWT garantem requisições seguras, cache de dados eficiente e alta performance.          </motion.section>
          <motion.ul
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 3.8 }}
            className="text-[var(--slate)] flex gap-3"
          >
            <SiNextdotjs className="w-6 h-6 text-green"/>
            <RiTailwindCssFill className="w-6 h-6 text-green"/>
            <SiShadcnui className="w-6 h-6 text-green"/>
            <FaDocker className="w-6 h-6 text-green"/>
          </motion.ul>
          <motion.ul
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 4 }}
            className="gray flex gap-3"
          >
            <li>
              <Link
                href={"https://github.com/developeraction/oticasges-frontend"}
                target="blank"
              >
                <GithubIcon />
              </Link>
            </li>
            <li>
              <Link
                href={"https://www.oticages.com.br/"}
                target="blank"
              >
                <ExternalLink />
              </Link>
            </li>
          </motion.ul>
        </section>
      </div>
      <section className="flex flex-col items-center py-5">
          <Button link="/projects" target="_self" label="Ver mais projetos"/>
      </section>

    </div>  : 
    <>
    <motion.section
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2.8 }}
        className="flex items-baseline gap-2"
        id="projects"
      >
        <span className="green text-xl">03.</span>
        <h1 className="gray text-xl font-semibold topic flex items-center gap-5">
          Meus Projetos
          <div className="h-[0.5px] w-52 bg-[var(--dark-slate)] mx-auto"></div>
        </h1>
      </motion.section>

    <ProjectsDesktop/>
      <section className="flex flex-col items-center py-5">
          <Button link="/projects" target="_self" label="Ver mais projetos"/>
      </section>
    </>}
    </>
  );
};

export default Projects;

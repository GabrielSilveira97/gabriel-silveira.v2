import { ExternalLink, GithubIcon } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div>
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
            <li>Next</li>
            <li>Tailwind</li>
            <li>shadCn</li>
            <li>Figma</li>
          </motion.ul>
          <motion.ul
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 4 }}
            className="gray flex gap-3"
          >
            <li>
              <Link
                href={"https://github.com/Bielzera97/soc-web/tree/main"}
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
          src={"/need.png"}
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
            Need
          </motion.h2>
          <motion.section
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 3.6 }}
            className="project-desc text-sm rounded shadow-lg p-5 text-end"
          >
            <p>
            Need é um sistema de gerenciamento desenvolvido com foco em instituições de ensino. O projeto conta com módulos que exibem dados quantitativos sobre alunos, professores, cursos e aulas, com funcionalidades de pesquisa avançada para acessar informações específicas de cada categoria. Além disso, o sistema permite o cadastro de novos administradores, garantindo controle e organização de forma eficiente e intuitiva.
            </p>
          </motion.section>
          <motion.ul
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 3.8 }}
            className="text-[var(--slate)] flex gap-3"
          >
            <li>Angular</li>
            <li>API RESTful</li>
            <li>SCSS</li>
            <li>Angular Material</li>
          </motion.ul>
          <motion.ul
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 4 }}
            className="gray flex gap-3"
          >
            <li>
              <Link
                href={"https://github.com/Bielzera97/need_web_gerencial"}
                target="blank"
              >
                <GithubIcon />
              </Link>
            </li>
            <li>
              <Link
                href={"https://need-web-gerencial.vercel.app/"}
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
          src={"/izi.png"}
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
            IZI
          </motion.h2>
          <motion.section
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 3.6 }}
            className="project-desc text-sm rounded shadow-lg p-5 text-end"
          >
            <p>
IZI é um sistema completo para controle de serviços e gerenciamento de usuários. A aplicação permite o cadastro, listagem e administração de usuários e serviços de forma eficiente. Conta com um dashboard interativo que exibe informações e métricas em tempo real, facilitando a visualização geral do sistema. Também inclui funcionalidades para adicionar novos usuários com diferentes níveis de acesso.            </p>
          </motion.section>
          <motion.ul
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 3.8 }}
            className="text-[var(--slate)] flex gap-3"
          >
            <li>Angular</li>
            <li>Tailwind</li>
            <li>Angular Material</li>
            <li>API RESTful</li>
          </motion.ul>
          <motion.ul
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 4 }}
            className="gray flex gap-3"
          >
            <li>
              <Link
                href={"https://github.com/Bielzera97/izi_web_gerencial"}
                target="blank"
              >
                <GithubIcon />
              </Link>
            </li>
            <li>
              <Link
                href={"https://izi-web-gerencial-ip15o1x0e-bielzera97s-projects.vercel.app/home"}
                target="blank"
              >
                <ExternalLink />
              </Link>
            </li>
          </motion.ul>
        </section>
      </div>  

    </div>
  );
};

export default Projects;

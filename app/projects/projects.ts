import { IconType } from "react-icons"
import { FaAngular, FaReact } from "react-icons/fa"
import { SiNextdotjs } from "react-icons/si"
import { RiTailwindCssFill } from "react-icons/ri"
import { IoLogoSass } from "react-icons/io5";
import { TbBrandTypescript } from "react-icons/tb";




export type Project = {
    id: number,
    img: string,
    title: string,
    description: string
    link?: string,
    icons: IconType[]
}


export const projects : Project[] = [
    {
        id: 1,
        img: "/field-guide.png",
        title: "FieldGuide LP",
        description: "Landing page desenvolvida para apresentar o FieldGuide, um software de auxílio financeiro que ajuda pessoas e empresas a organizar, monitorar e planejar suas finanças.",
        link: "https://fieldguide-lp.vercel.app",
        icons: [
            FaReact,
            RiTailwindCssFill
        ]
    },
    {
        id: 2,
        img: "/agendast.png",
        title: "Agendast LP",
        description: "Esta é a landing page oficial do AgenDast, desenvolvida com Next.js, TypeScript e Tailwind CSS. O projeto tem como objetivo apresentar de forma clara e atrativa os benefícios do produto.",
        link: "https://agendast.com.br",
        icons: [
            FaReact,
            SiNextdotjs,
            RiTailwindCssFill
        ]
    },    
    {
        id: 3,
        img: "/agendamento.png",
        title: "Agendast (Agendamento)",
        description: "Sistema de agendamento integrado a um projeto de gerência de atendimentos, permitindo criar e gerenciar compromissos de forma centralizada. A comunicação entre os projetos foi feita via API REST utilizando Axios, garantindo sincronização e troca de dados em tempo real.",
        link: "https://agendast.com.br/application/empresateste/",
        icons: [
            TbBrandTypescript,
            FaReact,
            SiNextdotjs,
            RiTailwindCssFill
        ]
    },   
    {
        id: 4,
        img: "/otica-ges.png",
        title: "Ótica G&S",
        description: "Aplicação web para gerenciamento de fichas de atendimento em uma ótica, permitindo controle por status, filtragem por data e geração de relatórios em PDF.",
        link: "https://www.oticages.com.br",
        icons: [
            TbBrandTypescript,
            FaReact,
            SiNextdotjs,
            RiTailwindCssFill
        ]
    },
    {
        id: 5,
        img: "/financeiro.png",
        title: "Financeiro (Interno)",
        description: "Plataforma financeira para controle de entradas, saídas e crédito, com gerenciamento de clientes e dashboard de estatísticas que oferece visão geral das finanças, permitindo acompanhamento e análise eficiente dos dados.",
        icons: [
            TbBrandTypescript,
            FaReact,
            SiNextdotjs,
            RiTailwindCssFill
        ]
    },
    {
        id: 6,
        img: "/need.png",
        title: "Need",
        description: "Sistema de gerenciamento escolar com CRUD completo para professores, alunos e matérias, permitindo o controle e organização das informações acadêmicas de forma simples e eficiente.",
         icons: [
            TbBrandTypescript,
            FaAngular,
            RiTailwindCssFill,
            IoLogoSass
        ]
    },
    {
        id: 7,
        img: "/soc-web.png",
        title: "SOC (Ship Own Containter)",
        description: "Plataforma de match entre donos de containers e donos de cargas, conectando ambas as partes com base no tipo de container e na rota desejada, otimizando o transporte e reduzindo custos logísticos.",
        icons: [
            TbBrandTypescript,
            FaAngular,
            RiTailwindCssFill,
            IoLogoSass
        ]
    },
    {
        id: 8,
        img: "/izi.png",
        title: "IZI",
        description: "Plataforma de serviços autônomos que conecta clientes e profissionais, permitindo o registro de serviços por ambas as partes. O sistema realiza o match automático de acordo com as necessidades do cliente e a especialidade do profissional, facilitando contratações rápidas e precisas.",
        icons: [
            TbBrandTypescript,
            FaAngular,
            RiTailwindCssFill,
            IoLogoSass
        ]
    },
]
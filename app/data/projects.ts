import { IconType } from "react-icons"
import { FaAngular, FaDocker, FaNodeJs, FaReact } from "react-icons/fa"
import { SiNextdotjs, SiVite } from "react-icons/si"
import { RiTailwindCssFill } from "react-icons/ri"
import { IoLogoSass } from "react-icons/io5";
import { TbBrandPrisma, TbBrandTypescript } from "react-icons/tb";
import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";

export type Project = {
    id: number,
    img: string,
    title: string,
    description: string
    link?: string,
    icons: IconType[],
    topics : string[],
    images : string[]
}


export const projects : Project[] = [

        {
        id: 1,
        img: "/project-images/serpfy/serpfy-1.png",
        title: "Serpfy - LP",
        description: "Landing page desenvolvida para apresentar o Serpfy, uma ferramenta de SEO que auxilia empresas a melhorar seu posicionamento nos motores de busca e aumentar sua visibilidade online.",
        link: "https://serpfy.vercel.app/",
        icons: [
            FaReact,
            SiVite,
            RiTailwindCssFill,
            BiLogoTypescript
        ],
        topics: ["Figma,", "pixel-perfect,", "UX/UI",],
        images: ["/project-images/serpfy/serpfy-1.png", "/project-images/serpfy/serpfy-2.png", "/project-images/serpfy/serpfy-3.png"]
    },

    {
        id: 2,
        img: "/project-images/flow-one/flow-one-1.png",
        title: "FlowOne - LP",
        description: "Landing Page focada na promoção do produto Flow One, uma solução inovadora para gestão financeira empresarial.",
        link: "https://flow-one-five.vercel.app",
        icons: [
            FaReact,
            SiVite,
            RiTailwindCssFill,
            BiLogoTypescript
            
        ],
        topics: ["Figma,", "pixel-perfect,", "UX/UI",],
        images : ["/project-images/flow-one/flow-one-1.png", "/project-images/flow-one/flow-one-2.png", "/project-images/flow-one/flow-one-3.png"]
    },
    {
        id: 3,
        img: "/project-images/agendamento/agendamento.png",
        title: "Agendast – Sistema de Agendamento",
        description: "Plataforma desenvolvida para barbearias e salões de beleza, focada na gestão de horários, organização da agenda e otimização do atendimento, proporcionando praticidade para profissionais e clientes.",
        link: "https://agendast.com.br/application/empresateste",
        icons: [
            FaReact,
            SiNextdotjs,
            RiTailwindCssFill,
            BiLogoTypescript,
        ],
        topics: ["Figma,", "pixel-perfect,", "UX/UI"],
        images: ["/project-images/agendamento/agendamento.png", "/project-images/agendamento/agendamento-2.png", "/project-images/agendamento/agendamento-3.png"]
    },    
    {
        id: 4,
        img: "/project-images/focus/focus-1.png",
        title: "Focuscanna – Website",
        description: "Site institucional da Focuscanna, voltado à apresentação de tratamentos com cannabis medicinal prescritos por médicos para doenças crônicas, com foco em credibilidade e clareza.",
        link: "https://leo-mvp.vercel.app/",
        icons: [
            TbBrandTypescript,
            FaReact,
            SiNextdotjs,
            RiTailwindCssFill,
        ],
        topics: ["Next, shadcn, SSR"],
        images : ["/project-images/focus/focus-1.png", "/project-images/focus/focus-2.png", "/project-images/focus/focus-3.png"]
    },
        {
        id: 5,
        img: "/project-images/agendast/agendast.png",
        title: "Agendast - LP",
        description: "Esta é a landing page oficial do AgenDast, desenvolvida com Next.js, TypeScript e Tailwind CSS. O projeto tem como objetivo apresentar de forma clara e atrativa os benefícios do produto.",
        link: "https://agendast.com.br",
        icons: [
            FaReact,
            SiNextdotjs,
            RiTailwindCssFill,
            BiLogoTypescript,
        ],
        topics: ["Figma,", "pixel-perfect,", "UX/UI"],
        images: ["/project-images/agendast/agendast.png", "/project-images/agendast/agendast-2.png", "/project-images/agendast/agendast-3.png"]
    }, 
       
    {
        id: 6,
        img: "/project-images/otica/otica-ges.png",
        title: "Ótica G&S",
        description: "Aplicação web para gerenciamento de fichas de atendimento em uma ótica, permitindo controle por status, filtragem por data e geração de relatórios em PDF.",
        link: "https://www.oticages.com.br",
        icons: [
            TbBrandTypescript,
            FaReact,
            SiNextdotjs,
            RiTailwindCssFill,
            FaDocker
        ],
        topics: ["API REST,", "react-query,", "axios"],
        images: ["/project-images/otica/otica-ges.png", "/project-images/otica/otica-ges-2.png", "/project-images/otica/otica-ges-3.png"]
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
        ],
        topics: ["API REST"],
        images: ["/soc-web.png"]
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
        ],
        topics: ["API REST"],
        images: ["/izi.png"]
    },
    {
        id: 9,
        img: "/need.png",
        title: "Need",
        description: "Sistema de gerenciamento escolar com CRUD completo para professores, alunos e matérias, permitindo o controle e organização das informações acadêmicas de forma simples e eficiente.",
         icons: [
            TbBrandTypescript,
            FaAngular,
            RiTailwindCssFill,
            IoLogoSass
        ],
        topics: ["API REST"],
        images: ["/need.png"]
    },
        {
        id: 10,
        img: "/financeiro.png",
        title: "Financeiro (Interno)",
        description: "Plataforma financeira para controle de entradas, saídas e crédito, com gerenciamento de clientes e dashboard de estatísticas que oferece visão geral das finanças, permitindo acompanhamento e análise eficiente dos dados.",
        icons: [
            TbBrandTypescript,
            FaReact,
            SiNextdotjs,
            RiTailwindCssFill,
            FaDocker
        ],
        topics: ["API REST"],
        images: ["/financeiro.png"]
    },
    {
        id: 11,
        img: "/project-images/flow-pay/flow-pay-1.png",
        title: "FlowPay",
        link: "https://flow-pay-iota.vercel.app/",
        description: "LP para a promoção e prospecção de novos clientes para os produtos da plataforma FlowPay",
        icons: [
            TbBrandTypescript,
            FaReact,
            SiNextdotjs,
            RiTailwindCssFill,
            FaDocker
        ],
        topics: ["API REST"],
        images: ["/project-images/flow-pay/flow-pay-1.png", "/project-images/flow-pay/flow-pay-2.png", "/project-images/flow-pay/flow-pay-3.png"]
    },
    {
        id: 12,
        img: "/project-images/lume/lume.png",
        title: "Lume",
        description: "Plataforma de gestão financeira para controle de entradas, despesas, balanços e usuários de forma simples e eficiente.",
        link: "https://financial-sass.vercel.app/",
        icons: [
            FaReact,
            SiNextdotjs,
            RiTailwindCssFill,
            FaNodeJs,
            BiLogoPostgresql,
            TbBrandPrisma,
            FaDocker
        ],
        topics: ["API REST,", "tanstack-query,", "Axios"],
        images : ["/project-images/lume/lume.png", "/project-images/lume/lume-2.png", "/project-images/lume/lume-3.png"]
    },
    {
        id: 13,
        img: "/project-images/field-guide/field-guide.png",
        title: "FieldGuide LP",
        description: "Landing page desenvolvida para apresentar o FieldGuide, um software de auxílio financeiro que ajuda pessoas e empresas a organizar, monitorar e planejar suas finanças.",
        link: "https://fieldguide-lp.vercel.app",
        icons: [
            FaReact,
            RiTailwindCssFill
        ],
        topics: ["Figma,", "pixel-perfect,", "UX/UI"],
        images: ["/project-images/field-guide/field-guide.png", "/project-images/field-guide/field-guide-2.png", "/project-images/field-guide/field-guide-3.png"]
    },
]
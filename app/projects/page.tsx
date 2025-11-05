import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Project, projects } from "../data/projects"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import Image from "next/image"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Projetos",
 
};

const ProjectsPage = () => {
    return(
        <>
        <Link href="/">
        <section className="text-green flex gap-1 items-center p-5 cursor-pointer">
            <ArrowLeft className="hover:-translate-x-1 transition-all" />
            <p className="text-sm hover:underline underline-offset-4 transition-all duration-200">Voltar</p>            
        </section>
        </Link>
        <main className="flex flex-col justify-center items-center text-green">
            <h1 className="text-5xl font-semibold">Projetos</h1>
            <section className="p-16 grid lg:grid-cols-3 gap-10">
                {projects.map((project : Project) => {

                    return(
                        <Link href={project.link ? project.link : "/projects"} target="_blank" key={project.id}>
                        <Card className="border-none shadow-2xl hover:-translate-y-2 transition-all cursor-pointer" >
                            <CardHeader className=""><Image className="object-cover w-full rounded-t-3xl" src={project.img} alt={project.title} width={200} height={100} /></CardHeader>
                            <CardContent className="py-5 overflow-hidden flex flex-col gap-3 ">
                                <h1 className="text-green">{project.title}</h1>
                                <p className="text-[#ccd6f6] text-sm">{project.description}</p>
                                <ul className="flex items-center gap-2">
                                    {project.icons.map((Icon, index) => {
                                        return(
                                            <li key={index}>
                                                <Icon className="w-6 h-6 text-green" />
                                            </li>
                                        )
                                    })}
                                </ul>
                            </CardContent>
                        </Card>
                        </Link>
                    )
                })}
            </section>
        </main>
        </>
    )
}


export default ProjectsPage
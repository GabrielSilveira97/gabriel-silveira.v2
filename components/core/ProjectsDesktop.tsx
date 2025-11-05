"use client"
import Image from "next/image"
import { Project, projects } from "@/app/data/projects"
import { useState } from "react"
import Link from "next/link"

const ProjectsDesktop = () => {
 const [activeProject, setActiveProject] = useState<Project | null>(projects[0])

  return (
    <main className="flex justify-center px-5">
      <ul className="flex flex-col gap-2">
        {projects.slice(0,5).map((project) => {
          const isActive = activeProject?.id === project.id
          return (
            <Link key={project.id} href={project.link ?? "#"} target="_blank" >
            <div
              className={`flex gap-4 h-32 cursor-pointer transition-all duration-200 ${
                isActive
                  ? "bg-green text-foreground"
                  : "bg-foreground text-green "
                  
              }`}
              onMouseEnter={() => setActiveProject(project)}
            >
              <Image
                src={project.img}
                width={250}
                height={100}
                alt={`Imagem do projeto ${project.title}`}
              />

              <section className="flex flex-col gap-3 justify-center">
                <li className="text-2xl pr-10">{project.title}</li>

                <ul className="flex gap-1">
                  {project.icons.map((Icon, index) => (
                    <Icon key={index} className={isActive ? "text-darkestgreen" : "text-green"} />
                  ))}
                </ul>

                <ul className="flex gap-1 text-sm">
                  {project.topics.map((topic, index) => (
                    <li key={index} className="text-slate-400">
                      {topic}
                    </li>
                  ))}
                </ul>
              </section>
            </div>
            </Link>
          )
        })}
      </ul>
        <section className="w-96 rounded-r bg-green text-foreground px-10 pt-2 text-shadow-md">
        {activeProject && (
          <>
            <h2 className="text-xl font-semibold mb-2">
              {activeProject.title}
            </h2>
            <section className="">
              <p className="text-sm  text-slate-400">{activeProject.description}</p>
            </section>
            <section className="flex text-sm gap-2 py-3">
            {activeProject.topics.map((topic, index) => {
                return (
                    <p key={index}>{topic}</p>
                )
            })}
            </section>
            <section className="grid gap-4 ">
                {activeProject.images.map((image, index) => {
                    return(
                        <Image key={index} src={image} width={300} height={100} alt="Foto do projeto"/>
                    )
                })}
            </section>
          </>
        )}
      </section>
    </main>
    )
}

export default ProjectsDesktop
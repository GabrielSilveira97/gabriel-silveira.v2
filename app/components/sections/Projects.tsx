import Image from "next/image"

const Projects = () => {
    return(
        <div>
        <section className="flex items-baseline gap-2" id="projects">
            <span className="green text-xl">03.</span><h1 className="gray text-xl font-semibold topic flex items-center gap-5"> Meus Projetos <div className="h-[0.5px] w-52 bg-[var(--dark-slate)] mx-auto"></div></h1>
        </section>
        <div>
            <section>
                <h1 className="green">projeto</h1>
                <h2 className="">Overview-Dashboard</h2>
                <section>
                    <p>Descrição do projeto</p>
                </section>
                <ul>
                    <li>Next</li>
                    <li>Tailwind</li>
                    <li>shadcn</li>
                    <li>firebase</li>
                </ul>
            </section>
            <Image alt="Foto do Projeto" src={"/"} width={200} height={100}/>
        </div>
        </div>
    )
}


export default Projects
import Image from "next/image"

const About = () => {
    return(
        <div>
        <section className="flex items-baseline gap-2" id="about">
            <span className="green text-xl">01.</span><h1 className="gray text-xl font-semibold topic flex items-center gap-5"> Sobre mim <div className="h-[0.5px] w-52 bg-[var(--dark-slate)] mx-auto"></div></h1>
        </section>
        <div className="flex gap-7">
            <section className="text-[var(--slate)] about pt-10 ">
                <p>Sou um desenvolvedor Full Stack apaixonado por tecnologia e inovação, com sólida experiência em construção de aplicações modernas e interfaces interativas. Tenho domínio de ferramentas e tecnologias como React, Next.js, Tailwind CSS, Redux, Chart.js, e bancos de dados SQL e NoSQL. Além disso, possuo conhecimento em criação e integração de APIs RESTful, garantindo soluções eficientes e escaláveis.</p>
                <p><br/>Tive o privilégio de colaborar no Instituto de Controle do Espaço Aéreo (ICEA), onde contribuí para o desenvolvimento de interfaces intuitivas e dashboards informativos, aprimorando a experiência do usuário e a eficiência das operações. Busco constantemente evoluir minhas habilidades e criar projetos que causem impacto positivo.</p>
            </section>
            <div className="relative div-foto">
                <section className="arc rounded transition-all duration-300">dale</section>
                <Image
                    alt="minha foto"
                    src={'/minha-foto.jpg'}
                    width={900}
                    height={100}
                    className="rounded minha-foto hover:filter-none transition-all duration-300"
                />
            </div>            
        </div>
        </div>
    )
}


export default About
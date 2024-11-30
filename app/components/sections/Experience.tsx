import { ArrowRight } from "lucide-react"
import Link from "next/link"

const Experience = () => {
    return(
        <div>
        <section className="flex items-baseline gap-2 " id="experience">
            <span className="green text-xl">02.</span><h1 className="gray text-xl font-semibold topic flex gap-3 items-center">Minha experiência <div className="h-[0.5px] w-52 bg-[var(--dark-slate)] mx-auto"></div></h1>
        </section>
        <h2 className="gray about pt-10">Desenvolvedor no <Link href={'https://www.icea.decea.mil.br/'} target="blank" className="green">ICEA (Instituto de Controle do Espaço Aéreo)</Link></h2>
        <h3 className="text-[var(--dark-slate)]">Agosto 2020 - Agosto 2024</h3>
        <ul className="flex flex-col gap-3 pt-10">
            <li className="gray flex experience"><ArrowRight className="green arrow pr-2"/>Criei interfaces de usuário intuitivas e dashboards dinâmicos, integrando dados de APIs para visualizações informativas e em tempo real e implementei de soluções que melhoraram a experiência do usuário e a análise de dados críticos.</li>
            <li className="gray flex experience"><ArrowRight className="green arrow pr-2"/>Gerenciei bancos de dados SQL e NoSQL para armazenamento e recuperação eficientes de informações e desenvolvi testes automatizados para garantir a confiabilidade e a qualidade das aplicações criadas.</li>
            <li className="gray flex experience"><ArrowRight className="green arrow pr-2"/>Administrei e fiz a manutenção de redes locais, garantindo conectividade e suporte às operações do instituto e resolvi problemas de infraestrutura e otimização de redes para atender às demandas dos sistemas desenvolvidos.</li>
        </ul>
        </div>
    )
}


export default Experience
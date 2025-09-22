import { ArrowLeft } from "lucide-react"
import { Table,TableHeader, TableRow, TableHead, TableBody, TableCell } from "../components/ui/table"
import Link from "next/link"
const ProjectsPage = () => {
    return(
        <>
        <Link href="/">
        <section className="text-green flex gap-1 items-center p-5 cursor-pointer">
            <ArrowLeft className="hover:-translate-x-1 transition-all" />
            <p className="text-sm hover:underline underline-offset-4 transition-all duration-200">Voltar</p>            
        </section>
        </Link>
        <main className="flex flex-col justify-center items-center text-green py-5">
            <h1 className="text-3xl py-5" >Projetos</h1>
            <section className="w-full lg:px-32 px-5">
            <Table className="">
                <TableHeader >
                    <TableRow className="border-green">
                        <TableHead>Projeto</TableHead>
                        <TableHead>Link</TableHead>
                        <TableHead>Tecnologia</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody className="rounded">
                    <TableRow className="border-green cursor-pointer hover:bg-gray-800 ">
                        <TableCell>Agendast LP</TableCell>
                        <TableCell><Link target="_blank" className="hover:underline underline-offset-4" href="https://agendast.com.br/">https://agendast.com.br</Link></TableCell>
                        <TableCell>Next/React</TableCell>
                    </TableRow>
                    <TableRow className="border-green cursor-pointer hover:bg-gray-800 ">
                        <TableCell>Agendast (Agendamento)</TableCell>
                        <TableCell><Link target="_blank" className="hover:underline underline-offset-4" href="https://agendast.com.br/application/empresateste">https://agendast.com.br/application/empresateste</Link></TableCell>
                        <TableCell>Next/React</TableCell>
                    </TableRow>
                    <TableRow className="border-green cursor-pointer hover:bg-gray-800 ">
                        <TableCell>Ótica G&S</TableCell>
                        <TableCell><Link target="_blank" className="hover:underline underline-offset-4" href="https://www.oticages.com.br/">https://www.oticages.com.br</Link></TableCell>
                        <TableCell>Next/React</TableCell>
                    </TableRow>
                    <TableRow className="border-green cursor-pointer hover:bg-gray-800 ">
                        <TableCell>Financeiro (Interno)</TableCell>
                        <TableCell><Link target="_blank" className="hover:underline underline-offset-4" href="https://agendast.com.br/financeiro/login">https://agendast.com.br/financeiro/login</Link></TableCell>
                        <TableCell>Next/Fastify</TableCell>
                    </TableRow>
                    <TableRow className="border-green cursor-pointer hover:bg-gray-800">
                        <TableCell>Need</TableCell>
                        <TableCell><Link target="_blank" className="hover:underline underline-offset-4" href="https://need-web-gerencial.vercel.app/">https://need-web-gerencial.vercel.app</Link></TableCell>
                        <TableCell>Angular</TableCell>
                    </TableRow>
                    <TableRow className="border-green cursor-pointer hover:bg-gray-800">
                        <TableCell>Izi</TableCell>
                        <TableCell><Link target="_blank" className="hover:underline underline-offset-4" href="https://izi-web-gerencial-ip15o1x0e-bielzera97s-projects.vercel.app/home">https://izi-web-gerencial.vercel.app</Link></TableCell>
                        <TableCell>Angular</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            </section>
        </main>
        </>
    )
}


export default ProjectsPage
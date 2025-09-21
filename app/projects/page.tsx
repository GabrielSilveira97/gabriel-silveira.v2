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
        <main className="flex flex-col justify-center items-center text-green py-10">
            <h1 className="text-3xl" >Projetos</h1>
            <section className="w-full px-32">
            <Table className="">
                <TableHeader >
                    <TableRow className="border-green">
                        <TableHead>Projeto</TableHead>
                        <TableHead>Link</TableHead>
                        <TableHead>Tecnologia</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody className="rounded" >
                    <TableRow className="border-green cursor-pointer hover:bg-gray-800">
                        <TableCell>Need</TableCell>
                        <TableCell><Link target="_blank" className="hover:underline underline-offset-4" href="https://need-web-gerencial.vercel.app/">https://need-web-gerencial.vercel.app/</Link></TableCell>
                        <TableCell>tetst</TableCell>
                    </TableRow>
                    <TableRow className="border-green cursor-pointer hover:bg-gray-800">
                        <TableCell>Soc</TableCell>
                        <TableCell>Link</TableCell>
                        <TableCell>tetst</TableCell>
                    </TableRow>
                    <TableRow className="border-green cursor-pointer hover:bg-gray-800 ">
                        <TableCell>Soc</TableCell>
                        <TableCell>texte</TableCell>
                        <TableCell>tetst</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            </section>
        </main>
        </>
    )
}


export default ProjectsPage
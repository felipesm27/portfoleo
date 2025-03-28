import Cabecalho from "@/components/shared/Cabecalho"
import CarrosselImages from "@/components/shared/CarrosselImages"
import Container from "@/components/shared/Containeir"
import Tecnologias from "@/components/tecnologias/Tecnologias"
import { obterProjeto } from "@/functions/projetos"
import { obterReadme } from "@/functions/github"
import Readme from "@/components/projetos/Readme"

export default async function PaginaProjeto(props: { params: Promise<{ id: string }> }) {
	const { id } = await props.params
	const projeto = await obterProjeto(id)

	if (!projeto) return null

	const readme = await obterReadme(projeto.repositorio)

	return (
		<div className="bg-black">
			<Cabecalho />
			<Container classname="py-7 flex flex-col items-center gap-10">
				<h1 className="text-3xl font-bold self-start">{projeto.nome}</h1>
				<CarrosselImages imagens={projeto.imagens.slice(1)} />
				<Tecnologias lista={projeto.tecnologias} tamanhoMenor />
				<Readme markdown={readme} />
			</Container>
		</div>
	)
}

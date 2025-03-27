import { Tecnologia } from "@core"
import Cabecalho from "../shared/Cabecalho"
import Tecnologias from "../tecnologias/Tecnologias"

export interface PrincipalProps {
	tecnologias: Tecnologia[]
}

export default function Principal(props: PrincipalProps) {
	return (
		<div className="flex flex-col bg-[url('/principal.jpg')] h-[500px] bg-cover bg-center items-center justify-center">
			<Cabecalho />
			<div className="flex-1 w-full flex flex-col justify-center items-center gap-5">
				<div className="flex flex-col items-center gap-1">
					<h1 className="flex gap-3 items-center">
						<span className="w-2 h-2 rounded-full bg-green-500"></span>
						<span className="bg-gradient-to-r from-blue-500 via-white to-white text-transparent bg-clip-text text-3xl sm:text-5xl font-bold text-center">
							Felipe Mello
						</span>
						<span className="w-2 h-2 rounded-full bg-green-500"></span>
					</h1>
					<h2 className="text-blue-400 text-center">
						Desenvolvedor Jr. dedicado a criar e aprender.
					</h2>
				</div>

				<Tecnologias lista={props.tecnologias} />
			</div>
		</div>
	)
}

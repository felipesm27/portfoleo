export interface ContainerProps {
	children: React.ReactNode
	classname?: string
}

export default function Container(props: ContainerProps) {
	return <div className={`max-w-7xl mx-auto px-4 ${props.classname} ?? ""`}>{props.children}</div>
}

import { useEffect, useState } from "react"
import { BackButton } from "../back-link"
import { stylePageTitle, sytleDividedList } from "../styles"
import { clsx } from "clsx"
import { AppFrame } from "../app-frame"

type Usuarios = {
	estudiantes: {
		nombre: string
		cedula: string
		grupo: string
		promedio: string
	}[]
	docentes: {
		nombre: string
		cedula: string
		materias: string
	}[]
}

const styleSection = clsx("text-xl font-semibold text-slate-500 px-4 py-2")

export const PageUsuarios = () => {
	const [usuarios, setUsuarios] = useState<Usuarios | null>(null)

	useEffect(() => {
		fetch("/usuarios.json")
			.then((res) => res.json())
			.then((data) => setUsuarios(data))
			.catch(console.error)
	}, [])

	return (
		<AppFrame>
			<div className="flex flex-row gap-2 place-items-center">
				<BackButton />
				<h1 className={stylePageTitle}>Usuarios Registrados</h1>
			</div>
			<div className={sytleDividedList}>
				<h2 className={styleSection}>Docentes</h2>
				{usuarios?.docentes.map((d, i) => (
					<Docente {...d} key={i} />
				))}
			</div>
			<div className={sytleDividedList}>
				<h2 className={styleSection}>Estudiantes</h2>
				{usuarios?.estudiantes.map((e, i) => (
					<Estudiante {...e} key={i} />
				))}
			</div>
		</AppFrame>
	)
}

export const Estudiante = ({
	nombre,
	cedula,
	grupo,
}: Usuarios["estudiantes"][0]) => {
	return (
		<div className="flex flex-row gap-3 px-4 place-items-center">
			<div className="flex-shrink-0 rounded-full bg-slate-300 size-6" />
			<div className="flex flex-col w-full gap-1 my-1">
				<div className="flex w-full place-items-center">
					<span className="font-medium">{nombre}</span>
					<div className="mr-auto" />
					<span className="text-sm font-bold text-slate-600">{grupo}</span>
				</div>
				<span className="font-mono font-medium leading-none text-slate-400">
					{cedula}
				</span>
			</div>
		</div>
	)
}

export const Docente = ({
	nombre,
	cedula,
	materias,
}: Usuarios["docentes"][0]) => {
	return (
		<div className="flex flex-row gap-3 px-4 place-items-center">
			<div className="flex-shrink-0 rounded-full bg-slate-300 size-6" />
			<div className="flex flex-col w-full gap-1 my-1">
				<div className="flex w-full place-items-center">
					<span className="font-medium">{nombre}</span>
					<div className="mr-auto" />
					<span className="text-sm font-bold text-slate-600">{materias}</span>
				</div>
				<span className="font-mono font-medium leading-none text-slate-400">
					{cedula}
				</span>
			</div>
		</div>
	)
}

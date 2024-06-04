import { useState, useEffect } from "react"
import { BackButton } from "../back-link"
import { stylePageTitle, sytleDividedList } from "../styles"
import { AppFrame } from "../app-frame"

type Cuentas = {
	cuentas: { id: string; monto: string; pagado: boolean; fecha: string }[]
}

export const PageCuentas = () => {
	const [cuentas, setUsuarios] = useState<Cuentas | null>(null)

	useEffect(() => {
		fetch("/cuentas.json")
			.then((res) => res.json())
			.then((data) => setUsuarios(data))
			.catch(console.error)
	}, [])

	return (
		<AppFrame>
			<div className="flex flex-row gap-2 place-items-center">
				<BackButton />
				<h1 className={stylePageTitle}>Estado de Cuentas</h1>
			</div>
			<div className={sytleDividedList}>
				{cuentas?.cuentas
					.sort((a, b) => (a.pagado ? 1 : 0) - (b.pagado ? 1 : 0))
					.map((c, i) => (
						<Cuenta {...c} key={i} />
					))}
			</div>
		</AppFrame>
	)
}

const Cuenta = ({ monto, fecha, id, pagado }: Cuentas["cuentas"][number]) => {
	return (
		<div className="flex flex-row h-12 gap-2 px-4 place-items-center">
			<span className="w-20 text-xs leading-none text-slate-500">{fecha}</span>
			<span className="font-bold">{monto}</span>
			<div className="m-auto" />
			{pagado && (
				<span className="p-1 text-xs font-bold leading-none bg-green-500 rounded text-slate-200 ">
					PAGADO
				</span>
			)}
			<span className="text-slate-500">{id}</span>
		</div>
	)
}

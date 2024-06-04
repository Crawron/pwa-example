import { IconPeople, IconDollar } from "../icons"
import { Link } from "react-router-dom"
import { stylePageTitle, sytleDividedList } from "../styles"
import { AppFrame } from "../app-frame"

export const PageMainMenu = () => {
	return (
		<AppFrame>
			<h1 className={stylePageTitle}>Bienvenido!</h1>
			<div className={sytleDividedList}>
				<MainMenuOption
					icon={<IconPeople />}
					name="Usuarios"
					destination="usuarios"
				/>
				<MainMenuOption
					icon={<IconDollar />}
					name="Estado de Cuentas"
					destination="cuentas"
				/>
			</div>
		</AppFrame>
	)
}

const MainMenuOption = ({
	name,
	icon,
	destination,
}: {
	name: string
	icon: JSX.Element
	destination: string
}) => {
	return (
		<Link
			to={destination}
			className="flex w-full h-12 gap-2 px-4 place-items-center bg-slate-200 hover:bg-slate-300 active:bg-slate-400 group hover:transition-colors active:transition-none"
		>
			<span className="text-slate-400 group-active:text-slate-600 group-hover:text-slate-600 group-hover:transition-colors">
				{icon}
			</span>
			<span className="mr-auto">{name}</span>
		</Link>
	)
}

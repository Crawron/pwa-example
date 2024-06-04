import { Link } from "react-router-dom"
import { IconAcademicCap, IconBars, IconChatBubbleLeft } from "./icons"

export const Header = () => {
	return (
		<header className="sticky top-0 w-full shadow-md shadow-slate-300">
			<div className="grid h-16 bg-blue-600 place-content-center text-slate-100">
				<Link to="/" className="grid size-16 place-items-center">
					<IconAcademicCap />
				</Link>
			</div>
			<div className="flex flex-row h-16 px-4 bg-slate-200 place-items-center">
				<IconBars />
				<div className="flex flex-row gap-4 ml-auto place-items-center">
					<IconChatBubbleLeft />
					<div className="bg-blue-600 rounded-full size-10" />
				</div>
			</div>
		</header>
	)
}

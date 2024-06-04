import { IconBackArrow } from "./icons"
import { useNavigate } from "react-router-dom"

export const BackButton = () => {
	const navigate = useNavigate()

	return (
		<button onClick={() => navigate(-1)} className="size-10 text-slate-500">
			<IconBackArrow />
		</button>
	)
}

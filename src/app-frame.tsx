import { Header } from "./header"

export const AppFrame = ({ children }: { children: React.ReactNode }) => (
	<>
		<Header />
		<div className="flex flex-col w-full max-w-xl gap-5 p-4 mx-auto mt-6 mb-32">
			{children}
		</div>
	</>
)

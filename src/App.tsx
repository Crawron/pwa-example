import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { PageMainMenu } from "./routes/main-menu"
import { PageUsuarios } from "./routes/usuarios"
import { PageCuentas } from "./routes/page-cuentas"

const router = createBrowserRouter([
	{
		path: "/",
		element: <PageMainMenu />,
	},
	{
		path: "usuarios",
		element: <PageUsuarios />,
	},
	{
		path: "cuentas",
		element: <PageCuentas />,
	},
])

function App() {
	return <RouterProvider router={router} />
}

export default App

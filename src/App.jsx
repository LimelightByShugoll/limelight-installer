import Router, { Switch, Route } from "crossroad"
import { useEffect } from "react"
import Welcome from "./pages/Welcome"
import Install from "./pages/Install"
import Agree from "./pages/Agree"
import Unsupported from "./pages/Unsupported"
import NotFound from "./pages/NotFound"
import { useParams, usePath } from "crossroad"

function Redirect() {
	const params = useParams("/:type/:code")
	const [, setPath] = usePath()

	useEffect(() => {
		setPath(`/${params.type}/${params.code}/welcome`)
	}, [params])

	return null
}

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/:type/:code" component={Redirect} />
				<Route path="/:type/:code/welcome" component={Welcome} />
				<Route path="/:type/:code/install" component={Install} />
				<Route path="/:type/:code/agree" component={Agree} />
				<Route path="/unsupported" component={Unsupported} />
				<Route component={NotFound} />
			</Switch>
		</Router>
	)
}

export default App

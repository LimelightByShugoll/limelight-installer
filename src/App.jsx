import Router, { Switch, Route } from "crossroad"
import Welcome from "./pages/Welcome"
import Install from "./pages/Install"
import Agree from "./pages/Agree"
import Unsupported from "./pages/Unsupported"
import NotFound from "./pages/NotFound"

function App() {
	return (
		<Router>
			<Switch>
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

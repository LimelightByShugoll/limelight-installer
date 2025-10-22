import { usePath } from "crossroad"
import { useLayoutEffect } from "react"
import Navigation from "../components/Navigation"
import { useParams } from "crossroad"

function Page() {
	const [, setPath] = usePath()
	const params = useParams("/:type/:code/welcome")

	useLayoutEffect(() => {
		const userAgent = navigator.userAgent
		const isWindows = /Win/i.test(userAgent)
		const isMac = /Mac/i.test(userAgent)

		if (!isWindows && !isMac) {
			setPath("/unsupported")
		}
	}, [])

	return (
		<div className="page page--welcome">
			<Navigation step={1} />
			<div className="content">
				<h1>Welcome to Limelight</h1>
				<div>There are a few things to do before entering the meeting.</div>
				<button className="proceed-btn" onClick={() => setPath(`/${params.type}/${params.code}/install`)}>
					Proceed
				</button>
			</div>
		</div>
	)
}

export default Page

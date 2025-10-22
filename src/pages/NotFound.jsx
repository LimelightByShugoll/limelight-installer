import Navigation from "../components/Navigation"

function Page() {
	return (
		<div className="page page--not-found">
			<Navigation step={-1} />
			<div className="content">
				<h1>404 - Not found</h1>
				<div>The page you're looking for cannot be found.</div>
				<div>
					Please contact us at{" "}
					<strong>
						<u>240-380-1505</u>
					</strong>{" "}
					for assistance.
				</div>
			</div>
		</div>
	)
}

export default Page

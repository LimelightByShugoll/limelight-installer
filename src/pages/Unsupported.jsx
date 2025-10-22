import Navigation from "../components/Navigation"

function Page() {
	return (
		<div className="page page--unsupported">
			<Navigation step={-1} />
			<div className="content">
				<h1>Unsupported Device</h1>
				<div>
					Unfortunately our platform only works on Windows or Mac devices. If you have a Windows or Mac machine, please
					switch to that. Otherwise, call us at{" "}
					<strong>
						<u>240-380-1505</u>
					</strong>{" "}
					for next steps.
				</div>
			</div>
		</div>
	)
}

export default Page

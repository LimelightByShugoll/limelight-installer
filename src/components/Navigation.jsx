import { usePath } from "crossroad"
import logo from "../assets/logo.svg"
import { useState } from "react"
import { useParams } from "crossroad"
import { Plus } from "iconoir-react"

function Component({ step }) {
	const [modalOpen, setModalOpen] = useState(false)
	const [, setPath] = usePath()
	const params = useParams()

	function goto(destination) {
		setPath(`/${params.type}/${params.code}/${destination}`)
	}

	return (
		<div className="navbar">
			<a className="logo" href="https://limelightbyshugoll.com" target="_blank" rel="noopener noreferrer">
				<img src={logo} alt="Limelight Insites by Shugoll logo" />
			</a>
			{step > 0 ? (
				<div className="breadcrumbs-container">
					<div className="header">{["Welcome", "Download and Install", "Please Read Thoroughly"][step - 1]}</div>
					<div className="breadcrumbs">
						<div
							className={`circle${step >= 1 ? " active" : ""}`}
							title="Welcome"
							onClick={() => goto("welcome")}></div>
						<div className={`line${step >= 2 ? " active" : ""}`}></div>
						<div
							className={`circle${step >= 2 ? " active" : ""}`}
							title="Download and Install"
							onClick={() => goto("install")}></div>
						<div className={`line${step >= 3 ? " active" : ""}`}></div>
						<div
							className={`circle${step >= 3 ? " active" : ""}`}
							title="Please Read Thoroughly"
							onClick={() => goto("agree")}></div>
					</div>
				</div>
			) : (
				""
			)}
			<button className="help-btn" onClick={() => setModalOpen(pre => !pre)}>
				Need help?
			</button>
			{modalOpen ? (
				<div className="modal">
					Call us at 240-380-1505{" "}
					<button className="modal--close-btn" onClick={() => setModalOpen(false)}>
						<Plus className="icon" />
					</button>
				</div>
			) : (
				""
			)}
		</div>
	)
}

export default Component

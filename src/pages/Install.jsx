import { usePath } from "crossroad"
import { useLayoutEffect, useState } from "react"
import Navigation from "../components/Navigation"
import { WarningTriangle } from "iconoir-react"
import adobeLogo from "../assets/adobe_logo.svg"
import { useParams } from "crossroad"

const downloadLinks = {
	win: "https://www.adobe.com/go/ConnectShell11",
	mac: "https://www.adobe.com/go/ConnectMac11Plus"
}

const fileNames = {
	win: "ConnectShellSetup11.exe",
	mac: "AdobeConnect_####_##_###.dmg"
}

function Page() {
	const [system, setSystem] = useState("")
	const [downloadStarted, setDownloadStarted] = useState(false)
	const [modalOpen, setModalOpen] = useState(false)
	const [, setPath] = usePath()
	const params = useParams("/:type/:code/install")

	useLayoutEffect(() => {
		const userAgent = navigator.userAgent
		const isWindows = /Win/i.test(userAgent)
		const isMac = /Mac/i.test(userAgent)

		if (!isWindows && !isMac) {
			setPath("/unsupported")
		}

		setSystem(isWindows ? "win" : "mac")
	}, [])

	return (
		<div className={`page page--install${downloadStarted ? "--started" : ""}`}>
			<Navigation step={2} />
			<div className="content">
				{!downloadStarted ? (
					<>
						<h1>First, let's download and install Adobe Connect.</h1>
						<a className="btn download-btn" href={downloadLinks[system]} onClick={() => setDownloadStarted(true)}>
							<img src={adobeLogo} alt="Adobe Connect logo" />
							<div>Download Adobe Connect</div>
						</a>
						<button className="skip-btn" onClick={() => setModalOpen(true)}>
							Skip this step
						</button>
						{modalOpen ? (
							<div className="modal-container">
								<div className="modal">
									<div className="title">Are you sure?</div>
									<div className="message">
										<p>
											Even if you have Adobe Connect already installed on your computer, we highly recommend
											reinstalling it.
										</p>
										<p>Many times Adobe Connect will push updates that can only be applied after a new installation.</p>
									</div>
									<div className="buttons">
										<button className="modal--cancel-btn" onClick={() => setModalOpen(false)}>
											Cancel
										</button>
										<button className="modal--skip-btn" onClick={() => setPath(`/${params.type}/${params.code}/agree`)}>
											Skip Installation
										</button>
									</div>
								</div>
							</div>
						) : (
							""
						)}
					</>
				) : (
					<>
						<h1>Your download should start in a moment.</h1>
						<div>If it doesn't, try clicking download again.</div>
						<a className="btn download-btn" href={downloadLinks[system]} onClick={() => setDownloadStarted(true)}>
							<img src={adobeLogo} alt="Adobe Connect logo" />
							<div>Download Adobe Connect</div>
						</a>
						<div className="hr"></div>
						<div className="warning-box">
							<div className="graphic">
								<WarningTriangle />
							</div>
							<div className="message">Once Adobe Connect has downloaded, you'll need to install it as well.</div>
						</div>
						<div>
							Go to your downloads folder and find the file called <div className="code">{fileNames[system]}</div>.
						</div>
						<div>
							Double-click the file and complete the installation process. Then come back to this screen and click the
							proceed button.
						</div>
						<button className="proceed-btn" onClick={() => setPath(`/${params.type}/${params.code}/agree`)}>
							Proceed
						</button>
					</>
				)}
			</div>
		</div>
	)
}

export default Page

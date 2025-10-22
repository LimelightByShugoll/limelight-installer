import { usePath, useParams } from "crossroad"
import { useLayoutEffect } from "react"
import Navigation from "../components/Navigation"
import { useState } from "react"
import { Check } from "iconoir-react"

function Page() {
	const [formState, setFormState] = useState([])
	const [, setPath] = usePath()
	const params = useParams("/:type/:code/agree")

	useLayoutEffect(() => {
		const userAgent = navigator.userAgent
		const isWindows = /Win/i.test(userAgent)
		const isMac = /Mac/i.test(userAgent)

		if (!isWindows && !isMac) {
			setPath("/unsupported")
		}

		if (params.type === "p") {
			setFormState([
				{
					checked: false,
					label: (
						<span>
							We{" "}
							<strong>
								<u>strongly recommend</u>
							</strong>{" "}
							the use of headphones with a built-in microphone to reduce background noise.
						</span>
					)
				},
				{
					checked: false,
					label: (
						<span>
							Once you enter the meeting room you must enable your microphone and webcame{" "}
							<strong>
								<u>regardless of if you already did so in a previous step</u>
							</strong>
							. To do this, click on the webcam and microphone icons at the top left of the screen. They will be green
							once activated.
						</span>
					)
				},
				{
					checked: false,
					label: (
						<span>
							A Limelight Insights technician is available to help you. Please don't hesitate to call our tech support
							line at{" "}
							<strong>
								<u>240-380-1505</u>
							</strong>{" "}
							to ask for assistance.
						</span>
					)
				}
			])
		} else if (params.type === "m") {
			setFormState([
				{
					checked: false,
					label: (
						<span>
							We{" "}
							<strong>
								<u>strongly recommend</u>
							</strong>{" "}
							the use of headphones with a built-in microphone to reduce background noise.
						</span>
					)
				},
				{
					checked: false,
					label: (
						<span>
							<strong>
								<u>Do not</u>
							</strong>{" "}
							attempt to manipulate the platform in any way. If you'd like to adjust a pod's position or sizing, please
							let the Limelight lead technician know.
						</span>
					)
				},
				{
					checked: false,
					label: (
						<span>
							The Limelight lead technician will be available to check your webcam and microphone, as well as go over
							any stimuli/layouts as you need. They will remain available throughout the entirety of the sessions.
						</span>
					)
				},
				{
					checked: false,
					label: (
						<span>
							Respondent onboarding typically occurs 15 minutes prior to session start. Please allow yourself enough
							time to login and touch base with the Limelight lead technician prior to respondent login.
						</span>
					)
				},
				{
					checked: false,
					label: (
						<span>
							There will be a "backroom chatbox" available to use at all times located on the right side of the
							platform. Please use this to communicate amongst the technicians, hosts, and viewers as desired.
						</span>
					)
				}
			])
		} else {
			setFormState([
				{
					checked: false,
					label: (
						<span>
							<strong>
								<u>Do not</u>
							</strong>{" "}
							enable your webcam or microphone. They are disabled by default, so you won't need to do anything on
							arrival.
						</span>
					)
				},
				{
					checked: false,
					label: (
						<span>
							<strong>
								<u>Do not</u>
							</strong>{" "}
							attempt to manipulate the platform in any way. Everything you click{" "}
							<strong>
								<u>will be visible to everyone</u>
							</strong>{" "}
							in the room.
						</span>
					)
				},
				{
					checked: false,
					label: (
						<span>
							There will be a "backroom chatbox" available to use at all times located on the right side of the
							platform. Please use this to communicate amongst the technicians and viewers as desired.
						</span>
					)
				}
			])
		}
	}, [])

	return (
		<div className="page page--agree">
			<Navigation step={3} />
			<div className="content">
				<h1>Finally, please read through the following thoroughly.</h1>
				<div>Check each note to verify you've read it.</div>
				<div className="form">
					{formState.map((item, index) => (
						<div key={`form-item-${params.type}-${index}`} className="form-item">
							<div className="checkbox-container">
								<div
									className={`checkbox${item.checked ? " checked" : ""}`}
									onClick={() =>
										setFormState(pre =>
											pre.map((item, i) => ({
												...item,
												checked: i === index ? !item.checked : item.checked
											}))
										)
									}>
									{item.checked ? <Check className="checkmark" /> : ""}
								</div>
							</div>
							<div className="label">{item.label}</div>
						</div>
					))}
				</div>
				<a
					className={`btn enter-btn${!formState.every(item => item.checked) ? " disabled" : ""}`}
					href={!formState.every(item => item.checked) ? "#" : `https://limelight.adobeconnect.com/${params.code}`}
					target="_blank"
					rel="noopener noreferrer">
					Enter Room
				</a>
			</div>
		</div>
	)
}

export default Page

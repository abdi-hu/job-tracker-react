import { useState } from "react";
import { useParams } from "react-router-dom";
import Updates from "../../components/Updates/Updates";

const ApplicationPage = ({ applications }) => {
	const { id } = useParams();
	const application = applications.filter((job) => job._id === id)[0];
	const [textArea, setTextArea] = useState("");

	async function changeStatus() {
		const _id = id;
		await fetch(`http://localhost:3001/api/jobs/${_id}`, {
			method: "PUT",
			headers: {
				"Content-type": "Application/json",
			},
			body: JSON.stringify({ open: false }),
		});
	}

	async function addUpdate(e) {
		e.preventDefault();
		const _id = id;
		const newUpdate = [...application.updates, textArea];
		console.log(textArea);

		await fetch(`http://localhost:3001/api/jobs/${_id}`, {
			method: "POST",
			headers: {
				"Content-type": "Application/json",
			},
			body: JSON.stringify({ updates: newUpdate }),
		});
		setTextArea("");
	}
	function handleUpdates(e) {
		setTextArea(e.target.value);
	}
	return (
		<div>
			<div>
				<p>Company: {application?.companyName}</p>
				<p>Title: {application?.title}</p>
				<p>Site Applied: {application?.siteApplied}</p>
				<p>Email: {application?.email}</p>
				{application?.open && (
					<button onClick={changeStatus} name="open">
						Close Application
					</button>
				)}
				<Updates updates={application?.updates} />
				<form onSubmit={addUpdate}>
					<textarea
						name="updates"
						value={textArea}
						cols="30"
						rows="5"
						onChange={handleUpdates}
					></textarea>
					<input type="submit" value="Submit" />
				</form>
			</div>
		</div>
	);
};

export default ApplicationPage;

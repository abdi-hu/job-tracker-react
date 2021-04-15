import { useState } from "react";
import { useParams } from "react-router-dom";
import Updates from "../../components/Updates/Updates";

const ApplicationPage = ({ applications }) => {
	const { id } = useParams();
	const application = applications.filter((job) => job._id === id)[0];
	const [textArea, setTextArea] = useState("");

	async function changeStatus() {
		const _id = id;
		await fetch(`https://job-tracker-react.herokuapp.com/api/jobs/${_id}`, {
			method: "PUT",
			headers: {
				"Content-type": "Application/json",
			},
			body: JSON.stringify({ open: false }),
		});
		window.location.reload();
	}

	async function addUpdate(e) {
		e.preventDefault();
		const _id = id;
		const newUpdate = [...application.updates, textArea];

		await fetch(`https://job-tracker-react.herokuapp.com/api/jobs/${_id}`, {
			method: "POST",
			headers: {
				"Content-type": "Application/json",
			},
			body: JSON.stringify({ updates: newUpdate }),
		});
		setTextArea("");
		window.location.reload();
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
					<input type="submit" value="Submit" className="btn btn-primary" />
				</form>
			</div>
		</div>
	);
};

export default ApplicationPage;

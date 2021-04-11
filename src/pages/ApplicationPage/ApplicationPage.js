import { useParams } from "react-router-dom";

const ApplicationPage = ({ applications }) => {
	const { id } = useParams();
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
	return (
		<div>
			{applications
				.filter((job) => job._id === id)
				.map((job, idx) => (
					<div key={idx}>
						<p>Company: {job.companyName}</p>
						<p>Title: {job.title}</p>
						<p>Site Applied: {job.siteApplied}</p>
						<p>Email: {job.email}</p>

						{job.open && (
							<button onClick={changeStatus} name="open">
								Close Application
							</button>
						)}
					</div>
				))}
		</div>
	);
};
export default ApplicationPage;

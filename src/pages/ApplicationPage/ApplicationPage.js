import { useParams } from "react-router-dom";
const ApplicationPage = ({ applications }) => {
	const { id } = useParams();
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
					</div>
				))}
		</div>
	);
};
export default ApplicationPage;

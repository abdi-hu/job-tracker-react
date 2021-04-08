import { Link } from "react-router-dom";
const ApplicationList = (props) => (
	<div className="applicationList">
		<h3>Open Applications</h3>
		{props.applications.map((data, idx) => {
			if (data.open) {
				return (
					<ul>
						<Link to={`/application/${data._id}`}>{data.companyName}</Link>
					</ul>
				);
			}
		})}
		<h3>Closed Applications</h3>
		{props.applications.map((data, idx) => {
			if (!data.open) {
				return (
					<ul>
						<li key={idx}>
							<Link to={`/application/${data._id}`}>{data.companyName}</Link>
						</li>
					</ul>
				);
			}
		})}
	</div>
);

export default ApplicationList;

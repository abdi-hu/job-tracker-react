import { Link } from "react-router-dom";
const ApplicationList = (props) => (
	<div className="applicationList">
		<h3>Open Applications</h3>
		<div className="open-jobs">
			{props.applications.map((data, idx) => {
				if (data.open) {
					return (
						<Link key={idx} to={`/application/${data._id}`}>
							{`${data.dateApplied} ${data.companyName}`}
						</Link>
					);
				}
			})}
		</div>

		<h3>Closed Applications</h3>
		<div className="open-jobs">
			{props.applications.map((data, idx) => {
				if (!data.open) {
					return (
						<Link key={idx} to={`/application/${data._id}`}>
							{`${data.dateApplied} ${data.companyName}`}
						</Link>
					);
				}
			})}
		</div>
	</div>
);

export default ApplicationList;

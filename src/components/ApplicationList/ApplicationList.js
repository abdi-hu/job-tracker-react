import { Link } from "react-router-dom";
const ApplicationList = ({ applications }) => {
	const closedApps = applications.filter((closed) => closed.open === false);
	const openApps = applications.filter((closed) => closed.open === true);

	return (
		<div className="applicationList">
			<h3>Open Applications</h3>
			<div className="open-jobs">
				{openApps.map((data, idx) => {
					return (
						<Link
							className="app-links"
							key={idx}
							to={`/application/${data._id}`}
						>
							{`${data.dateApplied} ${data.companyName}`}
						</Link>
					);
				})}
			</div>

			<h3>Closed Applications</h3>
			<div className="open-jobs">
				{closedApps.map((data, idx) => {
					return (
						<Link
							className="app-links"
							key={idx}
							to={`/application/${data._id}`}
						>
							{`${data.dateApplied} ${data.companyName}`}
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default ApplicationList;

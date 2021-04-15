import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Collapse } from "react-bootstrap";

const ApplicationList = ({ applications }) => {
	const closedApps = applications.filter((closed) => closed?.open === false);
	const openApps = applications.filter((closed) => closed?.open === true);
	const [open, setOpen] = useState(false);
	const [closed, setClosed] = useState(false);
	return (
		<div className="applicationList">
			<Button
				onClick={() => setOpen(!open)}
				aria-controls="open-apps"
				aria-expanded={open}
				className="btn btn-secondary"
			>
				Open Applications
			</Button>
			<Collapse in={open}>
				<div id="open-apps" className="open-jobs">
					{openApps.map((data, idx) => {
						return (
							<Link
								className="app-links"
								key={idx}
								to={`/application/${data._id}`}
							>
								<div>{`${new Date(data.dateApplied).toDateString()} `}</div>
								<div>{`${data.companyName}: ${data.title}`}</div>
							</Link>
						);
					})}
				</div>
			</Collapse>
			<Button
				onClick={() => setClosed(!closed)}
				aria-controls="closed-apps"
				aria-expanded={closed}
				className="btn btn-secondary"
			>
				Closed Applications
			</Button>
			<Collapse in={closed}>
				<div id="closed-apps" className="open-jobs">
					{closedApps.map((data, idx) => {
						return (
							<Link
								className="app-links"
								key={idx}
								to={`/application/${data._id}`}
							>
								<div>{`${new Date(data.dateApplied).toDateString()} `}</div>
								<div>{`${data.companyName}: ${data.title}`}</div>
							</Link>
						);
					})}
				</div>
			</Collapse>
		</div>
	);
};

export default ApplicationList;

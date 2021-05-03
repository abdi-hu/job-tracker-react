import { useState } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

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
		<div className="content details">
			<Button onClick={changeStatus} name="open" className="btn-danger">
				Close Application
			</Button>
			<Card>
				<Card.Body>
					<Card.Title>{application?.companyName}</Card.Title>
					<Card.Subtitle className="mb-2 text-muted">
						{`${application?.title} ${application?.location}`}
					</Card.Subtitle>
					<Card.Subtitle className="mb-2 text-muted">
						{new Date(application?.dateApplied).toDateString()}
					</Card.Subtitle>
					<Card.Text>{application?.description}</Card.Text>
					<Card.Text>Email: {application?.email}</Card.Text>
					<Card.Link href={`${application?.siteApplied}`}>
						Application Link
					</Card.Link>
				</Card.Body>
			</Card>
			<Card>
				<Card.Header>Updates:</Card.Header>
				<ListGroup variant="flush">
					{application?.updates.map((update, idx) => (
						<ListGroup.Item key={idx}>{update}</ListGroup.Item>
					))}
				</ListGroup>
			</Card>
			<Form onSubmit={addUpdate}>
				<Form.Group controlId="exampleForm.ControlTextarea1">
					<Form.Label>Updates:</Form.Label>
					<Form.Control
						as="textarea"
						rows={2}
						value={textArea}
						onChange={handleUpdates}
					/>
				</Form.Group>
				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		</div>
	);
};

export default ApplicationPage;

import Form from "../../components/Form/Form";

const HomePage = ({ handleChange, application, addJob, user }) => {
	return (
		<>
			{user ? (
				<Form
					handleChange={handleChange}
					application={application}
					addJob={addJob}
				/>
			) : (
				<div className="content welcome">
					<h1>Welcome Page</h1>
					<h1>Welcome Page</h1>
					<h1>Welcome Page</h1>
					<h1>Welcome Page</h1>
					<h1>Welcome Page</h1>
					<h1>Welcome Page</h1>
					<h1>Welcome Page</h1>
					<h1>Welcome Page</h1>
				</div>
			)}
		</>
	);
};

export default HomePage;

const HomePage = ({ handleChange, application, addJob, user }) => {
	return (
		<>
			{user && (
				<div className="appForm">
					<h1>Application Form</h1>
					<form onSubmit={addJob} className="mb-3">
						<label className="form-label">
							Company Name:
							<input
								type="text"
								className="form-control"
								name="companyName"
								value={application.companyName}
								onChange={handleChange}
							/>
						</label>

						<label className="form-label">
							Title:
							<input
								type="text"
								className="form-control"
								name="title"
								value={application.title}
								onChange={handleChange}
							/>
						</label>

						<label className="form-label">
							Date Applied:
							<input
								type="date"
								className="form-control"
								name="dateApplied"
								value={application.dateApplied}
								onChange={handleChange}
							/>
						</label>

						<label className="form-label">
							Location:
							<input
								type="text"
								className="form-control"
								name="location"
								value={application.location}
								onChange={handleChange}
							/>
						</label>

						<label className="form-label">
							Description:
							<textarea
								className="form-control"
								name="description"
								value={application.description}
								onChange={handleChange}
								cols="30"
								rows="10"
							></textarea>
						</label>

						<label className="form-label">
							Site Applied:
							<input
								type="text"
								className="form-control"
								name="siteApplied"
								value={application.siteApplied}
								onChange={handleChange}
							/>
						</label>

						<label className="form-label">
							email
							<input
								type="text"
								className="form-control"
								name="email"
								value={application.email}
								onChange={handleChange}
							/>
						</label>

						<button>ADD</button>
					</form>
				</div>
			)}
		</>
	);
};

export default HomePage;

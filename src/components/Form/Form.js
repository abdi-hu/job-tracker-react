const Form = ({ handleChange, application, addJob }) => {
	return (
		<>
			<div className="appForm content">
				<h1>Application Form</h1>
				<form onSubmit={addJob}>
					<label className="form-label">
						Company Name:
						<input
							type="text"
							className="form-control form-control-sm col-sm-10"
							name="companyName"
							value={application.companyName}
							onChange={handleChange}
						/>
					</label>

					<label className="form-label">
						Title:
						<input
							type="text"
							className="form-control form-control-sm col-sm-10"
							name="title"
							value={application.title}
							onChange={handleChange}
						/>
					</label>

					<label className="form-label">
						Date Applied:
						<input
							type="date"
							className="form-control form-control-sm col-sm-10"
							name="dateApplied"
							value={application.dateApplied}
							onChange={handleChange}
						/>
					</label>

					<label className="form-label">
						Location:
						<input
							type="text"
							className="form-control form-control-sm col-sm-10"
							name="location"
							value={application.location}
							onChange={handleChange}
						/>
					</label>

					<label className="form-label">
						Site Applied:
						<input
							type="text"
							className="form-control form-control-sm col-sm-10"
							name="siteApplied"
							value={application.siteApplied}
							onChange={handleChange}
						/>
					</label>

					<label className="form-label">
						email
						<input
							type="text"
							className="form-control form-control-sm col-sm-10"
							name="email"
							value={application.email}
							onChange={handleChange}
						/>
					</label>

					<label className="form-label">
						Description:
						<textarea
							className="form-control form-control-sm col-sm-10"
							name="description"
							value={application.description}
							onChange={handleChange}
							cols="50"
							rows="5"
						></textarea>
					</label>

					<button
						type="submit"
						className="btn btn-primary form-control-sm w-25"
					>
						ADD
					</button>
				</form>
			</div>
		</>
	);
};

export default Form;

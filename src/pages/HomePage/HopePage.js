const HomePage = (props) => (
	<div className="appForm">
		<h1>Application Form</h1>
		<form action="" className="mb-3">
			<label htmlFor="" className="form-label">
				Company Name:
				<input type="text" className="form-control" />
			</label>
			<label htmlFor="" className="form-label">
				Title:
				<input type="text" className="form-control" />
			</label>
			<label htmlFor="" className="form-label">
				Location:
				<input type="text" className="form-control" />
			</label>
			<label htmlFor="" className="form-label">
				Email:
				<input type="text" className="form-control" />
			</label>
			<label htmlFor="" className="form-label">
				Date Applied:
				<input type="text" className="form-control" />
			</label>
			<button>ADD</button>
		</form>
	</div>
);

export default HomePage;

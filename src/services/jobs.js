const getAppData = () =>
	fetch("http://localhost:3001/api/jobs").then((res) => res.json());

export { getAppData };

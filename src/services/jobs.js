export function getAppData() {
	return fetch("http://localhost:3001/api/jobs").then((res) => res.json());
}

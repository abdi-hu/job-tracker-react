const BASE_URL = "https://job-tracker-react.herokuapp.com/api/jobs?";

function fetchJobs(userId) {
	return fetch(`${BASE_URL}uid=${userId}`).then((res) => res.json());
}
function createJob(newJob, userId) {
	fetch(BASE_URL, {
		method: "POST",
		headers: {
			"Content-type": "Application/json",
		},
		body: JSON.stringify({ ...newJob, uid: userId }),
	}).then((res) => res.json());
}
export { fetchJobs, createJob };

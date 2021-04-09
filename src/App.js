import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import ApplicationList from "./components/ApplicationList/ApplicationList";
import { getAppData } from "./services/jobs";
import HomePage from "./pages/HomePage/HopePage";
import ApplicationPage from "./pages/ApplicationPage/ApplicationPage";
import { Route, Switch } from "react-router-dom";

function App() {
	const [state, setState] = useState({
		jobs: [],
		newJob: {
			companyName: "",
			title: "",
			dateApplied: "",
			location: "",
			description: "",
			siteApplied: "",
			email: "",
			updates: [],
			open: true,
		},
	});
	async function getJobs() {
		const jobs = await getAppData();
		setState((prevState) => ({
			...prevState,
			jobs,
		}));
	}
	useEffect(() => {
		getJobs();
	}, []);
	async function addJob(e) {
		e.preventDefault();
		console.log(state.newJob);

		const job = await fetch("http://localhost:3001/api/jobs", {
			method: "POST",
			header: {
				"Content-type": "Application/json",
			},
			body: JSON.stringify({ newJob: state.newJob }),
		}).then((res) => res.json());

		setState((prevState) => ({
			...prevState,
			jobs: [...prevState.jobs, job],
			newJob: {
				companyName: "",
				title: "",
				dateApplied: "",
				location: "",
				description: "",
				siteApplied: "",
				email: "",
				updates: [],
				open: true,
			},
		}));
	}
	function handleChange(e) {
		setState((prevState) => ({
			...prevState,
			newJob: {
				...prevState.newJob,
				[e.target.name]: e.target.value,
			},
		}));
	}
	return (
		<div className="App">
			<Header />
			<div className="content">
				<ApplicationList applications={state.jobs} />
				<Switch>
					<Route
						exact
						path="/"
						render={() => (
							<HomePage
								handleChange={handleChange}
								application={state.newJob}
								addJob={addJob}
							/>
						)}
					/>
					<Route
						path="/application/:id"
						render={() => <ApplicationPage applications={state.jobs} />}
					/>
				</Switch>
			</div>
		</div>
	);
}

export default App;

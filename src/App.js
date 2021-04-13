import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import ApplicationList from "./components/ApplicationList/ApplicationList";
import HomePage from "./pages/HomePage/HopePage";
import ApplicationPage from "./pages/ApplicationPage/ApplicationPage";
import { Route, Switch } from "react-router-dom";
import { auth } from "./services/firebase";

function App() {
	const [state, setState] = useState({
		user: null,
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
	useEffect(() => {
		async function getJobs() {
			if (!state.user) return;
			try {
				const jobs = await fetch(
					`http://localhost:3001/api/jobs?uid=${state.user.uid}`
				).then((res) => res.json());
				setState((prevState) => ({
					...prevState,
					jobs,
				}));
			} catch (error) {
				console.log(error);
			}
		}
		getJobs();

		auth.onAuthStateChanged((user) => {
			if (user) {
				setState((prevState) => ({
					...prevState,
					user,
				}));
			} else {
				setState((prevState) => ({
					...prevState,
					jobs: [],
					user,
				}));
			}
		});
	}, [state.user]);

	async function addJob(e) {
		if (!state.user) return;
		e.preventDefault();

		const job = await fetch("http://localhost:3001/api/jobs", {
			method: "POST",
			headers: {
				"Content-type": "Application/json",
			},
			body: JSON.stringify({ ...state.newJob, uid: state.user.uid }),
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
		window.location.reload();
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
			<Header user={state.user} />
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
								user={state.user}
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

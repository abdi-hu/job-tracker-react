import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import ApplicationList from "./components/ApplicationList/ApplicationList";
import HomePage from "./pages/HomePage/HopePage";
import ApplicationPage from "./pages/ApplicationPage/ApplicationPage";
import { Route, Switch } from "react-router-dom";
import { auth } from "./services/firebase";
import { fetchJobs, createJob } from "./services/api-service";
import Footer from "./components/Footer/Footer";

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
				const jobs = await fetchJobs(state.user.uid);
				setState((prevState) => ({
					...prevState,
					jobs,
				}));
			} catch (error) {
				console.log(error);
			}
		}
		getJobs();

		const cancelSubscription = auth.onAuthStateChanged((user) => {
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

		return function () {
			//cleanup function
			cancelSubscription();
		};
	}, [state.user]);

	async function addJob(e) {
		if (!state.user) return;
		e.preventDefault();
		console.log(state);
		const job = await createJob(state.newJob, state.user.uid);

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
			<Footer />
		</div>
	);
}

export default App;

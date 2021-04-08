import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import ApplicationList from "./components/ApplicationList/ApplicationList";
import { getAppData } from "./services/jobs";
import HomePage from "./pages/HomePage/HopePage";
import ApplicationPage from "./pages/ApplicationPage/ApplicationPage";
import { Route, Switch } from "react-router-dom";

function App() {
	const [state, setState] = useState([]);
	async function getJobs() {
		const data = await getAppData();
		setState(data);
	}
	useEffect(() => {
		getJobs();
	}, []);

	return (
		<div className="App">
			<Header />
			<div className="content">
				<ApplicationList applications={state} />
				<Switch>
					<Route exact path="/" render={() => <HomePage />} />
					<Route
						path="/application/:id"
						render={() => <ApplicationPage applications={state} />}
					/>
				</Switch>
			</div>
		</div>
	);
}

export default App;

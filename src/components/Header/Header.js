import { login, logout } from "../../services/firebase";

const Header = (props) => (
	<nav class="navbar" role="navigation" aria-label="main navigation">
		<div class="navbar-brand">Home Link</div>
		<div className="navbar-menu">
			<div className="navbar-item">
				<h1>Application Tracker</h1>
			</div>
		</div>
		<div class="navbar-end">
			<div className="navbar-item">
				{props.user ? (
					<div className="button" onClick={logout}>
						<p>logout</p>
					</div>
				) : (
					<div className="button" onClick={login}>
						<p>login</p>
					</div>
				)}
			</div>
		</div>
	</nav>
);
export default Header;

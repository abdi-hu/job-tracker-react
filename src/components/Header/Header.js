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
				<div className="button">
					<a href="">Login</a>
				</div>
				<div className="button">
					<a href="">Logout</a>
				</div>
			</div>
		</div>
	</nav>
);
export default Header;

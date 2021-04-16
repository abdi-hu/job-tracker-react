import { login, logout } from "../../services/firebase";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const Header = (props) => (
	<>
		<Navbar
			bg="dark"
			variant="dark"
			className="nav justify-content-space-around sticky-top"
		>
			<Nav className="container-fluid">
				<Navbar.Brand href="/">
					<img
						src="/hand-shake.png"
						width="40"
						height="40"
						className="d-inline-block align-top"
						alt="React Bootstrap logo"
					/>
				</Navbar.Brand>

				<Nav.Item>
					<Nav.Link href="/">Application Tracker</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					{props.user ? (
						<div className="user-details">
							<p>Welcome, {props.user.displayName}</p>
							<img src={props.user.photoURL} alt={props.user.displayName} />
							<Nav.Link onClick={logout}>Logout</Nav.Link>
						</div>
					) : (
						<Nav.Link onClick={login}>Login</Nav.Link>
					)}
				</Nav.Item>
			</Nav>
		</Navbar>
	</>
);
export default Header;

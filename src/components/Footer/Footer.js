import github from "./github.png";
import linkedin from "./linkedin.png";
const Footer = (props) => (
	<footer>
		<p>&copy; Created by Abdi Hussein</p>

		<a href="https://github.com/abdi-hu/job-tracker-react">
			<img src={github} width="30" height="30" alt="Github Logo" />
		</a>
		<a href="https://www.linkedin.com/in/abdisamad-hussein/">
			<img src={linkedin} width="30" height="30" alt="LinkedIn Logo" />
		</a>
	</footer>
);

export default Footer;

import styles from "../styles/NavBar.module.css";
import { Link } from "react-router";

function NavBar() {
	return (
		<header className={styles.headerApp}>
			<nav>
				<Link to="/" aria-label="Go back to home page">
					<div className={styles.logo}></div>
				</Link>
			</nav>
		</header>
	);
}

export default NavBar;

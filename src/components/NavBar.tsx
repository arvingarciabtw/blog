import styles from "../styles/NavBar.module.css";
import { Link } from "react-router";

function NavBar() {
	return (
		<header className={styles.headerApp}>
			<nav>
				<Link to="/">
					<img
						src="/logo_optimized.webp"
						alt="Arvin Garcia profile picture"
						width="36px"
						height="36px"
					/>
				</Link>
			</nav>
		</header>
	);
}

export default NavBar;

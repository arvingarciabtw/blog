import styles from '../styles/NavBar.module.css';
import { Link } from 'react-router';

function NavBar() {
  return (
    <header className={styles.headerApp}>
      <nav>
        <Link to="/">
          <img src="/logo.webp" alt="Arvin Garcia profile picture" />
        </Link>
      </nav>
    </header>
  );
}

export default NavBar;

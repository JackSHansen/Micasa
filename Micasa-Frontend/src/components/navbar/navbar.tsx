import styles from './navbar.module.scss';

export default function Navbar() {
  return (
    <nav className={styles.navstyle}>
      <figure>
        <img className={styles.logo} src="logo.svg" alt="Micasa Logo" />
      </figure>

      <ul className={styles.navList}>
        <li>
          <a className={styles.navLink} href="/">
            Forside
          </a>
        </li>
        <li>
          <a className={styles.navLink} href="/boliger">
            Boliger
          </a>
        </li>
        <li>
          <a className={styles.navLink} href="/kontakt">
            Kontakt
          </a>
        </li>
        <li>
          <a className={styles.navLink} href="/login">
            Login
          </a>
        </li>
        <li>
          <input type="search" placeholder="Søg..." />
          <button>Søg</button>
        </li>
      </ul>
    </nav>
  );
}
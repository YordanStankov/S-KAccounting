import Link from "next/link";
import ui from "./ui.module.css";
import styles from "./site.module.css";

export default function SiteHeader() {
  return (
    <header className={styles.header}>
      <nav
        aria-label="Main navigation"
        className={`${ui.inner} ${styles.headerInner}`}
      >
        <ul className={`${styles.navList} ${styles.navLeft}`}>
          <li>
            <Link href="/">{"Home"}</Link>
          </li>
          <li>
            <Link href="/about">{"About us"}</Link>
          </li>
        </ul>
        <Link href="/" className={styles.logo} aria-label="S and K Accounting home">
          <span className={styles.logoMark}>{"S&K"}</span>
        </Link>
        <ul className={`${styles.navList} ${styles.navRight}`}>
          <li>
            <Link href="/professionals">{"Our team"}</Link>
          </li>
          <li>
            <Link href="/contact">{"Contacts"}</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

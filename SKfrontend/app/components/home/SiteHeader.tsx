import Link from "next/link";
import styles from "./home.module.css";

export default function SiteHeader() {
  return (
    <header className={styles.header}>
      <div className={`${styles.inner} ${styles.headerInner}`}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoMark}>{"S&K"}</span>
          <span className={styles.logoText}>{"Accounting"}</span>
        </Link>
        <nav aria-label="Main navigation">
          <ul className={styles.navList}>
            <li>
              <Link href="/">{"Home"}</Link>
            </li>
            <li>
              <Link href="/about">{"About us"}</Link>
            </li>
            <li>
              <Link href="/professionals">{"Our team"}</Link>
            </li>
            <li>
              <Link href="/contact">{"Contacts"}</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

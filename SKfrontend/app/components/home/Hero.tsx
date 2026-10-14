import styles from "./home.module.css";

export default function Hero() {
  return (
    <section
      className={styles.hero}
      role="img"
      aria-label="Accountant's desk with financial documents"
    >
      <div className={`${styles.inner} ${styles.heroInner}`}>
        <h1 className={styles.heroTitle}>{"Accounting services"}</h1>
      </div>
    </section>
  );
}

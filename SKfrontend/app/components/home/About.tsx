import Link from "next/link";
import styles from "./home.module.css";

export default function About() {
  return (
    <section className={styles.about} aria-labelledby="about-title">
      <div className={`${styles.inner} ${styles.aboutInner}`}>
        <h2 id="about-title" className={styles.sectionTitle}>
          {"Briefly about S and K Accounting"}
        </h2>
        <p>
          {
            "For 25 years we have served start-ups, established companies, individuals and non-profit organisations. Long-standing partners such as Megatron, Defense and Isha Asha rely on us for consistent, accurate and dependable accounting year after year."
          }
        </p>
        <p>
          {
            "Our goal is professional service at a fair price, with a personal approach to every client and clear communication on every business day."
          }
        </p>
        <Link href="/contact" className={styles.button}>
          {"Contact us"}
        </Link>
      </div>
    </section>
  );
}

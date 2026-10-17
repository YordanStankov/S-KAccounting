import Link from "next/link";
import ui from "../site/ui.module.css";
import styles from "./home.module.css";

export default function About() {
  return (
    <section className={`${ui.sectionAlt} theme-green`} aria-labelledby="about-title">
      <div className={`${ui.inner} ${styles.aboutInner}`}>
        <h2 id="about-title" className={ui.sectionTitle}>
          {"Briefly about S and K Accounting"}
        </h2>
        <p>
          {
            "For 25 years we have served start-ups, established companies and individuals. Long-standing partners such as Megatron, Defense, Isha Asha and Alin rely on us for consistent, accurate and dependable accounting year after year."
          }
        </p>
        <p>
          {
            "Our goal is professional service at a fair price, with a personal approach to every client and clear communication on every business day."
          }
        </p>
        <Link href="/contact" className={ui.button}>
          {"Contact us"}
        </Link>
      </div>
    </section>
  );
}

import { Calculator, Landmark } from "lucide-react";
import styles from "./home.module.css";

export default function Services() {
  return (
    <section className={styles.services} aria-labelledby="services-title">
      <div className={styles.inner}>
        <h2 id="services-title" className={styles.sectionTitle}>
          {"What services can we offer you?"}
        </h2>
        <ul className={styles.serviceList}>
          <li className={styles.serviceCard}>
            <span className={styles.serviceIcon}>
              <Calculator size={28} aria-hidden="true" />
            </span>
            <h3>{"Accounting services - firms and persons"}</h3>
            <p>
              {
                "Full accounting service or individual accounting procedures for companies, sole traders and private persons, with ongoing support throughout the year."
              }
            </p>
          </li>
          <li className={styles.serviceCard}>
            <span className={styles.serviceIcon}>
              <Landmark size={28} aria-hidden="true" />
            </span>
            <h3>{"Taxes and insurance"}</h3>
            <p>
              {
                "Tax returns, social security and health insurance contributions, handled with the care that comes from many years of experience."
              }
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}

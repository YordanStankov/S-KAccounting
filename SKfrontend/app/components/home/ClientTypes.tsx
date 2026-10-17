import { Rocket, Building2, UserRound } from "lucide-react";
import ui from "../site/ui.module.css";
import styles from "./home.module.css";

export default function ClientTypes() {
  return (
    <section className={styles.clients} aria-labelledby="clients-title">
      <div className={ui.inner}>
        <h2 id="clients-title" className={ui.sectionTitle}>
          {"Who we work with"}
        </h2>
        <p className={styles.sectionLead}>
          {
            "From first-time founders to long-established companies, we shape our service around you."
          }
        </p>
        <ul className={styles.clientGrid}>
          <li className={styles.client}>
            <span className={styles.clientIcon}>
              <Rocket size={24} aria-hidden="true" />
            </span>
            <h3>{"Start-ups"}</h3>
            <p>{"Getting the books right from day one, so you can focus on growing the business."}</p>
          </li>
          <li className={styles.client}>
            <span className={styles.clientIcon}>
              <Building2 size={24} aria-hidden="true" />
            </span>
            <h3>{"Established companies"}</h3>
            <p>{"Full accounting service and year-round support for firms with busy day-to-day operations."}</p>
          </li>
          <li className={styles.client}>
            <span className={styles.clientIcon}>
              <UserRound size={24} aria-hidden="true" />
            </span>
            <h3>{"Individual clients"}</h3>
            <p>{"Tax returns and social and health insurance contributions, handled with care."}</p>
          </li>
        </ul>
      </div>
    </section>
  );
}

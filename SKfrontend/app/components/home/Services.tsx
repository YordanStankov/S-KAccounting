import { Calculator, Landmark } from "lucide-react";
import ui from "../site/ui.module.css";

export default function Services() {
  return (
    <section className={ui.section} aria-labelledby="services-title">
      <div className={ui.inner}>
        <h2 id="services-title" className={ui.sectionTitle}>
          {"What services can we offer you?"}
        </h2>
        <ul className={ui.cardGrid}>
          <li className={ui.card}>
            <span className={ui.cardIcon}>
              <Calculator size={28} aria-hidden="true" />
            </span>
            <h3>{"Accounting services - firms and persons"}</h3>
            <p>
              {
                "Full accounting service or individual accounting procedures for companies, sole traders and private persons, with ongoing support throughout the year."
              }
            </p>
          </li>
          <li className={ui.card}>
            <span className={ui.cardIcon}>
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

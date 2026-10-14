import { Award, ShieldCheck, UserRound, Eye } from "lucide-react";
import PageHero from "../components/site/PageHero";
import ui from "../components/site/ui.module.css";
import styles from "./page.module.css";

function Intro() {
  return (
    <section className={ui.section} aria-labelledby="who-we-are">
      <div className={ui.inner}>
        <h2 id="who-we-are" className={ui.sectionTitle}>
          {"Who we are"}
        </h2>
        <div className={styles.intro}>
          <p>
            {
              "S and K Accounting is an accounting practice in Sofia that looks after the books, taxes and insurance of companies, sole traders and private persons."
            }
          </p>
          <p>
            {
              "We combine decades of hands-on experience with a personal approach, so every client knows exactly where their finances stand."
            }
          </p>
        </div>
        <ul className={styles.stats}>
          <li>
            <strong>{"25"}</strong>
            <span>{"years of experience"}</span>
          </li>
          <li>
            <strong>{"2"}</strong>
            <span>{"core service areas"}</span>
          </li>
          <li>
            <strong>{"5"}</strong>
            <span>{"business days a week, always reachable"}</span>
          </li>
        </ul>
      </div>
    </section>
  );
}

function Values() {
  return (
    <section className={ui.sectionAlt} aria-labelledby="values-title">
      <div className={ui.inner}>
        <h2 id="values-title" className={ui.sectionTitle}>
          {"Our values"}
        </h2>
        <ul className={ui.cardGrid}>
          <li className={ui.card}>
            <span className={ui.cardIcon}>
              <Award size={28} aria-hidden="true" />
            </span>
            <h3>{"Experience"}</h3>
            <p>
              {
                "With 25 years of professional, hands-on accounting experience, we have supported businesses through growth, audits, and ever-changing financial regulations."
              }
            </p>
          </li>
          <li className={ui.card}>
            <span className={ui.cardIcon}>
              <ShieldCheck size={28} aria-hidden="true" />
            </span>
            <h3>{"Reliability"}</h3>
            <p>
              {
                "Our reliability is proven through long-standing partnerships with established organizations such as Megatron, Defense, and Isha Asha, who rely on us year after year."
              }
            </p>
          </li>
          <li className={ui.card}>
            <span className={ui.cardIcon}>
              <UserRound size={28} aria-hidden="true" />
            </span>
            <h3>{"Personalized approach"}</h3>
            <p>
              {
                "We work directly with individual clients, taking the time to understand each person's unique financial situation rather than offering one-size-fits-all solutions."
              }
            </p>
          </li>
          <li className={ui.card}>
            <span className={ui.cardIcon}>
              <Eye size={28} aria-hidden="true" />
            </span>
            <h3>{"Transparency"}</h3>
            <p>
              {
                "We believe transparency is built through consistent communication, reaching our clients every business day with no hidden surprises."
              }
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About us"
        description="Twenty-five years of accounting, taxes and insurance for firms and persons."
      />
      <Intro />
      <Values />
    </>
  );
}

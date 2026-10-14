import Link from "next/link";
import { Phone, Mail } from "lucide-react";
import PageHero from "../components/site/PageHero";
import ui from "../components/site/ui.module.css";
import styles from "./page.module.css";

function Team() {
  return (
    <section className={ui.section} aria-labelledby="team-title">
      <div className={ui.inner}>
        <h2 id="team-title" className={ui.sectionTitle}>
          {"Meet our professionals"}
        </h2>
        <ul className={ui.cardGrid}>
          <li className={`${ui.card} ${styles.member}`}>
            <span className={styles.avatar} aria-hidden="true">
              {"SK"}
            </span>
            <h3>{"Svetlana Kostova"}</h3>
            <p className={styles.role}>{"Accountant"}</p>
            <div className={styles.links}>
              <a href="tel:+359881112222" className={ui.contactLink}>
                <Phone size={18} aria-hidden="true" />
                {"+359 88 111 2222"}
              </a>
              <a href="mailto:svetlana@sk-accounting.bg" className={ui.contactLink}>
                <Mail size={18} aria-hidden="true" />
                {"svetlana@sk-accounting.bg"}
              </a>
            </div>
          </li>
          <li className={`${ui.card} ${styles.member}`}>
            <span className={styles.avatar} aria-hidden="true">
              {"KI"}
            </span>
            <h3>{"Krasimir Ivanov"}</h3>
            <p className={styles.role}>{"Accountant"}</p>
            <div className={styles.links}>
              <a href="tel:+359883334444" className={ui.contactLink}>
                <Phone size={18} aria-hidden="true" />
                {"+359 88 333 4444"}
              </a>
              <a href="mailto:krasimir@sk-accounting.bg" className={ui.contactLink}>
                <Mail size={18} aria-hidden="true" />
                {"krasimir@sk-accounting.bg"}
              </a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

function JoinCta() {
  return (
    <section className={ui.sectionAlt} aria-labelledby="work-with-us">
      <div className={`${ui.inner} ${styles.cta}`}>
        <h2 id="work-with-us" className={ui.sectionTitle}>
          {"Work with our team"}
        </h2>
        <p>
          {
            "Tell us about your company or personal finances and the right specialist will get back to you within one business day."
          }
        </p>
        <Link href="/contact" className={ui.button}>
          {"Contact us"}
        </Link>
      </div>
    </section>
  );
}

export default function ProfessionalsPage() {
  return (
    <>
      <PageHero
        title="Our team"
        description="Experienced accountants who know your books and answer your calls."
      />
      <Team />
      <JoinCta />
    </>
  );
}

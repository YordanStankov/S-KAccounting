import Link from "next/link";
import { Phone, PhoneCall, Clock, FolderCheck } from "lucide-react";
import PageHero from "../components/site/PageHero";
import ui from "../components/site/ui.module.css";
import styles from "./page.module.css";

function Team() {
  return (
    <section className={ui.section} aria-labelledby="team-title">
      <div className={ui.inner}>
        <div className={styles.intro}>
          <span className={styles.eyebrow}>{"Meet the team"}</span>
          <h2 id="team-title">{"The people behind your books"}</h2>
          <p>
            {
              "When you work with S and K Accounting you always know who is looking after your finances. Call your accountant directly whenever you need them."
            }
          </p>
        </div>
        <ul className={styles.team}>
          <li className={styles.member}>
            <div className={styles.memberBand} aria-hidden="true" />
            <span className={styles.avatar} aria-hidden="true">
              {"DS"}
            </span>
            <h3>{"Daniela Stankova"}</h3>
            <p className={styles.memberNote}>
              {"Accounting services, taxes and insurance for firms and individual clients."}
            </p>
            <a href="tel:+359888214363" className={styles.phone}>
              <Phone size={18} aria-hidden="true" />
              {"+359 88 821 4363"}
            </a>
          </li>
          <li className={styles.member}>
            <div className={styles.memberBand} aria-hidden="true" />
            <span className={styles.avatar} aria-hidden="true">
              {"M"}
            </span>
            <h3>{"Marti"}</h3>
            <p className={styles.memberNote}>
              {"Accounting services, taxes and insurance for firms and individual clients."}
            </p>
            <a href="tel:+359884868513" className={styles.phone}>
              <Phone size={18} aria-hidden="true" />
              {"+359 88 486 8513"}
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

function WhatToExpect() {
  return (
    <section className={ui.sectionAlt} aria-labelledby="expect-title">
      <div className={ui.inner}>
        <h2 id="expect-title" className={ui.sectionTitle}>
          {"What you can expect"}
        </h2>
        <ul className={styles.features}>
          <li className={styles.feature}>
            <span className={styles.featureIcon}>
              <PhoneCall size={26} aria-hidden="true" />
            </span>
            <h3>{"A direct line"}</h3>
            <p>
              {"No call centres. You speak with the accountant who handles your case."}
            </p>
          </li>
          <li className={styles.feature}>
            <span className={styles.featureIcon}>
              <Clock size={26} aria-hidden="true" />
            </span>
            <h3>{"Quick answers"}</h3>
            <p>
              {"We are reachable every business day and reply within one business day."}
            </p>
          </li>
          <li className={styles.feature}>
            <span className={styles.featureIcon}>
              <FolderCheck size={26} aria-hidden="true" />
            </span>
            <h3>{"Deadlines handled"}</h3>
            <p>
              {"Filings, declarations and payments are tracked so you never miss a date."}
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}

function CallToAction() {
  return (
    <section className={styles.cta} aria-labelledby="team-cta">
      <div className={`${ui.inner} ${styles.ctaInner}`}>
        <div>
          <h2 id="team-cta">{"Work with our team"}</h2>
          <p>{"Tell us about your company or personal finances and we will get back to you."}</p>
        </div>
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
      <WhatToExpect />
      <CallToAction />
    </>
  );
}

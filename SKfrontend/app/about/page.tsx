import Link from "next/link";
import { Award, ShieldCheck, UserRound, Eye, Check } from "lucide-react";
import PageHero from "../components/site/PageHero";
import ui from "../components/site/ui.module.css";
import styles from "./page.module.css";

function Intro() {
  return (
    <section className={ui.section} aria-labelledby="who-we-are">
      <div className={`${ui.inner} ${styles.introGrid}`}>
        <div className={styles.introText}>
          <span className={styles.eyebrow}>{"Who we are"}</span>
          <h2 id="who-we-are">{"Accounting you can rely on, year after year"}</h2>
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
          <ul className={styles.checks}>
            <li>
              <span className={styles.checkIcon}>
                <Check size={14} aria-hidden="true" />
              </span>
              {"Bookkeeping for firms and persons"}
            </li>
            <li>
              <span className={styles.checkIcon}>
                <Check size={14} aria-hidden="true" />
              </span>
              {"Tax returns, social and health insurance"}
            </li>
            <li>
              <span className={styles.checkIcon}>
                <Check size={14} aria-hidden="true" />
              </span>
              {"A dedicated accountant who knows your case"}
            </li>
          </ul>
        </div>
        <div className={styles.photoWrap}>
          <div
            className={styles.photo}
            role="img"
            aria-label="Desk with a calculator, binders, notebook and glasses"
          />
          <div className={styles.badge}>
            <strong>{"25"}</strong>
            <span>{"years of experience"}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className={styles.statsBand} aria-label="S and K Accounting in numbers">
      <div className={ui.inner}>
        <ul className={styles.stats}>
          <li>
            <strong>{"25+"}</strong>
            <span>{"years in practice"}</span>
          </li>
          <li>
            <strong>{"2"}</strong>
            <span>{"core service areas"}</span>
          </li>
          <li>
            <strong>{"5"}</strong>
            <span>{"days a week, always reachable"}</span>
          </li>
          <li>
            <strong>{"100%"}</strong>
            <span>{"personal approach"}</span>
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
        <p className={styles.sectionLead}>
          {"Four principles guide how we work with every client, large or small."}
        </p>
        <ul className={styles.values}>
          <li className={styles.value}>
            <span className={styles.valueIcon}>
              <Award size={26} aria-hidden="true" />
            </span>
            <div>
              <h3>{"Experience"}</h3>
              <p>
                {
                  "With 25 years of professional, hands-on accounting experience, we have supported businesses through growth, audits, and ever-changing financial regulations."
                }
              </p>
            </div>
          </li>
          <li className={styles.value}>
            <span className={styles.valueIcon}>
              <ShieldCheck size={26} aria-hidden="true" />
            </span>
            <div>
              <h3>{"Reliability"}</h3>
              <p>
                {
                  "Our reliability is proven through long-standing partnerships with established organizations such as Megatron, Defense, and Isha Asha, who rely on us year after year."
                }
              </p>
            </div>
          </li>
          <li className={styles.value}>
            <span className={styles.valueIcon}>
              <UserRound size={26} aria-hidden="true" />
            </span>
            <div>
              <h3>{"Personalized approach"}</h3>
              <p>
                {
                  "We work directly with individual clients, taking the time to understand each person's unique financial situation rather than offering one-size-fits-all solutions."
                }
              </p>
            </div>
          </li>
          <li className={styles.value}>
            <span className={styles.valueIcon}>
              <Eye size={26} aria-hidden="true" />
            </span>
            <div>
              <h3>{"Transparency"}</h3>
              <p>
                {
                  "We believe transparency is built through consistent communication, reaching our clients every business day with no hidden surprises."
                }
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

function HowWeWork() {
  return (
    <section className={ui.section} aria-labelledby="how-we-work">
      <div className={ui.inner}>
        <h2 id="how-we-work" className={ui.sectionTitle}>
          {"How we work"}
        </h2>
        <ol className={styles.steps}>
          <li className={styles.step}>
            <span className={styles.stepNumber} aria-hidden="true">
              {"01"}
            </span>
            <h3>{"Get to know you"}</h3>
            <p>
              {
                "We start with a conversation about your business or personal finances and what you need from us."
              }
            </p>
          </li>
          <li className={styles.step}>
            <span className={styles.stepNumber} aria-hidden="true">
              {"02"}
            </span>
            <h3>{"Set up your books"}</h3>
            <p>
              {
                "Your accountant organises your documents, deadlines and filings so nothing slips through the cracks."
              }
            </p>
          </li>
          <li className={styles.step}>
            <span className={styles.stepNumber} aria-hidden="true">
              {"03"}
            </span>
            <h3>{"Stay in touch"}</h3>
            <p>
              {
                "We keep you informed every step of the way and are reachable on every business day."
              }
            </p>
          </li>
        </ol>
      </div>
    </section>
  );
}

function CallToAction() {
  return (
    <section className={styles.cta} aria-labelledby="about-cta">
      <div className={`${ui.inner} ${styles.ctaInner}`}>
        <div>
          <h2 id="about-cta">{"Ready to hand over the paperwork?"}</h2>
          <p>{"Tell us what you need and we will get back to you within one business day."}</p>
        </div>
        <Link href="/contact" className={ui.button}>
          {"Contact us"}
        </Link>
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
      <Stats />
      <Values />
      <HowWeWork />
      <CallToAction />
    </>
  );
}

import { Phone, Mail, MapPin, Clock, Users, ArrowUpRight } from "lucide-react";
import PageHero from "../components/site/PageHero";
import ui from "../components/site/ui.module.css";
import styles from "./page.module.css";

function ContactDetails() {
  return (
    <section className={ui.section} aria-labelledby="details-title">
      <div className={ui.inner}>
        <div className={styles.intro}>
          <span className={styles.eyebrow}>{"Get in touch"}</span>
          <h2 id="details-title">{"Contact details"}</h2>
          <p>
            {
              "Have a question about your books, taxes or insurance? Call, write or drop by the office and we will be glad to help."
            }
          </p>
        </div>
        <ul className={styles.tiles}>
          <li>
            <a href="tel:+359881234567" className={styles.tile}>
              <span className={styles.tileIcon}>
                <Phone size={26} aria-hidden="true" />
              </span>
              <h3>{"Call us"}</h3>
              <span className={styles.tileValue}>{"+359 88 123 4567"}</span>
              <span className={styles.tileHint}>{"Mon – Fri, 8:30 – 17:30"}</span>
            </a>
          </li>
          <li>
            <a href="mailto:office@sk-accounting.bg" className={styles.tile}>
              <span className={styles.tileIcon}>
                <Mail size={26} aria-hidden="true" />
              </span>
              <h3>{"Email us"}</h3>
              <span className={styles.tileValue}>{"office@sk-accounting.bg"}</span>
              <span className={styles.tileHint}>{"We reply within one business day"}</span>
            </a>
          </li>
          <li>
            <div className={styles.tile}>
              <span className={styles.tileIcon}>
                <MapPin size={26} aria-hidden="true" />
              </span>
              <h3>{"Visit us"}</h3>
              <address className={styles.tileValue}>{"Sofia, Geo Milev, Hemus 62 - 64"}</address>
              <span className={styles.tileHint}>{"See the map below"}</span>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

function WorkingHours() {
  return (
    <section className={styles.panel} aria-labelledby="hours-title">
      <div className={styles.panelHeading}>
        <span className={styles.panelIcon}>
          <Clock size={22} aria-hidden="true" />
        </span>
        <h2 id="hours-title">{"Working hours"}</h2>
      </div>
      <dl className={styles.hours}>
        <div className={styles.hoursRow}>
          <dt>{"Monday – Friday"}</dt>
          <dd>{"8:30 – 17:30"}</dd>
        </div>
        <div className={styles.hoursRow}>
          <dt>{"Saturday"}</dt>
          <dd className={styles.closed}>{"Closed"}</dd>
        </div>
        <div className={styles.hoursRow}>
          <dt>{"Sunday"}</dt>
          <dd className={styles.closed}>{"Closed"}</dd>
        </div>
      </dl>
      <p className={styles.note}>
        {"Planning a visit? Call ahead so your accountant can set time aside for you."}
      </p>
    </section>
  );
}

function ProfessionalsContacts() {
  return (
    <section className={styles.panel} aria-labelledby="professionals-title">
      <div className={styles.panelHeading}>
        <span className={styles.panelIcon}>
          <Users size={22} aria-hidden="true" />
        </span>
        <h2 id="professionals-title">{"Our professionals"}</h2>
      </div>
      <ul className={styles.people}>
        <li className={styles.person}>
          <span className={styles.avatar} aria-hidden="true">
            {"DS"}
          </span>
          <div className={styles.personInfo}>
            <h3>{"Daniela Stankova"}</h3>
            <a href="tel:+359888214363" className={ui.contactLink}>
              <Phone size={16} aria-hidden="true" />
              {"+359 88 821 4363"}
            </a>
          </div>
        </li>
        <li className={styles.person}>
          <span className={styles.avatar} aria-hidden="true">
            {"M"}
          </span>
          <div className={styles.personInfo}>
            <h3>{"Marti"}</h3>
            <a href="tel:+359884868513" className={ui.contactLink}>
              <Phone size={16} aria-hidden="true" />
              {"+359 88 486 8513"}
            </a>
          </div>
        </li>
      </ul>
    </section>
  );
}

function OfficeMap() {
  return (
    <section className={styles.mapSection} aria-labelledby="map-title">
      <div className={ui.inner}>
        <h2 id="map-title" className={`${ui.sectionTitle} ${styles.mapTitle}`}>
          {"Our office"}
        </h2>
        <div className={styles.mapWrap}>
          <div className={styles.mapFrame}>
            <iframe
              title="Map of S and K Accounting office, Hemus 62 - 64, Geo Milev, Sofia"
              src="https://www.google.com/maps?q=Hemus+62-64,+Geo+Milev,+Sofia,+Bulgaria&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <div className={styles.mapCard}>
            <h3>{"S and K Accounting"}</h3>
            <address>{"Sofia, Geo Milev, Hemus 62 - 64"}</address>
            <a
              className={styles.mapLink}
              href="https://www.google.com/maps/search/?api=1&query=Hemus+62-64,+Geo+Milev,+Sofia,+Bulgaria"
              target="_blank"
              rel="noopener noreferrer"
            >
              {"Open in Google Maps"}
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contacts"
        description="Get in touch with us for accounting services and consultations."
      />
      <ContactDetails />
      <section className={ui.sectionAlt}>
        <div className={`${ui.inner} ${styles.grid}`}>
          <WorkingHours />
          <ProfessionalsContacts />
        </div>
      </section>
      <OfficeMap />
    </>
  );
}

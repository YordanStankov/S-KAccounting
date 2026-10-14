import { Phone, Mail, MapPin, Clock } from "lucide-react";
import PageHero from "../components/site/PageHero";
import ui from "../components/site/ui.module.css";
import styles from "./page.module.css";

function OfficeDetails() {
  return (
    <section className={styles.panel} aria-labelledby="office-title">
      <h2 id="office-title">{"Our office"}</h2>
      <ul className={styles.details}>
        <li className={ui.contactLink}>
          <MapPin size={18} aria-hidden="true" />
          <address className={styles.address}>
            {"Sofia, Geo Milev, Hemus 62 - 64"}
          </address>
        </li>
        <li>
          <a href="tel:+359881234567" className={ui.contactLink}>
            <Phone size={18} aria-hidden="true" />
            {"+359 88 123 4567"}
          </a>
        </li>
        <li>
          <a href="mailto:office@sk-accounting.bg" className={ui.contactLink}>
            <Mail size={18} aria-hidden="true" />
            {"office@sk-accounting.bg"}
          </a>
        </li>
        <li className={ui.contactLink}>
          <Clock size={18} aria-hidden="true" />
          {"Mon – Fri: 8:30 – 17:30"}
        </li>
      </ul>
    </section>
  );
}

function ProfessionalsContacts() {
  return (
    <section className={styles.panel} aria-labelledby="professionals-title">
      <h2 id="professionals-title">{"Our professionals"}</h2>
      <ul className={styles.people}>
        <li className={styles.person}>
          <h3>{"Svetlana Kostova"}</h3>
          <a href="tel:+359881112222" className={ui.contactLink}>
            <Phone size={18} aria-hidden="true" />
            {"+359 88 111 2222"}
          </a>
          <a href="mailto:svetlana@sk-accounting.bg" className={ui.contactLink}>
            <Mail size={18} aria-hidden="true" />
            {"svetlana@sk-accounting.bg"}
          </a>
        </li>
        <li className={styles.person}>
          <h3>{"Krasimir Ivanov"}</h3>
          <a href="tel:+359883334444" className={ui.contactLink}>
            <Phone size={18} aria-hidden="true" />
            {"+359 88 333 4444"}
          </a>
          <a href="mailto:krasimir@sk-accounting.bg" className={ui.contactLink}>
            <Mail size={18} aria-hidden="true" />
            {"krasimir@sk-accounting.bg"}
          </a>
        </li>
      </ul>
    </section>
  );
}

function OfficeMap() {
  return (
    <section className={ui.sectionAlt} aria-labelledby="map-title">
      <div className={ui.inner}>
        <h2 id="map-title" className={ui.sectionTitle}>
          {"Find us"}
        </h2>
        <div className={styles.mapFrame}>
          <iframe
            title="Map of S and K Accounting office, Hemus 62 - 64, Geo Milev, Sofia"
            src="https://www.google.com/maps?q=Hemus+62-64,+Geo+Milev,+Sofia,+Bulgaria&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
        <a
          className={styles.mapLink}
          href="https://www.google.com/maps/search/?api=1&query=Hemus+62-64,+Geo+Milev,+Sofia,+Bulgaria"
          target="_blank"
          rel="noopener noreferrer"
        >
          {"Open in Google Maps"}
        </a>
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
      <section className={ui.section}>
        <div className={`${ui.inner} ${styles.grid}`}>
          <OfficeDetails />
          <ProfessionalsContacts />
        </div>
      </section>
      <OfficeMap />
    </>
  );
}

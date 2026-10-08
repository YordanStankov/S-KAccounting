import styles from "./page.module.css";
import { placeholder } from "./placeholder";
import { lang } from "../language-setting";

const place = new placeholder();

function Hero() {
  const curr = place[lang];
  return (
    <section className={styles.hero}>
      <h1>{curr.Title}</h1>
      <p>{curr.Description}</p>
    </section>
  );
}

function CompanyInfo() {
  const curr = place[lang];
  return (
    <section className={styles.companyInfo}>
      <h2>{curr.CompanyInfoTitle}</h2>
      <div className={styles.companyCard}>
        <h3>{curr.CompanyName}</h3>
        <a href={`tel:${curr.CompanyPhoneNumber}`}>{curr.CompanyPhoneNumber}</a>
        <a href={`mailto:${curr.CompanyEmail}`}>{curr.CompanyEmail}</a>
      </div>
    </section>
  );
}

function ProfessionalsList() {
  const curr = place[lang];
  return (
    <section className={styles.professionals}>
      <h2>{curr.ProfessionalsTitle}</h2>
      <ul className={styles.professionalsList}>
        {curr.Professionals.map((professional) => (
          <li key={professional.email} className={styles.professionalItem}>
            <h3>{professional.name}</h3>
            <a href={`tel:${professional.phoneNumber}`}>{professional.phoneNumber}</a>
            <a href={`mailto:${professional.email}`}>{professional.email}</a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function ContactPage() {
  return (
    <div className={styles.container}>
      <Hero />
      <CompanyInfo />
      <ProfessionalsList />
    </div>
  );
}

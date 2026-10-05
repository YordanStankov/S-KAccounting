import styles from "./page.module.css";
import { placeholder } from "./placeholder";
import { lang } from "../language-setting";

const place = new placeholder();

function Hero() {
  const curr = place[lang];
  return (
    <section className={styles.hero}>
      <h1>{curr.About}</h1>
      <p>{curr.Description}</p>
    </section>
  );
}

function Values() {
  const curr = place[lang];
  return (
    <section className={styles.values}>
      <h2>{curr.ValuesTitle}</h2>
      <ul className={styles.valuesList}>
        {curr.Values.map((value) => (
          <li key={value.title} className={styles.valueItem}>
            <h3>{value.title}</h3>
            <p>{value.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <Hero />
      <Values />
    </div>
  );
}

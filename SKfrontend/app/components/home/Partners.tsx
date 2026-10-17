import ui from "../site/ui.module.css";
import styles from "./home.module.css";

export default function Partners() {
  return (
    <section className={styles.partners} aria-labelledby="partners-title">
      <div className={ui.inner}>
        <h2 id="partners-title" className={styles.partnersTitle}>
          {"Trusted by long-standing partners"}
        </h2>
        <ul className={styles.partnerList}>
          <li>{"Megatron"}</li>
          <li>{"Defense"}</li>
          <li>{"Isha Asha"}</li>
          <li>{"Alin"}</li>
        </ul>
      </div>
    </section>
  );
}

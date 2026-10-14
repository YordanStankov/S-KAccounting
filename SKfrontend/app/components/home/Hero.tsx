import ui from "../site/ui.module.css";
import styles from "./home.module.css";

export default function Hero() {
  return (
    <section
      className={styles.hero}
      role="img"
      aria-label="Hand near a laptop on an office desk"
    >
      <div className={`${ui.inner} ${styles.heroInner}`}>
        <h1 className={styles.heroTitle}>{"Accounting services"}</h1>
      </div>
    </section>
  );
}

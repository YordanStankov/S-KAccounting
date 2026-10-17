import ui from "./ui.module.css";
import styles from "./site.module.css";

interface PageHeroProps {
  title: string;
  description: string;
}

export default function PageHero({ title, description }: PageHeroProps) {
  return (
    <section className={styles.pageHero}>
      <div className={`${ui.inner} ${styles.pageHeroInner}`}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
}

import TopBar from "./TopBar";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import styles from "./site.module.css";

export default function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.shell}>
      <TopBar />
      <SiteHeader />
      <main className={styles.main}>{children}</main>
      <SiteFooter />
    </div>
  );
}

import TopBar from "./components/home/TopBar";
import SiteHeader from "./components/home/SiteHeader";
import Hero from "./components/home/Hero";
import Services from "./components/home/Services";
import About from "./components/home/About";
import SiteFooter from "./components/home/SiteFooter";
import styles from "./components/home/home.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <TopBar />
      <SiteHeader />
      <main>
        <Hero />
        <Services />
        <About />
      </main>
      <SiteFooter />
    </div>
  );
}

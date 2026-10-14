import Link from "next/link";
import ui from "./ui.module.css";
import styles from "./site.module.css";

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={`${ui.inner} ${styles.footerGrid}`}>
        <div>
          <h3>{"Services"}</h3>
          <ul>
            <li>{"Accounting services - firms and individual clients"}</li>
            <li>{"Taxes and insurance"}</li>
          </ul>
        </div>
        <div>
          <h3>{"Pages"}</h3>
          <ul>
            <li>
              <Link href="/about">{"About us"}</Link>
            </li>
            <li>
              <Link href="/professionals">{"Our team"}</Link>
            </li>
            <li>
              <Link href="/contact">{"Contacts"}</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3>{"Contacts"}</h3>
          <ul>
            <li>{"Sofia, Geo Milev, Hemus 62 - 64"}</li>
            <li>
              <a href="tel:+359881234567">{"+359 88 123 4567"}</a>
            </li>
            <li>
              <a href="mailto:office@sk-accounting.bg">
                {"office@sk-accounting.bg"}
              </a>
            </li>
            <li>{"Mon – Fri: 8:30 – 17:30"}</li>
          </ul>
        </div>
      </div>
      <p className={styles.copyright}>
        {"S and K Accounting. All rights reserved. ©2026"}
      </p>
    </footer>
  );
}

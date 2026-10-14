import { Phone, Mail, Clock } from "lucide-react";
import styles from "./home.module.css";

export default function TopBar() {
  return (
    <div className={styles.topBar} data-testid="top-bar">
      <div className={styles.inner}>
        <ul className={styles.topBarList}>
          <li>
            <a href="tel:+359881234567">
              <Phone size={14} aria-hidden="true" />
              <span>{"+359 88 123 4567"}</span>
            </a>
          </li>
          <li>
            <a href="mailto:office@sk-accounting.bg">
              <Mail size={14} aria-hidden="true" />
              <span>{"office@sk-accounting.bg"}</span>
            </a>
          </li>
          <li>
            <Clock size={14} aria-hidden="true" />
            <span>{"Mon – Fri: 8:30 – 17:30"}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

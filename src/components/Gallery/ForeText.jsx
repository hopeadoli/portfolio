import styles from "./gallery.module.css";
import { Link } from "react-router-dom";

export default function ForeText() {
  return (
    <div className={styles.QalissoText}>
      <p className={styles.comingSoonHeader}>Opening in Q2 2024</p>
      <p>
        The Gallery will <br /> house my paintings
      </p>
      <p className="link">
        <Link to="https://cnn.com" target="blank">
          Get to know when it opens
        </Link>
      </p>
    </div>
  );
}

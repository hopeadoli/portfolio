import styles from "./fortext.module.css";
import { Link } from "react-router-dom";

export default function ForeText() {
  return (
    <div className={styles.QalissoText}>
      <p className={styles.comingSoonHeader}>Opening in H2 2025</p>
      <p>
        The Gallery will <br /> house my paintings
      </p>
      <p className="link">
        <Link to="https://forms.gle/veX5b7kPEzH9XZ9S8" target="blank">
          Get to know when it opens
        </Link>
      </p>
    </div>
  );
}

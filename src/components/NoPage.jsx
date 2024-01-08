import { Link } from "react-router-dom";
import styles from "./Home/home.module.css";

export default function NoPage() {
  return (
    <div className={styles.netlifyAnnoying}>
      <h1>Haha error page wai</h1>
      <p>
        Go back <Link to="/">Home</Link> before someone thinks you've been
        kidnapped.
      </p>
    </div>
  );
}

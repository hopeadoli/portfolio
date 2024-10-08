import styles from "./herosection.module.css";
import { Link } from "react-router-dom";
import myImg from "./myImg.jpg";

export default function HeroSection() {
  return (
    <>
      <div className={styles.hero}>
        <h1 className={styles.mainHeader}>
          Hope <span>Adoli</span>
        </h1>
        <p className={styles.heroDesc}>
          Product designer, developer, volunteer
        </p>
      </div>
      <div className={styles.aboutMe}>
        <div className={styles.leftText}>
          <p className={styles.sectionHeader}>about</p>
          <p>
            Hi and welcome. My name is Hope Adoli (ar doh lee), a product
            designer currently based in Accra, Ghana. Over the past few years, I
            have worked alongside business leaders, startup founders and
            individuals to build digital products that users love and cherish.
          </p>

          <Link to="/about" className="link">
            <p>Learn more about me</p>
          </Link>
        </div>
        {<img src={myImg} className={styles.myImg}></img>}
      </div>
    </>
  );
}

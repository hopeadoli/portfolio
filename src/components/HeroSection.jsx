import styles from "./herosection.module.css";
// import { Link } from "react-router-dom";

export default function HeroSection() {
  function handleRoute(e) {
    e.preventDefault;
  }
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
            designer currently based in Accra, Ghana. Over the past 7+ years, I
            have worked alongside business leaders, startup founders and
            individuals to build digital products that users love and cherish.
          </p>

          <p className="link">Learn more about me</p>
        </div>
        <p className={styles.myImg}>x</p>
      </div>
    </>
  );
}

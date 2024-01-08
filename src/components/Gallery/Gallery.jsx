import ForeText from "./ForeText";
import Images from "./Images";
import { Helmet } from "react-helmet";
import styles from "./gallery.module.css";

export default function Gallery() {
  return (
    <div className={styles.body}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>The Yeʋekpɔme Gallery by Hope Adoli</title>
        <link rel="canonical" href="https://uxkafui.co" />
      </Helmet>
      <div className={styles.blankOverlay}></div>
      <ForeText />
      <Images />
    </div>
  );
}

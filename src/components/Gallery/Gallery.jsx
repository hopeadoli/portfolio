import ForeText from "./ForeText";
import Images from "./Images";
import { Helmet } from "react-helmet";
import styles from "./fortext.module.css";

export default function Gallery() {
  return (
    <div className={styles.body}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>The Yeʋekpɔme Gallery by Hope Adoli</title>
        <link rel="canonical" href="https://uxkafui.co/gallery" />

        <meta
          property="og:title"
          content="The Yeʋekpɔme Gallery by Hope Adoli"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://uxkafui.co/gallery" />
        <meta
          property="og:image"
          content="https://uxkafui.co/assets/og-image-iULTaCta.png"
        />
        <meta
          property="og:description"
          content="The Yeʋekpɔme Gallery ih home to paintings by Hope Adoli"
        />
      </Helmet>
      <ForeText />
      <Images />
    </div>
  );
}

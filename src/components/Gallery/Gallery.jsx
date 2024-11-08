import ForeText from "./ForeText";
import Images from "./Images";
import { Helmet } from "react-helmet";
import styles from "./fortext.module.css";
import ogImage from "../../assets/og-image.png";

export default function Gallery() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>The Yeʋekpɔme Gallery by Hope Adoli</title>
        <link rel="canonical" href="https://uxkafui.co/" />

        <meta
          property="og:title"
          content="The Yeʋekpɔme Gallery by Hope Adoli"
        />
        <meta property="og:url" content="https://uxkafui.co/gallery" />
        <meta property="og:image" content={ogImage} />
        <meta
          property="og:description"
          content="The Yeʋekpɔme Gallery is home to paintings by Hope Adoli"
        />

        {/* Twitter */}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@uxkafui" />
        <meta
          name="twitter:title"
          content="The Yeʋekpɔme Gallery by Hope Adoli"
        />
        <meta
          name="twitter:description"
          content="The Yeʋekpɔme Gallery is home to paintings by Hope Adoli"
        />
        <meta name="twitter:image" content={ogImage} />
      </Helmet>
      <div className={styles.body}>
        <ForeText />
        <Images />
      </div>
    </>
  );
}

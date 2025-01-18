import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import styles from "./gallery.module.css";
import ogImage from "../../assets/og-image.png";
import img1 from "./img1.jpeg";
import img2 from "./img2.jpeg";

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
      <div className={styles.main}>
        <div className={styles.QalissoText}>
          <p className={styles.comingSoonHeader}>Opening in H2 2025</p>
          <p>
            The Gallery will <br /> house my paintings
          </p>
          <p className={styles.link}>
            <Link to="https://forms.gle/veX5b7kPEzH9XZ9S8" target="blank">
              Get to know when it opens
            </Link>
          </p>
        </div>
      </div>
      <div className={styles.images666767}>
        <img src={img1} className={styles.design} data-value="-2" alt="" />
        <img src={img2} className={styles.design} data-value="3" alt="" />
      </div>
    </>
  );
}

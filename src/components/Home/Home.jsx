import HeroSection from "./HeroSection";
import HomeFooter from "./HomeFooter";
import Projects from "./Projects";
import { Helmet } from "react-helmet";
import ogImage from "../../assets/og-image.png";

export default function Home() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Hope Adoli</title>
        <link rel="canonical" href="https://uxkafui.co/" />

        <meta
          property="og:title"
          content="The Yeʋekpɔme Gallery by Hope Adoli"
        />
        <meta property="og:url" content="https://uxkafui.co/" />
        <meta property="og:image" content={ogImage} />
        <meta
          property="og:description"
          content="Product Designer, Developer, Artist, Volunteer. An Individual Member of the Django Software Foundation."
        />

        {/* Twitter */}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@uxkafui" />
        <meta name="twitter:title" content="Hope Adoli" />
        <meta
          name="twitter:description"
          content="Product Designer, Developer, Artist, Volunteer. An Individual Member of the Django Software Foundation."
        />
        <meta name="twitter:image" content={ogImage} />
      </Helmet>
      <div className="body"></div>
      <HeroSection />
      <Projects />
      <HomeFooter />
    </>
  );
}

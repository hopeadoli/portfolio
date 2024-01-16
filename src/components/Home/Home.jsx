import HeroSection from "./HeroSection";
import HomeFooter from "./HomeFooter";
import Projects from "./Projects";
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <>
      <Helmet>
        {/* Facebook / OpenGraph */}
        <meta property="og:title" content="Hope Adoli" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://uxkafui.co" />
        <meta property="og:image" content="https://uxkafui.co/og-image.png" />
        <meta
          property="og:description"
          content="Product Designer, Developer, Artist, 
    Volunteer. An Individual Member of the Django Software Foundation."
        />

        {/* Twitter */}
        <meta name="twitter:card" value="summary_large_image" />
        <meta name="twitter:site" value="@uxkafui" />
        <meta name="twitter:url" value="https://uxkafui.co" />
        <meta name="twitter:title" value="Hope Adoli" />
        <meta
          name="twitter:description"
          value="Product Designer, Developer, Artist, 
    Volunteer. An Individual Member of the Django Software Foundation."
        />
        <meta name="twitter:image" content="https://uxkafui.co/og-image.png" />

        <meta charSet="utf-8" />
        <title>Hope Adoli</title>
        <link rel="canonical" href="https://uxkafui.co" />
      </Helmet>
      <div className="body"></div>
      <HeroSection />
      <Projects />
      <HomeFooter />
    </>
  );
}

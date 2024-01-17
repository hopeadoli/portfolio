import HeroSection from "./HeroSection";
import HomeFooter from "./HomeFooter";
import Projects from "./Projects";
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <>
      <Helmet>
        <meta property="og:title" content="Hope Adoli" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://uxkafui.co" />
        <meta
          property="og:image"
          content="https://uxkafui.co/assets/og-image-iULTaCta.png"
        />
        <meta
          property="og:description"
          content="Product Designer, Developer, Artist, 
Volunteer. An Individual Member of the Django Software Foundation."
        />
      </Helmet>
      <div className="body"></div>
      <HeroSection />
      <Projects />
      <HomeFooter />
    </>
  );
}

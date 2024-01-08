import HeroSection from "./HeroSection";
import HomeFooter from "./HomeFooter";
import Projects from "./Projects";
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Hope Adoli</title>
        <link rel="canonical" href="https://uxkafui.co" />
      </Helmet>
      <HeroSection />
      <Projects />
      <HomeFooter />
    </>
  );
}

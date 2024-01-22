import AboutFooter from "./AboutFooter";
import Career from "./Career";
import Hero from "./Hero";
import PersonalProjects from "./PersonalProjects";
import Speaking from "./Speaking";
import Volunteering from "./Volunteering";
import { Helmet } from "react-helmet";
import ogImage from "../../assets/og-image.png";

export default function About() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About⎯Hope Adoli</title>

        <meta property="og:title" content="About⎯Hope Adoli" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://uxkafui.co/about" />
        <meta property="og:image" content={ogImage} />
        <meta
          property="og:description"
          content="Product Designer, Developer, Artist, Volunteer. An Individual Member of the Django Software Foundation."
        />

        {/* Twitter */}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@uxkafui" />
        <meta name="twitter:title" content="About⎯Hope Adoli" />
        <meta
          name="twitter:description"
          content="Product Designer, Developer, Artist, Volunteer. An Individual Member of the Django Software Foundation."
        />
        <meta name="twitter:image" content={ogImage} />
      </Helmet>
      <Hero />
      <Career />
      <PersonalProjects />
      <Volunteering />
      <Speaking />
      <AboutFooter />
    </>
  );
}

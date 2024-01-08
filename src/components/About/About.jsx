import AboutFooter from "./AboutFooter";
import Career from "./Career";
import Hero from "./Hero";
import PersonalProjects from "./PersonalProjects";
import Speaking from "./Speaking";
import Volunteering from "./Volunteering";
import { Helmet } from "react-helmet";

export default function About() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About⎯Hope Adoli</title>
        <link rel="canonical" href="https://uxkafui.co" />
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

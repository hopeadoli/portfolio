import HeroSection from "./components/HeroSection";
import HomeFooter from "./components/HomeFooter";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import "./components/app.css";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Projects />
      <HomeFooter />
    </>
  );
}

export default App;

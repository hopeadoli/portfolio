import Navbar from "./Navbar";
import About from "./components/About/About";
import Gallery from "./components/Gallery/Gallery";
import Home from "./components/Home/Home";
import NoPage from "./components/NoPage";
import { Route, Routes, useLocation } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Terms from "./components/Terms";
import Footer from "./Footer";

function App() {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="*" element={<NoPage />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
      {location.pathname !== "/gallery" && <Footer />}
    </>
  );
}

export default App;

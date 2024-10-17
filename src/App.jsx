import Navbar from "./Navbar";
import About from "./components/About/About";
import Gallery from "./components/Gallery/Gallery";
import Home from "./components/Home/Home";
import NoPage from "./components/NoPage";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </>
  );
}

export default App;

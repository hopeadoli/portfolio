import Navbar from "./Navbar";
import About from "./components/About/About";
import Gallery from "./components/Gallery/Gallery";
import Home from "./components/Home/Home";
import "./components/app.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

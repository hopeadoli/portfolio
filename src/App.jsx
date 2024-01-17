import { Helmet } from "react-helmet";
import Navbar from "./Navbar";
import About from "./components/About/About";
import Gallery from "./components/Gallery/Gallery";
import Home from "./components/Home/Home";
import NoPage from "./components/NoPage";
import { Route, Routes } from "react-router-dom";
import ogImage from "./assets/og-image.png";

function App() {
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
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

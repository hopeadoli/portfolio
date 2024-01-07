import "./gallery.css";
import img1 from "./img1.jpeg";
import img2 from "./img2.jpeg";
import { Helmet } from "react-helmet";

export default function Gallery() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>The Yeʋekpɔme Gallery by Hope Adoli</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="container">
        <h1>Gallery</h1>
        <div className="images">
          <img src={img1} alt="" />
          <img src={img2} alt="" />
        </div>
      </div>
    </>
  );
}

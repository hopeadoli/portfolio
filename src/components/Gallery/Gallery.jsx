// import react, { useEffect } from "react";
import "./gallery.css";
// import "../../assets/ember.mp3";
// import hoverEffect from "hover-effect";
import img1 from "./img1.jpeg";
import img2 from "./img2.jpeg";

export default function Gallery() {
  return (
    <>
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

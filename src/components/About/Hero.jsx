import "./hero.css";
import heroImg from "../../assets/heroImg.png";

export default function Hero() {
  return (
    <>
      <div className="heroSection">
        <p className="aboutHeader">
          <span>About </span>me
        </p>
        <img
          className="heroImg"
          src={heroImg}
          alt="A photo of Hope Adoli on a stage at Djangocon Africa, 
          giving a talk. The photo is in black and white with DjangoCon 
          Africa logo on a 10 x 20 banner blurred behind him"
        />
      </div>
    </>
  );
}

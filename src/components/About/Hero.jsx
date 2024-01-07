import "./hero.css";
import meOne from "../../assets/meOne.png";
import meTwo from "../../assets/meTwo.png";
import meThree from "../../assets/meThree.png";

export default function Hero() {
  return (
    <>
      <div className="heroSection">
        <p className="aboutHeader">
          <span>About </span>me
        </p>
        <div className="bottomThree">
          <img className="mepics" src={meOne} alt="" />
          <img className="mepics" src={meTwo} alt="" />
          <img className="mepics" src={meThree} alt="" />
        </div>
      </div>
    </>
  );
}

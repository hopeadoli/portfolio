import "./hero.css";
import meOne from "../../assets/meOne.png";
import meTwo from "../../assets/meTwo.png";
import meThree from "../../assets/meThree.png";

export default function Hero() {
  //   {
  //     function changeWidth() {
  //       var scroll = window.scrollY / 12;
  //       var width = scroll;

  //       document.getElementById("bottomTwo").style.width = width + "%";
  //     }

  //     window.addEventListener("scroll", function () {
  //       requestAnimationFrame(changeWidth);
  //     });
  //   }

  return (
    <>
      <div className="heroSection">
        <p className="aboutHeader">
          <span>About </span>me
        </p>
        <img id="meOne" className="meOne" src={meOne} alt="" />
        <div className="bottomTwo">
          <img className="meTwo" src={meTwo} alt="" />
          <img id="meThree" className="meThree" src={meThree} alt="" />
        </div>
      </div>

      {/* Rotate on scroll */}
      {window.addEventListener("scroll", () => {
        document.body.style.setProperty(
          "--scroll",
          window.scrollY / (document.body.offsetHeight - window.innerHeight)
        );
      })}
    </>
  );
}

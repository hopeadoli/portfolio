import img1 from "./img1.jpeg";
import img2 from "./img2.jpeg";
import "./images.css";

export default function Images() {
  return (
    <>
      <div className="images666767">
        <img src={img1} className="design" data-value="-2" alt="" />
        <img src={img2} className="design" data-value="3" alt="" />
      </div>
    </>
  );
}

// document.addEventListener("mousemove", parallax);
// function parallax(e) {
//   document.querySelectorAll(".design").forEach(function (move) {
//     var moving_value = move.getAttribute("data-value");
//     var x = e.clientX * moving_value;
//     var y = e.clientY * moving_value;

//     move.computedStyleMap.transform =
//       "translateX(" + x + "px) translateY(" + y + "px)";
//   });
// }

import { Link } from "react-router-dom";
import "./speaking.css";

export default function Speaking() {
  return (
    <div className="career">
      <div className="history notHistory">
        <p className="sectionHeader speak">speaking</p>
        <p>I love contributing to the tech community.</p>
        <div>
          {/* Ubuntu Summit */}
          <div className="mainStuff">
            <p className="careerTitle">
              <Link
                className="companyLink"
                to="https://petraonline.com"
                target="blank"
              >
                Build for All: Designing Accessible Open Source Products
              </Link>
            </p>
            <div className="dateTime">
              <p>Ubuntu Summit⎯Prague, Czech Republic 🇨🇿 </p>
              <p>1 Nov 2024</p>
            </div>
          </div>

          {/* PyNam */}
          <div className="mainStuff">
            <p className="careerTitle">
              <Link to="https://Walulel.com" target="blank">
                The Creative Code-ination: Designers & Developers United
              </Link>
            </p>
            <div className="dateTime">
              <p>PyCon Namibia⎯Windhoek, Namibia 🇳🇦</p>
              <p>6 Mar 2024</p>
            </div>
          </div>

          {/* UX Ghana */}
          <div className="mainStuff">
            <p className="careerTitle">
              <Link to="https://Walulel.com" target="blank">
                Becoming a better Freelancer
              </Link>
            </p>
            <div className="dateTime">
              <p>UX Ghana Meet-up⎯Accra, Ghana 🇬🇭</p>
              <p>19 Aug 2022</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

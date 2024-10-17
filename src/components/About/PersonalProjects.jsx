import { Link } from "react-router-dom";
import PaintBrush from "../../assets/pprojectlogos/PaintBrush";
import "./personalprojects.css";
import Lasgidi from "../../assets/pprojectlogos/Lasgidi";
import UxcLogo from "../../assets/pprojectlogos/UxcLogo";
import gallery from "../../assets/pprojectlogos/gallery.png";

export default function PersonalProjects() {
  return (
    <div className="personalprojects">
      <div>
        <p className="sectionHeader">Projects</p>
        <p>Fun projects I’m currently working either alone or with friends.</p>

        {/* Gallery */}
        <div className="project">
          <div>
            <PaintBrush className="SSS" />
          </div>
          <div className="projectDesc">
            <p className="projectTitle">
              <Link to="/gallery">The Yeʋekpɔme Gallery</Link>
            </p>
            <p className="mg0">
              Starting in H2 2025, I will be putting up my paintings online for
              sale.
            </p>
            <img src={gallery} alt="a photo of an illustration" />
          </div>
        </div>

        {/* Project Lasgidi */}
        <div className="project">
          <div>
            <Lasgidi />
          </div>

          <div className="projectDesc">
            <p className="projectTitle">
              <Link to="https://lasgidi.xyz" target="blank">
                Project Lasgidi
              </Link>
            </p>
            <p className="mg0">
              A repository of upcoming tech conferences to attend, Open Source
              Projects to contribute to and tech communities to join.
            </p>
          </div>
        </div>

        {/* UX Campus */}
        <div className="project">
          <div>
            <UxcLogo />
          </div>
          <div className="projectDesc">
            <p className="projectTitle">
              <Link to="https://uxcampus.org" target="blank">
                UX Campus
              </Link>
            </p>
            <p className="mg0">
              Free 1-day UI/UX Design workshops organised on University campuses
              to expose students to the awesome world of (product) design.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

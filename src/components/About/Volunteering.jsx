import { Link } from "react-router-dom";
import DJCAfrica from "../../assets/pprojectlogos/DJCAfrica";
import DjangoGirls from "../../assets/pprojectlogos/DjangoGirls";
import DjangoLogo from "../../assets/pprojectlogos/DjangoLogo";
import "./volunteering.css";

export default function Volunteering() {
  return (
    <div className="volunteering">
      <div>
        <p className="sectionHeader">Volunteering</p>
        <p>I love contributing to the tech community.</p>

        {/* DSF */}
        <div className="project">
          <div>
            <DjangoLogo />
          </div>
          <div className="projectDesc">
            <p className="projectTitle">
              <Link to="https://djangoproject.com/foundation" target="blank">
                Django Software Foundation
              </Link>
            </p>
            <p className="mg0">
              The Django Software Foundation (DSF) exists to promote, support,
              and advance its open-source project: the Django Web framework. I
              am an individual contributor on the DSF board.
            </p>
          </div>
        </div>

        {/* DjangoCon Africa */}
        <div className="project">
          <div>
            <DJCAfrica />
          </div>

          <div className="projectDesc">
            <p className="projectTitle">
              <Link to="https://djangocon.africa" target="blank">
                DjangoCon Africa
              </Link>
            </p>
            <p className="mg0">
              DjangoCon Africa is a conference that brings together
              Python/Django devs from across Africa. Our first event in
              Zanzibar, Tanzania 🇹🇿 was attended by more than 400 devs from
              across the world. I lead the design team on this project.
            </p>
          </div>
        </div>

        {/* Django Girls */}
        <div className="project">
          <div>
            <DjangoGirls />
          </div>
          <div className="projectDesc">
            <p className="projectTitle">
              <Link to="https://djangogirls.org" target="blank">
                Django Girls
              </Link>
            </p>
            <p className="mg0">
              Django Girls aims to introduce underrepresented women to python
              programming by organising free 1-2 day events across the world. I
              have been organising/mentoring at these meet-ups since Sept 2017.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

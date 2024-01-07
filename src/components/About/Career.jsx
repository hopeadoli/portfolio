import { Link } from "react-router-dom";
import "./career.css";
import habari from "../../assets/clients/Habari.png";
import djangonaut from "../../assets/clients/Djangonaut.png";
import hearts from "../../assets/clients/Hearts.png";
import mtn from "../../assets/clients/MTN.png";
import petra from "../../assets/clients/Petra-trust.png";
import sesi from "../../assets/clients/Sesi.png";

export default function Career() {
  return (
    <div className="career">
      <div className="briefIntro">
        <p className="sectionHeader">
          Designer ⎯ Developer ⎯ Artist ⎯ Volunteer
        </p>
        <p>
          I love building digital stuff⎯ mobile apps, web apps etc. I have
          worked mostly with startups within food-tech, agri-tech, health-tech,
          fintech and ed-tech sectors. When I’m not obsessing over users on my
          laptop 💻, I’m either painting 🎨 🖌️ or collaborating with friends on
          Open Source projects. I believe that humans are (or should aspire to
          be) multimodal.
        </p>
      </div>
      <div className="history">
        <p className="sectionHeader">career history</p>
        <div>
          {/* Petra */}
          <div className="mainStuff">
            <p className="careerTitle">
              Product Designer @{" "}
              <Link
                className="companyLink"
                to="https://petraonline.com"
                target="blank"
              >
                Petra Group
              </Link>
            </p>
            <div className="dateTime">
              <p>May ‘21 - now</p>
              <p>Accra, Ghana</p>
            </div>
          </div>

          {/* Walulel */}
          <div className="mainStuff">
            <p className="careerTitle">
              Product Designer @{" "}
              <Link to="https://Walulel.com" target="blank">
                Walulel
              </Link>
            </p>
            <div className="dateTime">
              <p>Dec ‘20 - Jul ‘21</p>
              <p>Accra, Ghana</p>
            </div>
          </div>

          {/* Homechow */}
          <div className="mainStuff">
            <p className="careerTitle">Product Designer @ Homechow</p>
            <div className="dateTime">
              <p>May ‘19 - Jul ‘20</p>
              <p>Accra, Ghana</p>
            </div>
          </div>

          {/* Freelance */}
          <div className="mainStuff">
            <p className="careerTitle">Freelance Designer</p>
            <div className="dateTime">
              <p>2017 - 2023</p>
              <p>Global</p>
            </div>
            <div className="clientLogos">
              <img src={mtn} alt="MTN Logo" />
              <img src={hearts} alt="Accra Hearts of Oak Logo" />
              <img src={sesi} alt="Sesi Technologies Logo" />
              <img src={petra} alt="Petra Trust Logo" />
              <img src={djangonaut} alt="Djangonaut Space Logo" />
              <img src={habari} alt="Habari node's Logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import ArrowUpIcon from "../../assets/ArrowUpIcon";
import "./projects.css";
import screenshot from "../../assets/screenshot.png";
import korbaWeb from "../../assets/korba-web.png";
import KorbaLandingPage from "../../assets/korba-landing.png";
import MizormorTraveler from "../../assets/mizormor-traveler.png";
import MizormorAgency from "../../assets/mizormor-agencies.png";
import MizormorLanding from "../../assets/mizormor-landing.png";
import AchieveApp from "../../assets/achieve.png";
import GrainMate from "../../assets/grainmate.png";
import MyNetwork from "../../assets/mynetwork-app.png";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <>
      <div className="projects">
        <p className="sectionHeader">work</p>

        {/* 1 Habari website */}
        {/* <div className="workContainer">
          <div className="projectText">
            <h2>
              Habari Node <span>website</span>
            </h2>
            <p>2024</p>
          </div>
          <p>
            Designed a marketing website for one of Tanzania’s most loved
            Internet Service Providers.
          </p>

          <Link to="https://cnn.com" target="blank">
            <p className="link">
              Visit website
              <ArrowUpIcon />
            </p>
          </Link>
          <img
            className="screenshot"
            src={screenshot}
            alt="habari website screenshot"
          />
        </div> */}

        {/* 2 MyNetwork App */}
        <div className="workContainer">
          <div className="projectText">
            <h2>
              MyNetwork <span>app</span>
            </h2>
            <p>2024</p>
          </div>
          <p>
            More than 3,000 homes and offices rely on Tanzania-based ISP Habari
            Node’s routers for internet connectivity. The “MyNetwork” app helps
            them manage their routers and do so much more.
          </p>
          {/* <p className="link">
            AppStore
            <ArrowUpIcon />
          </p> */}
          <p>Coming soon ⏳</p>
          <img
            className="screenshot"
            src={MyNetwork}
            alt="MyNetwork app mockup"
          />
        </div>

        {/* 4 Korba mobile app */}
        {/* <div className="workContainer">
          <div className="projectText">
            <h2>
              Korba mobile <span>app</span>
            </h2>
            <p>2024</p>
          </div>
          <p>
            I teamed up with Halges Technologies to redesign their flagship
            mobile app “Korba” which currently helps more than 300,000 people to
            easily send and receive money, pay utilities and more.
          </p>
          <p className="link">
            AppStore
            <ArrowUpIcon />
          </p>
          <img
            className="screenshot"
            src={screenshot}
            alt="habari website screenshot"
          />
        </div> */}

        {/* 5 Korba web app */}
        <div className="workContainer">
          <div className="projectText">
            <h2>
              Korba <span>web-app</span>
            </h2>
            <p>2024</p>
          </div>
          <p>
            I teamed up with Halges Technologies to redesign their flagship web
            platform “Korba web” which currently helps more than 300,000 people
            to easily send and receive money, pay utilities and more.
          </p>
          <p>Coming soon ⏳</p>
          <img
            className="screenshot"
            src={korbaWeb}
            alt="Korba web app screenshot"
          />
        </div>

        {/* 6 Korba POS */}
        {/* <div className="workContainer">
          <div className="projectText">
            <h2>
              Korba <span>POS</span>
            </h2>
            <p>2024</p>
          </div>
          <p>
            The Korba POS platform helps merchants in Ghana manage their stock,
            receive payments from customers among others.
          </p>
          <p className="link">
            AppStore
            <ArrowUpIcon />
          </p>
          <img
            className="screenshot"
            src={screenshot}
            alt="habari website screenshot"
          />
        </div> */}

        {/* 3 Korba website */}
        <div className="workContainer">
          <div className="projectText">
            <h2>
              Korba <span>website</span>
            </h2>
            <p>2023</p>
          </div>
          <p>
            Collaborated with Halges Technologies to design a new marketing
            website that converts.
          </p>
          <p>Coming Soon ⏳</p>
          <img
            className="screenshot"
            src={KorbaLandingPage}
            alt="Korba landing page"
          />
        </div>

        {/* 7 Mizormor for Travelers */}
        <div className="workContainer">
          <div className="projectText">
            <h2>
              Mizormor <span>for travelers</span>
            </h2>
            <p>2023</p>
          </div>
          <p>
            The Mizormor app helps people plan solo or group trips either by
            themselves or with the help of AI, as well as find experiences to
            book.
          </p>
          <div>
            <Link
              className="divLink link"
              to="https://apps.apple.com/gh/app/mizormor-plan-trips-tours/id1661002132"
              target="blank"
            >
              <p>
                AppStore
                <ArrowUpIcon />
              </p>
            </Link>
          </div>

          <img
            className="screenshot"
            src={MizormorTraveler}
            alt="Mizormor Traveler's app mock-up"
          />
        </div>

        {/* 8 Mizormor for Agencies */}
        <div className="workContainer">
          <div className="projectText">
            <h2>
              Mizormor <span>for Agencies</span>
            </h2>
            <p>2023</p>
          </div>
          <p>
            The Mizormor for Agencies app is a centalized platform that helps
            travel and tour operators to easily manage their business
            operations.
          </p>
          <div>
            <Link
              className="divLink link"
              to="https://apps.apple.com/gh/app/mizormor-agencies/id6443749925"
              target="blank"
            >
              <p>
                AppStore
                <ArrowUpIcon />
              </p>
            </Link>
          </div>
          <img
            className="screenshot"
            src={MizormorAgency}
            alt="Mizormor agencies mock-up"
          />
        </div>

        {/* 9 Mizormor website */}
        <div className="workContainer">
          <div className="projectText">
            <h2>
              Mizormor <span>website</span>
            </h2>
            <p>2023</p>
          </div>
          <p>
            The Mizormor for Agencies app is a centalized platform that helps
            travel and tour operators to easily manage their business
            operations.
          </p>
          <div>
            <Link
              className="divLink link"
              to="https://mizormor.com"
              target="blank"
            >
              <p>
                Visit site
                <ArrowUpIcon />
              </p>
            </Link>
          </div>
          <img
            className="screenshot"
            src={MizormorLanding}
            alt="Mizormor website screenshot"
          />
        </div>

        {/* 10 Achieve app */}
        <div className="workContainer">
          <div className="projectText">
            <h2>
              Achieve <span>app</span>
            </h2>
            <p>2022</p>
          </div>
          <p>
            The Achieve app helps Ghanaian millennials and GenZs to save and
            invest. Currently used by more than 200,000 people.
          </p>
          <div>
            <Link
              className="divLink link"
              to="https://apps.apple.com/gb/app/achieve-save-and-invest/id1532635527?platform=iphone"
              target="blank"
            >
              <p>
                AppStore
                <ArrowUpIcon />
              </p>
            </Link>
          </div>
          <img
            className="screenshot"
            src={AchieveApp}
            alt="Achieve app mock-up"
          />
        </div>

        {/* 11 Granmate app */}
        <div className="workContainer">
          <div className="projectText">
            <h2>
              Grainmate <span>app</span>
            </h2>
            <p>2021</p>
          </div>
          <p>
            I worked with the award-winning Sesi Technologies team to design the
            Grainmate mobile app that helps local farmers tackle Post-Harvest
            Losses (PHL).
          </p>
          <div>
            <Link
              className="divLink link"
              to="https://play.google.com/store/apps/details?id=com.sesitechnologies.grainmateapp"
              target="blank"
            >
              <p>
                Google Playstore
                <ArrowUpIcon />
              </p>
            </Link>
          </div>
          <img
            className="screenshot"
            src={GrainMate}
            alt="Grainmate app mock-up"
          />
        </div>
      </div>
    </>
  );
}

import ArrowUpIcon from "../assets/ArrowUpIcon";
import "./projects.css";
import screenshot from "../assets/screenshot.png";

export default function Projects() {
  return (
    <>
      <div className="projects">
        <p className="sectionHeader">work</p>

        {/* 1 Habari website */}
        <div className="workContainer">
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
          <p className="link">
            Visit website <ArrowUpIcon />
          </p>
          <img
            className="screenshot"
            src={screenshot}
            alt="habari website screenshot"
          />
        </div>

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
          <p className="link">
            AppStore
            <ArrowUpIcon />
          </p>
          <img
            className="screenshot"
            src={screenshot}
            alt="habari website screenshot"
          />
        </div>

        {/* 3 Korba website */}
        <div className="workContainer">
          <div className="projectText">
            <h2>
              Korba <span>website</span>
            </h2>
            <p>2024</p>
          </div>
          <p>
            Collaborated with Halges Technologies to design a new marketing
            website that converts.
          </p>
          <p className="link">
            Visit website
            <ArrowUpIcon />
          </p>
          <img
            className="screenshot"
            src={screenshot}
            alt="habari website screenshot"
          />
        </div>

        {/* 4 Korba mobile app */}
        <div className="workContainer">
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
        </div>

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
          <p className="link">
            Visit app
            <ArrowUpIcon />
          </p>
          <img
            className="screenshot"
            src={screenshot}
            alt="habari website screenshot"
          />
        </div>

        {/* 6 Korba POS */}
        <div className="workContainer">
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
          <p className="link">
            AppStore
            <ArrowUpIcon />
          </p>
          <img
            className="screenshot"
            src={screenshot}
            alt="habari website screenshot"
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
          <p className="link">
            AppStore
            <ArrowUpIcon />
          </p>
          <img
            className="screenshot"
            src={screenshot}
            alt="habari website screenshot"
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
          <p className="link">
            Visit website
            <ArrowUpIcon />
          </p>
          <img
            className="screenshot"
            src={screenshot}
            alt="habari website screenshot"
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
          <p className="link">
            AppStore
            <ArrowUpIcon />
          </p>
          <img
            className="screenshot"
            src={screenshot}
            alt="habari website screenshot"
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
          <p className="link">
            Google Playstore
            <ArrowUpIcon />
          </p>
          <img
            className="screenshot"
            src={screenshot}
            alt="habari website screenshot"
          />
        </div>
      </div>
    </>
  );
}

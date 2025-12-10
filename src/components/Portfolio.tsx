import { SquareArrowOutUpRight } from "lucide-react";
import SportsDesktopImg from "/src/assets/sportsApp/vb - athlete stat.png";
import YMTImg from "/src/assets/ymt/home.png";

import {
  ReactSVG,
  MongoDBSVG,
  ExpressSVG,
  NodeJSSVG,
  NextSvg,
  EmailJSSVG,
  MotionSVG,
} from "../assets/SvgLogos";

const Portfolio = () => {
  return (
    <section className="dashboard-card flex flex-col gap-4">
      <h1 className="hover-pop origin-bottom-left">Projects</h1>
      <div className="projects">
        <YMTCard />
        <VbAppCard />
      </div>
    </section>
  );
};

export default Portfolio;

const VbAppCard = () => {
  return (
    <div className="project-container">
      <a href="/volley">
        <div className="project-image-card group">
          <img src={SportsDesktopImg} alt="Sports app desktop image" />

          <div className="overlay group-hover:bottom-0 ">
            <h3>Volleyball Tracker</h3>
            <ul>
              <li>
                <MongoDBSVG className="size-6 fill-foreground" />
                <p>MongoDB</p>
              </li>
              <li>
                <ExpressSVG className="size-6 fill-foreground" />
                <p>Express</p>
              </li>
              <li>
                <ReactSVG className="size-6 fill-foreground" />
                <p>React</p>
              </li>
              <li>
                <NodeJSSVG className="size-6 fill-foreground" />
                <p>Node.js</p>
              </li>
            </ul>
            <p>Volleyball stats tracker and data visualizer</p>
            <button>
              <p>Learn More </p>
              <SquareArrowOutUpRight className="size-3 mx-1" />
            </button>
          </div>
        </div>
      </a>
    </div>
  );
};

const YMTCard = () => {
  return (
    <a href="/ymt">
      <div className="project-image-card group">
        <img src={YMTImg} alt="Sports app desktop image" />

        <div className="overlay group-hover:bottom-0 ">
          <h3>YMT Website</h3>
          <ul>
            <li>
              <ReactSVG className="size-6 fill-foreground" />
              <p>React</p>
            </li>
            <li>
              <NextSvg className="size-6 fill-foreground" />
              <p>Next.js</p>
            </li>
            <li>
              <MotionSVG className="size-6 fill-foreground" />
              <p>Framer Motion</p>
            </li>
            <li>
              <EmailJSSVG className="size-6 fill-foreground" />
              <p>EmailJS</p>
            </li>
          </ul>
          <p>Website for YMT Lion dance team for media and booking</p>
          <button>
            <p>Learn More </p>
            <SquareArrowOutUpRight className="size-3 mx-1" />
          </button>
        </div>
      </div>
    </a>
  );
};

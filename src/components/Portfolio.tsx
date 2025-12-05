import { SquareArrowOutUpRight } from "lucide-react";
import SportsDesktopImg from "/src/assets/sports_app_screenshots/vb - athlete stat.png";
import { ReactSVG, MongoDBSVG } from "../assets/SvgLogos";
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <section className="dashboard-card flex flex-col gap-4">
      <h1>Projects</h1>
      <div className="my-work">
        <Link to="/volley">
          <div className="project-image-card group">
            <img src={SportsDesktopImg} alt="Sports app desktop image" />

            <div className="overlay group-hover:bottom-0 ">
              <h3>Volleyball Tracker</h3>
              <ul>
                <li>
                  <ReactSVG className="size-6 fill-foreground" />
                  <p>React</p>
                </li>
                <li>
                  <MongoDBSVG className="size-6 fill-foreground" />
                  <p>MongoDB</p>
                </li>
              </ul>
              <p>VOLLEYBALL STATS WEB APP</p>
              <button>
                <p>Learn More </p>
                <SquareArrowOutUpRight className="size-3 mx-1" />
              </button>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Portfolio;

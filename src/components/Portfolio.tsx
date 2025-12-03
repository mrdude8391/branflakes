import { SquareArrowOutUpRight } from "lucide-react";
import SportsDesktopImg from "../assets/Sports App/desktop.png";
import ReactSVG from "../assets/React/ReactSVG";
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <section className="dashboard-card flex flex-col gap-4">
      <h1>Portfolio</h1>
      <div className="my-work">
        <Link to="/volley" viewTransition>
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
                  <ReactSVG className="size-6 fill-foreground" />
                  <p>React</p>
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

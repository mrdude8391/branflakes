import { Link } from "react-router-dom";
import SportsDesktopImg from "../../assets/Sports App/desktop.png";
const VolleyApp = () => {
  return (
    <div className="project-details relative">
      <div className="w-full sticky top-0 p-4 ">
        <Link to="/">
          <button className="bg-transparent">Back</button>
        </Link>
      </div>
      <div className="project-details-inner">
        <div>
          <img src={SportsDesktopImg} alt="Sports app desktop image" />
        </div>
        <div className="header">
          <h1>Volleyball stats tracking app</h1>
          <ul className="tech-list">
            <li>React</li>
            <li>TypeScript</li>
            <li>Tailwind</li>
            <li>MongoDB</li>
            <li>Express</li>
            <li>Node</li>
          </ul>
          <a
            href="https://sports-data-app.vercel.app/"
            target="_blank"
            className="mt-2"
          >
            <button>Visit App</button>
          </a>
        </div>
        <div className="description">
          <h2>Why and What</h2>
          <p>
            I built this so that I can track my stats over time and visualize
            the data.
          </p>
        </div>
      </div>

      <div className="images">
        <div className="images-inner">
          <ul>
            <li>
              <img src={SportsDesktopImg} alt="Sports app desktop image" />
              <p>description</p>
            </li>
            <li>
              <img src={SportsDesktopImg} alt="Sports app desktop image" />
            </li>
            <li>
              <img src={SportsDesktopImg} alt="Sports app desktop image" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VolleyApp;

import { Link } from "react-router-dom";
import SportsDesktopImg from "/src/assets/sports_app_screenshots/vb - athlete stat.png";
import LoginImg from "/src/assets/sports_app_screenshots/vb - login.png";
import AthleteListImg from "/src/assets/sports_app_screenshots/vb - athletes list.png";
import AthleteStatChartImg from "/src/assets/sports_app_screenshots/vb - athlete stat chart.png";
import AthleteStatTableImg from "/src/assets/sports_app_screenshots/vb - athlete stat table.png";
import AthleteStatListImg from "/src/assets/sports_app_screenshots/vb - athlete stat list.png";
import AthleteStatDatePickerImg from "/src/assets/sports_app_screenshots/vb - athlete stat date picker.png";
import { SquareArrowUpRight } from "lucide-react";
const VolleyApp = () => {
  return (
    <div className="project-details relative">
      <div className="w-full sticky top-0 p-4 ">
        <Link to="/">
          <button className="bg-transparent">Back</button>
        </Link>
      </div>
      <div className="project-details-inner">
        <div className="header">
          <h1>🏐 Volleyball stats tracking app</h1>
          <ul className="tech-list">
            <li>React</li>
            <li>TypeScript</li>
            <li>Tailwind</li>
            <li>MongoDB</li>
            <li>Express</li>
            <li>Node</li>
          </ul>

          <button>
            <a href="https://sports-data-app.vercel.app/" target="_blank">
              Visit App <SquareArrowUpRight className="size-4" />
            </a>
          </button>
        </div>

        <div className="description">
          <div className="hero">
            <h2>Why and What</h2>
            <p>
              I built this app so that I can track my stats over time and
              visualize my personal progress over time. The app is for
              volleyball players to enter their game stats and receive a visual
              representation of the stats. A login will be required so that the
              data can be tied to a user. The user can also specify the date
              range to view to narrow down the results.
            </p>
            <p>
              The app was built using the popular MERN stack and hosted on
              Vercel.
            </p>
          </div>
          <div className="features">
            <h2>Features</h2>
            <p>🔐 User Authentication using JWT</p>
            <p>📊 Dynamic charts and data visualizations</p>
            <p>💻 Responsive UI for both desktop and mobile</p>
            <p>🌗 Light and dark UI modes</p>
          </div>
        </div>
      </div>

      <div className="images">
        <div className="images-inner">
          <ul>
            <li>
              <img src={LoginImg} alt="volleyball app login page screenshot" />
            </li>
            <li>
              <img src={AthleteListImg} alt="Sports app desktop image" />
            </li>
            <li>
              <img src={SportsDesktopImg} alt="Sports app desktop image" />
            </li>
            <li>
              <img src={AthleteStatChartImg} alt="Sports app desktop image" />
            </li>
            <li>
              <img src={AthleteStatTableImg} alt="Sports app desktop image" />
            </li>
            <li>
              <img src={AthleteStatListImg} alt="Sports app desktop image" />
            </li>
            <li>
              <img
                src={AthleteStatDatePickerImg}
                alt="Sports app desktop image"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VolleyApp;

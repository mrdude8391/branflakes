import { Link } from "react-router-dom";
import YMTHomeImg from "/src/assets/ymt/home.png";
import YMTBookingImg from "/src/assets/ymt/booking.png";
import YMTAbout from "/src/assets/ymt/about.png";
import UserStats from "/src/assets/ymt/userStats.png";
import YMTDemoVid from "/src/assets/ymt/YMT Demo.mp4";

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
          <h1>YMT Lion Dance Website</h1>
          <ul className="tech-list">
            <li>React</li>
            <li>TypeScript</li>
            <li>Tailwind</li>
            <li>Framer Motion</li>
            <li>EmailJS</li>
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
              This site was commissioned by the YMT Lion Dance team to advertise
              their group and services to potential clients. The site also
              allows the visitors to view the available lions as well as submit
              a booking request to the team.
            </p>
            <p>
              Since deployment end of July 2025 the site has generated 19
              booking requests to date
            </p>
            <p>The app was built using React hosted on Vercel.</p>
          </div>
          <div className="features">
            <h2>Features</h2>
            <p>📨 In browser email communication</p>
            <p>🎬 Aesthetic animations</p>
            <p>💻 Interactive user experience</p>
          </div>
        </div>
      </div>

      <div className="images">
        <div className="images-inner">
          <ul>
            <li>
              <video
                src={YMTDemoVid}
                autoPlay
                loop
                muted
                playsInline
                controls
                preload="auto"
              ></video>
            </li>
            <li>
              <img
                src={YMTHomeImg}
                alt="volleyball app login page screenshot"
              />
            </li>
            <li>
              <img src={YMTBookingImg} alt="Sports app desktop image" />
            </li>
            <li>
              <img src={YMTAbout} alt="Sports app desktop image" />
            </li>
            <li>
              <img src={UserStats} alt="Sports app desktop image" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VolleyApp;

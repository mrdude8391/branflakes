import type { MouseEvent } from "react";
import GithubSVG from "../assets/Github/GithubSVG.tsx";
import LinkedInSVG from "../assets/LinkedIn/LinkedInSVG.tsx";

const SelfInfo = () => {
  const openNewtab = (e: MouseEvent, url: string) => {
    e.preventDefault();
    window.open(url, "_blank");
  };
  return (
    <div className="w-full p-2 border rounded-lg">
      <div>
        <h1>Bryan (Jr-Chee) Hu</h1>
        <sub>Toronto, Canada</sub>
        <p className="mt-4">
          I'm a 23 year old Full-Stack Developer. I have been programming for
          over 4 years. I create professional websites and web apps.
        </p>
      </div>
      <div className="mt-4 flex gap-2">
        <button
          className="social-button"
          onClick={(e) => openNewtab(e, "https://github.com/mrdude8391")}
        >
          <GithubSVG className="size-6 bg-inherit fill-foreground" />
          GitHub
        </button>
        <button
          className="social-button"
          onClick={(e) =>
            openNewtab(e, "https://www.linkedin.com/in/hu-bryan/")
          }
        >
          <LinkedInSVG className="size-6 bg-inherit fill-foreground" />
          LinkedIn
        </button>
      </div>
    </div>
  );
};

export default SelfInfo;

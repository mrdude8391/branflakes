import type { MouseEvent } from "react";
import GithubSVG from "../assets/Github/GithubSVG.tsx";
import LinkedInSVG from "../assets/LinkedIn/LinkedInSVG.tsx";
import { Cake, Contact, Languages, MapPin } from "lucide-react";

const SelfInfo = () => {
  const openNewtab = (e: MouseEvent, url: string) => {
    e.preventDefault();
    window.open(url, "_blank");
  };
  return (
    <div className="dash-block">
      <div>
        <h1>Bryan (Jr-Chee) Hu</h1>
        <sub>Software Engineer</sub>
        <p className="mt-4 sm:text-xl">
          I'm a full stack developer and specialize in creating professional
          websites and web apps.
        </p>
      </div>
      <div className="flex flex-wrap bg-background gap-2 px-4 py-2 rounded-lg text-foreground/80">
        <div className="rounded-accent-container gap-1 ">
          <Cake className="size-5" />
          <p>23y/o</p>
        </div>
        <div className="rounded-accent-container gap-1 ">
          <MapPin className="size-5" />
          Toronto
        </div>
        <div className="rounded-accent-container gap-1 ">
          <Languages className="size-5" />
          English & Chinese
        </div>
      </div>
      <div className="flex gap-2">
        <button
          className="social-button"
          onClick={(e) => openNewtab(e, "https://github.com/mrdude8391")}
        >
          <GithubSVG className="size-6 fill-foreground" />
          GitHub
        </button>
        <button
          className="social-button"
          onClick={(e) =>
            openNewtab(e, "https://www.linkedin.com/in/hu-bryan/")
          }
        >
          <LinkedInSVG className="size-6 fill-foreground" />
          LinkedIn
        </button>
      </div>
    </div>
  );
};

export default SelfInfo;

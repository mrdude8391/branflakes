import {
  LinkedInSVG,
  GithubSVG,
  ReactSVG,
  TypescriptSVG,
} from "../assets/SvgLogos";
import { GraduationCap, Languages, Layers, Mail, MapPin } from "lucide-react";

const SelfInfo = () => {
  return (
    <section className="self-info dashboard-card flex flex-col gap-4">
      <div className="header">
        <h1 className="hover-pop origin-bottom-left">Bryan (Jr-Chee) Hu</h1>
        <p className="sub hover-pop origin-bottom-left">Software Engineer</p>
        <p className="mt-4 sm:text-xl hover-pop origin-bottom-left hover:scale-102">
          I'm a full stack developer and specialize in creating professional
          websites and web apps.
        </p>
      </div>
      <div className="tag-container">
        <div className="rounded-accent-tag ">
          <ReactSVG className="size-5" />
          <p>React</p>
        </div>
        <div className="rounded-accent-tag">
          <TypescriptSVG className="size-5" />
          <p>Typescript</p>
        </div>
        <div className="rounded-accent-tag">
          <Layers className="size-5" />
          <p>Fullstack</p>
        </div>
        <div className="rounded-accent-tag">
          <MapPin className="size-5" />
          Toronto
        </div>
        <div className="rounded-accent-tag">
          <GraduationCap className="size-5" />
          <p>Biomedical B.Eng</p>
        </div>
        <div className="rounded-accent-tag">
          <Languages className="size-5" />
          English & Chinese
        </div>
      </div>
      <div className="socials">
        <a href="mailto:jrcheehu@gmail.com" target="_blank">
          <button>
            <Mail className="size-5 lg:size-6" />
            Email
          </button>
        </a>
        <a href="https://github.com/mrdude8391" target="_blank">
          <button>
            <GithubSVG className="size-5 lg:size-6 fill-inherit" />
            GitHub
          </button>
        </a>
        <a href="https://www.linkedin.com/in/hu-bryan/" target="_blank">
          <button>
            <LinkedInSVG className="size-5 lg:size-6 fill-inherit" />
            LinkedIn
          </button>
        </a>
      </div>
    </section>
  );
};

export default SelfInfo;

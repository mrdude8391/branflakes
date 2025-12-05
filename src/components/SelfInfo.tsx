import { LinkedInSVG, GithubSVG } from "../assets/SvgLogos";
import { Cake, Languages, Mail, MapPin } from "lucide-react";

const SelfInfo = () => {
  return (
    <section className="dashboard-card flex flex-col gap-4">
      <div>
        <h1>Bryan (Jr-Chee) Hu</h1>
        <sub>Software Engineer</sub>
        <p className="mt-4 sm:text-xl">
          I'm a full stack developer and specialize in creating professional
          websites and web apps.
        </p>
      </div>
      <div className="flex flex-wrap bg-background gap-2 px-4 py-2 rounded-lg text-foreground-muted">
        <div className="rounded-accent-container gap-1 ">
          <Cake className="size-5" />
          <p>React</p>
        </div>
        <div className="rounded-accent-container gap-1 ">
          <Cake className="size-5" />
          <p>Typescript</p>
        </div>
        <div className="rounded-accent-container gap-1 ">
          <Cake className="size-5" />
          <p>Biomedical Engineering Bachelors</p>
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
      <div className="flex flex-wrap gap-2">
        <a
          href="mailto:jrcheehu@gmail.com"
          target="_blank"
          className="flex flex-auto"
        >
          <button className="social-button">
            <Mail className="size-5 lg:size-6" />
            Email
          </button>
        </a>
        <a
          href="https://github.com/mrdude8391"
          target="_blank"
          className="flex flex-auto"
        >
          <button className="social-button">
            <GithubSVG className="size-5 lg:size-6 fill-foreground" />
            GitHub
          </button>
        </a>
        <a
          href="https://www.linkedin.com/in/hu-bryan/"
          target="_blank"
          className="flex flex-auto"
        >
          <button className="social-button">
            <LinkedInSVG className="size-5 lg:size-6 fill-foreground" />
            LinkedIn
          </button>
        </a>
      </div>
    </section>
  );
};

export default SelfInfo;

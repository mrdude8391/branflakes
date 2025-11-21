import githubLogo from "../assets/github.svg";

const Work = () => {
  return (
    <div className="container flex flex-col gap-8">
      <div className="w-full p-2 border rounded-lg">
        <div>
          <h1>Bryan (Jr-Chee) Hu</h1>
          <img src={githubLogo} className="github" alt="github logo" />
        </div>

        <sub>Toronto, Canada</sub>
        <p className="mt-4">
          I'm a 23 year old Full-Stack Developer. I have been programming for
          over 4 years. I create professional websites and apps.
        </p>
      </div>
      <div className="w-full ">
        <h1>What I work with</h1>
        <p className="mt-4">Blah</p>
      </div>
    </div>
  );
};

export default Work;

import Experience from "../components/Experience";
import Nav from "../components/Nav";
import Portfolio from "../components/Portfolio";
import SelfInfo from "../components/SelfInfo";

const Work = () => {
  return (
    <div className="max-container justify-center flex flex-col items-center flex-wrap gap-8">
      <Nav />
      <div className="dashboard">
        <SelfInfo />
        <Experience />
        <Portfolio />
      </div>

      <div className="w-full ">
        <h1>What I work with</h1>
        <p className="mt-4">Blah</p>
      </div>
    </div>
  );
};

export default Work;

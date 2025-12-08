import Experience from "../components/Experience";
import Portfolio from "../components/Portfolio";
import SelfInfo from "../components/SelfInfo";

const Work = () => {
  return (
    <div className="max-container justify-center flex flex-col items-center flex-wrap gap-8 py-4">
      <div className="dashboard">
        <SelfInfo />
        <Experience />
        <Portfolio />
      </div>
    </div>
  );
};

export default Work;

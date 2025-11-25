const About = () => {
  return (
    <div className="max-container max-w-xl justify-center flex flex-col  flex-wrap gap-8">
      <div className="dashboard-card h-svh">
        <div>
          <h1>Title</h1>
          <sub>aboot</sub>
          <p className="mt-4 sm:text-xl">yippee</p>
        </div>
      </div>
      <div className="dashboard-card h-svh">
        <div className=" flex flex-col h-full justify-between">
          <h1>Title</h1>
          <sub className="slideText">aboot</sub>
          <p className="mt-4 sm:text-xl">yippee</p>
          <p>POP UP</p>
        </div>
      </div>
    </div>
  );
};

export default About;

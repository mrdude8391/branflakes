import type { ReactNode } from "react";

const Experience = () => {
  return (
    <div className="dash-block">
      <h1>Experience</h1>
      <WorkItem>
        <Company>NOVX Systems</Company>
      </WorkItem>
    </div>
  );
};

export default Experience;

const WorkItem = (props: { children: ReactNode }) => {
  const { children } = props;
  return (
    <div>
      {children}
      <h3>Junior Full Stack Developer (Co-op)</h3>
      <sub className="text-sm">2021 - 2022</sub>
      <p>
        Added and maintained features on .NET application and internal web
        tooling in Angular. Made a fully functioning live chat service in the
        .NET application. Created API endpoints and managed data using Microsoft
        SQL.
      </p>
    </div>
  );
};

const Company = (props: { children: ReactNode }) => {
  const { children } = props;
  return <h2>{children}</h2>;
};

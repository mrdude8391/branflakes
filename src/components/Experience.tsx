import type { ReactNode } from "react";

const Experience = () => {
  return (
    <section className="dashboard-card flex flex-col gap-8">
      <h1 className="hover-pop origin-bottom-left">Experience</h1>
      <div className="flex flex-col gap-12">
        <WorkItem>
          <Company>NOVX Systems</Company>
          <Title>Junior Full Stack Developer (Co-op)</Title>
          <Date>2021 - 2022</Date>
          <Description>
            Added and maintained features on .NET application and internal web
            tooling in Angular. Made a fully functioning live chat service in
            the .NET application. Created API endpoints and managed data using
            Microsoft SQL.
          </Description>
        </WorkItem>

        <WorkItem>
          <Company>YMT Lion Dance</Company>
          <Title>Freelance Web Developer</Title>
          <Date>2025</Date>
          <Description>
            Designed and developed a website for a local lion dance team. It
            features an email based booking system, responsive UI, and
            animations.
          </Description>
        </WorkItem>
      </div>
    </section>
  );
};

export default Experience;

const WorkItem = ({ children }: { children: ReactNode }) => {
  return <div>{children}</div>;
};

const Company = ({ children }: { children: ReactNode }) => {
  return <h2 className="hover-pop origin-bottom-left">{children}</h2>;
};

const Title = ({ children }: { children: ReactNode }) => {
  return <h3 className="hover-pop origin-bottom-left">{children}</h3>;
};

const Date = ({ children }: { children: ReactNode }) => {
  return (
    <p className="text-sm text-foreground-muted hover-pop origin-bottom-left">
      {children}
    </p>
  );
};

const Description = ({ children }: { children: ReactNode }) => {
  return (
    <p className="mt-2 text-lg leading-6 hover-pop origin-left hover:scale-102">
      {children}
    </p>
  );
};

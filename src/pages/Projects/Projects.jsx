import SectionTitle from "./../../components/ui/SectionTitle/SectionTitle";
import Project from "./Project";

const Projects = () => {
  const projects = [
    {
      image: "../src/assets/project-1/card-1.jpg",
    },
    {
      image: "../src/assets/project-2/card-2.jpg",
    },
    {
      image: "../src/assets/project-3/card-3.jpg",
    },
    {
      image: "../src/assets/project-4/card-4.jpg",
    },
  ];

  return (
    <div className="py-10">
      <SectionTitle firstWord="My" lastWord="Projects" />
      <p className="text-center">
        Here is some of my work that I{`'`}ve done in various programming
        languages.{" "}
      </p>
      <div className="lg:px-52 md:px-20 grid grid-cols-1 place-items-center md:grid-cols-2 gap-5">
        {projects?.map((project, idx) => (
          <Project key={idx} project={project} idx={idx} />
        ))}
      </div>
    </div>
  );
};

export default Projects;

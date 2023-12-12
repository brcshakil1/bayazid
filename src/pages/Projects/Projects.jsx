import { useEffect, useState } from "react";
import SectionTitle from "./../../components/ui/SectionTitle/SectionTitle";
import Project from "./Project";
import Loading from "../../components/shared/Loading/Loading";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("./allProjects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div className="pt-10 pb-32 md:pb-10">
      <SectionTitle firstWord="My" lastWord="Projects" />
      <p className="text-center">
        Here is some of my work that I{`'`}ve done in various programming
        languages.{" "}
      </p>
      <div className="lg:px-52 md:px-20 grid grid-cols-1 place-items-center md:grid-cols-2 gap-5 pt-7">
        {projects ? (
          projects?.map((project, idx) => (
            <Project key={idx} project={project} idx={idx} />
          ))
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default Projects;

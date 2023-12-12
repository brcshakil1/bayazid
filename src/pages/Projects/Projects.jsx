import SectionTitle from "./../../components/ui/SectionTitle/SectionTitle";
import Project from "./Project";
import Loading from "./../../components/shared/Loading/Loading";

const Projects = () => {
  const projects = [
    {
      image: "https://i.ibb.co/c1Q8tmx/card-1.jpg",
      livePreview: "https://burj-al-arif-6511c.web.app",
    },
    {
      image: "https://i.ibb.co/PFdbDpq/card-2.jpg",
      livePreview: "https://lets-study-435f5.web.app/",
    },
    {
      image: "https://i.ibb.co/gS3TrYJ/card-3.jpg",
      livePreview: "https://drive-wave-client.web.app",
    },
    {
      image:
        "https://i.ibb.co/sJMFRQ2/alex-padurariu-t-XYg4-Zx7k-SU-unsplash.jpg",
      livePreview: "https://eduevent-39570.web.app/",
    },
  ];

  return (
    <div className="pt-10 pb-32 md:pb-10">
      <SectionTitle firstWord="My" lastWord="Projects" />
      <p className="text-center">
        Here is some of my work that I{`'`}ve done in various programming
        languages.{" "}
      </p>
      <div className="lg:px-52 md:px-20 grid grid-cols-1 place-items-center md:grid-cols-2 gap-5 pt-7">
        {projects?.image ? (
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

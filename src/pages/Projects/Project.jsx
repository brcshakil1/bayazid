import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

const Project = ({ project, idx }) => {
  return (
    <div className="relative overflow-hidden group">
      <div className="card w-full md:w-96  shadow-xl overflow-hidden">
        <figure>
          <img src={project?.image} alt="Shoes" />
        </figure>
      </div>
      <div className="hidden group-hover:flex justify-center items-center gap-2 group-hover:h-full w-full h-0 top-0 left-0  absolute bg-[#000000b3] rounded-[15px]">
        <Link to={`/project-details/${idx}`}>
          <button className="btn border-2 border-blue-400 duration-500 transition-all ease-linear text-white font-medium">
            Details
          </button>
        </Link>

        <a href={project?.livePreview} rel="noreferrer" target="_blank">
          <button className="btn border-2 border-blue-400 duration-500 transition-all ease-linear text-white font-medium">
            Live
          </button>
        </a>
      </div>
    </div>
  );
};

Project.propTypes = {
  project: PropTypes.object,
  idx: PropTypes.number,
};

export default Project;

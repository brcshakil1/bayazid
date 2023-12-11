import resume from "../../../assets/Bayazid-web-developer.pdf";
import { FaDownload } from "react-icons/fa6";

const ResumeBtn = () => {
  return (
    <button className="bg-blue-400 hover:shadow-md hover:shadow-blue-600 rounded-full mt-4">
      <a
        href={resume}
        download="resume"
        className="py-2 px-4 flex items-center gap-1 text-white"
      >
        Download Resume <FaDownload />
      </a>
    </button>
  );
};

export default ResumeBtn;

import resume from "../../../assets/Bayazid-web-developer.pdf";
import { FaDownload } from "react-icons/fa6";

const ResumeBtn = () => {
  return (
    <button
      className="bg-[#00000000] hover:bg-blue-400 text-white 
       px-4 py-2 transition duration-300 ease-in-out rounded-full border border-blue-400 
       shadow-sm shadow-blue-400 mt-5
    "
    >
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

import { IoHomeSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";
import NavBtn from "../../ui/NavBtn/NavBtn";

const ControlsNavbar = () => {
  return (
    <nav className="fixed z-50 bg-slate-700 md:bg-[#00000000] flex flex-row md:flex-col w-full md:w-auto py-5 min-h-auto md:min-h-[100vh] justify-center gap-5 md:bottom-auto md:left-auto left-0  bottom-0">
      <NavBtn icon={IoHomeSharp} />

      <NavBtn navigateTo="about" icon={FaUser} />

      <NavBtn navigateTo="projects" icon={FaBriefcase} />

      <NavBtn navigateTo="contact" icon={HiOutlineMailOpen} />
    </nav>
  );
};

export default ControlsNavbar;

import { NavLink } from "react-router-dom";
import { PropTypes } from "prop-types";

const NavBtn = ({ navigateTo, icon: HiOutlineMailOpen }) => {
  return (
    <NavLink to={`/${navigateTo ? navigateTo : ""}`}>
      <button className="btn-nav bg-[#454E56]  w-12 h-12  md:w-14 md:h-14 rounded-full flex justify-center items-center shadow-sm">
        <HiOutlineMailOpen className="text-xl md:text-3xl" />
      </button>
    </NavLink>
  );
};

NavBtn.propTypes = {
  icon: PropTypes.func,
  navigateTo: PropTypes.string,
};

export default NavBtn;

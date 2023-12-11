import PropTypes from "prop-types";

const Container = ({ children }) => {
  return (
    <div className="w-full px-5 md:max-w-7xl min-h-screen mx-auto relative ">
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;

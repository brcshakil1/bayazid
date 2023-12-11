import { PropTypes } from "prop-types";

const SectionTitle = ({ firstWord, lastWord }) => {
  return (
    <div>
      <h2 className="text-4xl md:text-6xl font-bold text-center pb-10">
        <span className="text-blue-400">{firstWord}</span> {lastWord}
      </h2>
    </div>
  );
};

SectionTitle.propTypes = {
  firstWord: PropTypes.string,
  lastWord: PropTypes.string,
};

export default SectionTitle;

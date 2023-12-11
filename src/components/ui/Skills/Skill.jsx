import { PropTypes } from "prop-types";

const Skill = ({ skill, percent }) => {
  console.log(percent);
  return (
    <div>
      <h3 className="text-xl">{skill}</h3>
      <div className="flex gap-2 items-center">
        <p className="text-slate-400">{percent}%</p>
        <div className="w-full h-2 bg-slate-500 hover:shadow-blue-500 shadow-md">
          <div
            className={`h-full bg-blue-400 `}
            style={{ width: `${percent}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

Skill.propTypes = {
  skill: PropTypes.string,
  percent: PropTypes.number,
};

export default Skill;

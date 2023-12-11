import SectionTitle from "../SectionTitle/SectionTitle";
import Skill from "./Skill";
import { useEffect, useState } from "react";

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("./skills.json")
      .then((res) => res.json())
      .then((data) => setSkills(data));
  }, []);

  return (
    <div>
      <SectionTitle firstWord="My" lastWord="Skills" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {skills?.map((item) => (
          <Skill key={item.skill} skill={item.skill} percent={item.percent} />
        ))}
      </div>
    </div>
  );
};

export default Skills;

import ResumeBtn from "../../components/ui/ResumeBtn/ResumeBtn";
import Skills from "../../components/ui/Skills/Skills";
import SectionTitle from "./../../components/ui/SectionTitle/SectionTitle";
const About = () => {
  return (
    <div className="px-20 py-10">
      <SectionTitle firstWord="About" lastWord="Me" />
      <div className="">
        <div>
          <div className="">
            <div>
              <h3 className="text-xl font-medium">Information About Me:</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. At,
                inventore ex architecto non nihil fugiat sed explicabo iste
                saepe ipsa.
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. At,
                inventore ex architecto non nihil fugiat sed explicabo iste
                saepe ipsa.
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. At,
                inventore ex architecto non nihil fugiat sed explicabo iste
                saepe ipsa.
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. At,
                inventore ex architecto non nihil fugiat sed explicabo iste
                saepe ipsa.
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. At,
                inventore ex architecto non nihil fugiat sed explicabo iste
                saepe ipsa.
              </p>
            </div>
            <ResumeBtn />
          </div>
          <div></div>
        </div>
        <div className="pt-20">
          <Skills />
        </div>
      </div>
    </div>
  );
};

export default About;

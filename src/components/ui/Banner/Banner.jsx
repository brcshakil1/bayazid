import bannerImg from "../../../assets/bannerImg.png";
import { TypeAnimation } from "react-type-animation";

import ResumeBtn from "../ResumeBtn/ResumeBtn";

const Banner = () => {
  return (
    <div
      className="  flex flex-col
     md:flex-row justify-between md:items-center  md:h-screen 
     gap-10 px-0 md:pl-20  pt-10 pb-32 md:pb-0 md:pt-0 "
    >
      <div className=" w-full md:w-3/5 ">
        <div className="space-y-2">
          <h1 className="text-4xl md:text-5xl  font-bold">
            Hi, I{`'`}m <span className="text-blue-400">Bayazid</span>
          </h1>
          <h2>
            <TypeAnimation
              className="text-xl md:text-3xl font-medium"
              sequence={[
                // Same substring at the start will only be typed once, initially
                "Professional MERN Stack Developer",
              ]}
              speed={50}
            />
          </h2>
        </div>
        <div className="w-full md:w-[500px]  py-5">
          <TypeAnimation
            className="text-base text-slate-300 "
            sequence={[
              // Same substring at the start will only be typed once, initially
              1000,
              "Proficient in MERN Stack, HTML, CSS, Tailwind, JavaScript, React, Node.js, Express.js, MongoDB, Git, GitHub, and Firebase. I thrive on continuous learning, adapting to emerging technologies. I craft elegant, user-centric solutions and leverage version control for seamless collaboration. Excited to contribute dynamic expertise to innovative projects, let's build something extraordinary together!",
            ]}
            speed={100}
          />
          <br />
        </div>
        <ResumeBtn />
      </div>
      <div className="w-full md:w-2/5  bg-black rounded-md ">
        <img
          src={bannerImg}
          className="w-full md:w-[550px] object-cover text-center"
          alt="Bayazid's Images"
        />
      </div>
    </div>
  );
};

export default Banner;

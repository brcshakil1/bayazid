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
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil blanditiis dignissimos velit accusantium officiis? Tenetur doloremque tempore, voluptates, consequuntur dolor nihil sit, quos blanditiis labore dignissimos numquam aspernatur explicabo obcaecati reiciendis amet impedit earum maxime distinctio. Dolorem aliquid quas, facilis eligendi officia delectus nesciunt, saepe voluptas excepturi facere dolor possimus.",
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

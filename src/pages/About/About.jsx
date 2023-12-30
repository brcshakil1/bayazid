import ResumeBtn from "../../components/ui/ResumeBtn/ResumeBtn";
import Skills from "../../components/ui/Skills/Skills";
import SectionTitle from "./../../components/ui/SectionTitle/SectionTitle";
const About = () => {
  return (
    <div className="md:px-20 px-0 pt-10 pb-32">
      <SectionTitle firstWord="About" lastWord="Me" />
      <div className="">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-5">
          <div className="flex-1">
            <div>
              <h3 className="text-xl font-medium pb-5 ">
                Information About Me:
              </h3>
              <div className="space-y-3 text-slate-300">
                <p>
                  Welcome to my Portfolio! I am Bayazidur Rahman Chowdhury
                  Shakil, a professional web developer with a journey that
                  kicked off in 2022. My expertise spans the Front End
                  Development with React And I am comfortable with MERN Stack,
                  encompassing HTML, CSS, Tailwind, JavaScript, React, Node.js,
                  Express.js, MongoDB, Git, GitHub, and Firebase.
                </p>
                <p>
                  As a perpetual learner, I thrive on staying ahead of the curve
                  with emerging technologies. Proficient in collaborative
                  development, I leverage Git for smooth teamwork.
                </p>
                <p>
                  Feel free to contact me or download my resume and, while you
                  are here, drop me a line! I am always eager to connect with
                  like-minded individuals and explore exciting opportunities.
                  Let{`'`}s embark on a journey of innovation together. Cheers
                  to building something extraordinary!
                </p>
              </div>
            </div>
            <ResumeBtn />
          </div>
          <div className="flex-1 pt-6 md:pt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="hover:border rounded-md p-4 hover:border-blue-400 shadow-sm hover:shadow-blue-400 bg-[#1b1b1bcb]">
                <h2 className="text-xl font-bold">Education</h2>
                <ul className="list-disc p-3">
                  <li>Graduation: Bachelors of Social Study | 2017-2021</li>
                  <li>HSC: Higher Secondary | 2015-2016</li>
                  <li>SSC: Secondary School | 2013-2014</li>
                </ul>
              </div>
              <div className="hover:border rounded-md p-4 hover:border-blue-400 shadow-sm hover:shadow-blue-400 bg-[#1b1b1bcb]">
                <h2 className="text-xl font-bold">Achievements</h2>
                <ul className="list-disc ">
                  <p>Coursera Certifications:</p>
                  <div
                    className="p-3"
                    title="Introduction to Web Development with HTML, CSS, JavaScript"
                  >
                    <li>Web Development</li>
                    <li>Completed on: January 19, 2023</li>
                  </div>
                  <div className="p-3" title="Developing Front-End Apps with ">
                    <li>React</li>
                    <li>Completed on: January 28, 2023</li>
                  </div>
                </ul>
              </div>
              <div className="hover:border rounded-md p-4 hover:border-blue-400 shadow-sm hover:shadow-blue-400 bg-[#1b1b1bcb]">
                <h2 className="text-xl font-bold">Experiences</h2>
                <h2 className="text-3xl font-bold py-2">+1 Year,</h2>
                <p>Learning Experience</p>
              </div>
              <div className="hover:border rounded-md p-4 hover:border-blue-400 shadow-sm hover:shadow-blue-400 bg-[#1b1b1bcb]">
                <h2 className="text-xl font-bold">Goals</h2>
                <h2 className="text-3xl font-bold py-2">In 2 Years,</h2>
                <p>I want to see me as a senior web developer</p>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-20">
          <Skills />
        </div>
      </div>
    </div>
  );
};

export default About;

import { useParams } from "react-router-dom";
import SectionTitle from "./../../components/ui/SectionTitle/SectionTitle";
import Slider from "./Slider";

const ProjectDetails = () => {
  const { idx } = useParams();
  const projects = [
    {
      image: "../src/assets/project-1/card-1.jpg",
      name: "Burj Al Arif",
      project_about: "Building Management System (BMS)",
      starting_data: "24 November, 2023",
      ending_data: "30 November, 2023",
      projects_description: [
        "MERN stack web app enables remote property management for owners, showcasing vital details and paginated apartment listings in a concise layout.",
        "Intuitive user authentication redirects unregistered users to login, ensuring a streamlined agreement process. Members can easily submit and manage agreements.",
        "Multi-tiered user roles (User, Member, Admin) offer personalized dashboards, facilitating seamless rent payments and agreement management for enhanced user experience.",
      ],
      technologies: [
        "Front-end: HTML, Tailwind, Material UI, JS and React.js",
        "Back-end : Express.js, Node.js, and MongoDB",
        "Payment System: React Stripe.js",
        "Furthermore, to fortify user security and streamline authentication processes, I have seamlessly integrated Firebase Authentication. For efficient deployment, I have utilized Firebase hosting.",
      ],
      slidersImage: [
        "https://i.ibb.co/gttqHJZ/project-1-2.png",
        "https://i.ibb.co/Cvb4z9M/project-1-3.png",
        "https://i.ibb.co/Js42Fj9/project-1-4.png",
      ],
      livePreview: "https://burj-al-arif-6511c.web.app",
    },
    {
      image: "../src/assets/project-2/card-2.jpg",
      name: "Let's Study",
      project_about: "Study Project",
      starting_data: "5 November, 2023",
      ending_data: "8 November, 2023",
      projects_description: [
        "Let's Study enables assignment creation, submission, and evaluation, fostering collaborative learning in a streamlined interface.",
        "Seamless assignment creation, submission, and evaluation for a user-centric learning experience on Let's Study.",
        "Dynamic assignment pages with pagination ensure accessibility, empowering users to engage in an interactive learning community",
      ],
      technologies: [
        "Front-end: HTML, Tailwind, Daisy UI, JS and React.js",
        "Back-end : Express.js, Node.js, and MongoDB",
        "Furthermore, to fortify user security and streamline authentication processes, I have seamlessly integrated Firebase Authentication. For efficient deployment, I have utilized Firebase hosting.",
      ],
      slidersImage: [
        "https://i.ibb.co/ww7RZLM/project-2-1.png",
        "https://i.ibb.co/0JnD9gZ/project-2-2.png",
        "https://i.ibb.co/nc5GFgS/project-2-3.png",
      ],
      livePreview: "https://lets-study-435f5.web.app/",
    },
    {
      image: "../src/assets/project-3/card-3.jpg",
      name: "DriveWave",
      project_about: "Automotive brands shop projects",
      starting_data: "18 October, 2023",
      ending_data: "20 October, 2023",
      projects_description: [
        "E-commerce platform with dynamic product browsing, brand exploration, and a personalized cart for a streamlined user experience.",
        "Easily add, update, and explore products, with brand-specific pages and a personalized cart, enhancing the DriveWave shopping experience.",
        "DriveWave features dynamic routes, secure login, and registration, empowering users to manage and update their own product listings.",
      ],
      technologies: [
        "Front-end: HTML, Tailwind, Daisy UI, JS and React.js",
        "Back-end : Express.js, Node.js, and MongoDB",
        "Payment System: React Stripe.js",
        "Furthermore, to fortify user security and streamline authentication processes, I have seamlessly integrated Firebase Authentication. For efficient deployment, I have utilized Firebase hosting.",
      ],
      slidersImage: [
        "https://i.ibb.co/3c54P1C/project-3-1.png",
        "https://i.ibb.co/qyZ4b30/project-3-2.png",
      ],
      livePreview: "https://drive-wave-client.web.app",
    },
    {
      image: "../src/assets/project-4/card-4.jpg",
      name: "DriveWave",
      project_about: "Automotive brands shop projects",
      starting_data: "18 October, 2023",
      ending_data: "20 October, 2023",
      projects_description: [
        "E-commerce platform with dynamic product browsing, brand exploration, and a personalized cart for a streamlined user experience.",
        "Easily add, update, and explore products, with brand-specific pages and a personalized cart, enhancing the DriveWave shopping experience.",
        "DriveWave features dynamic routes, secure login, and registration, empowering users to manage and update their own product listings.",
      ],
      technologies: [
        "Front-end: HTML, Tailwind, Daisy UI, JS and React.js",
        "Back-end : Express.js, Node.js, and MongoDB",
        "Payment System: React Stripe.js",
        "Furthermore, to fortify user security and streamline authentication processes, I have seamlessly integrated Firebase Authentication. For efficient deployment, I have utilized Firebase hosting.",
      ],
      slidersImage: [
        "https://i.ibb.co/Dz56SfH/project-4-1.png",
        "https://i.ibb.co/KD47SFX/project-4-2.png",
      ],
      livePreview: "https://eduevent-39570.web.app/",
    },
  ];

  const project = projects[parseInt(idx)];

  return (
    <div className=" px-0 md:px-20 pt-10 md:pb-10 pb-32">
      <SectionTitle firstWord="Project" lastWord="Details" />
      <div className=" ">
        <Slider sliderImg={project?.slidersImage} />
        <a
          href={project?.livePreview}
          rel="noreferrer"
          target="_blank"
          className="bg-black text-xl font-bold py-3 text-center block rounded-lg mt-5"
        >
          Live Preview
        </a>
      </div>
      <div className="py-10">
        <div key={idx}>
          <h2 className="text-2xl ">{project?.name}</h2>
          <p className="text-slate-400">
            {project?.project_about} | {project?.starting_data} -{" "}
            {project?.ending_data}
          </p>
          <p className="pt-5 pb-2 text-xl">Short Description:</p>
          <ul className="text-slate-400 px-4">
            {project?.projects_description?.map((desc) => (
              <li key={desc} className="list-disc">
                {desc}
              </li>
            ))}
          </ul>
          <p className="pt-5 pb-2 text-xl">Technologies Used:</p>
          <ul className="text-slate-400 px-4">
            {project?.technologies?.map((technology, idx) => (
              <li key={idx} className="list-disc">
                {technology}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;

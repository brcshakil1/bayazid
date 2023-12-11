import { Outlet } from "react-router-dom";
import ControlsNavbar from "../components/shared/ControlsNavbar/ControlsNavbar";
import Container from "./../components/shared/Container/Container";
// import bgVideo from "../assets/bgVideo.mp4";
// import bgVideo2 from "../assets/bgVideo2.mp4";
import bgVideo3 from "../assets/bgVideo3.mp4";

const Main = () => {
  return (
    <div className="overflow-y-scroll overflow-x-hidden">
      <video
        className="hidden md:block fixed object-cover top-0 left-0 min-w-[100vw] min-h-screen -z-10"
        src={bgVideo3}
        autoPlay
        loop
      ></video>
      <div id="overlay" className="hidden md:block"></div>
      <Container>
        <ControlsNavbar />
        <Outlet />
      </Container>
    </div>
  );
};

export default Main;

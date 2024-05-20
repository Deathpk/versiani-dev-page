import Image from "next/image";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import OurMission from "./components/OurMission";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import UnderConstruction from "./components/UnderConstruction";
import MainBanner from "./components/MainBanner";
import OurTeam from "./components/OurTeam";

export default function Home() {
  return (
    <main className="">
      {/* <UnderConstruction/> */}
      <Navbar/>
      <MainBanner/>
      <AboutUs/>
      <Projects/>
      <OurTeam/>
    </main>
  );
}

import Image from "next/image";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import OurMission from "./components/OurMission";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import UnderConstruction from "./components/UnderConstruction";
import MainBanner from "./components/MainBanner";
import OurTeam from "./components/OurTeam";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* <UnderConstruction/> */}
      <Navbar/>
      <MainBanner/>
      <AboutUs/>
      <Projects/>
      <OurTeam/>
      <Footer/>
    </main>
  );
}

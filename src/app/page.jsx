import Image from "next/image";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import OurMission from "./components/OurMission";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import UnderConstruction from "./components/UnderConstruction";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <UnderConstruction/>
      {/* <Navbar/>
      <AboutUs/>
      <OurMission/>
      <Projects/>
      <Contact/> */}
    </main>
  );
}

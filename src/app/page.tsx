import HomeComponent from "@/components/HomeInfo";
import "./page.css";
import Particles from "@/particles/particlesbackground";
import ScrollIndicator from "@/particles/ScrollIndicator";
import MotionScroll from "@/components/Framer-Motion";
import TabsProjects from "@/components/TabsProjects";
import MyProfilePicture from "@/pages/Images";
import AboutMeComp from "@/components/AboutMeInfo";

export default function Home() {
  return (
    <main className="relative w-screen overflow-hidden">
      <div
      style={{
        width: "100vw",
        height: "100vh", 
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 0,
      }}
    >
      <Particles
        particleColors={["#ffffff", "#ffffff"]}
        particleCount={400}
        particleSpread={25}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
      />
    </div>
      <MotionScroll>
        <div className="grid grid-rows-1 md:grid-cols-2 place-items-center h-screen z-10 relative">
          <HomeComponent />
          <div className="mt-20 md:mt-0">
            <MyProfilePicture />
          </div>
        </div>
      </MotionScroll>

      <div className="flex h-screen z-10 relative margin-auto">
        <MotionScroll>
          <AboutMeComp />
        </MotionScroll>
      </div>

      {/* Segunda seção */}
        <div className="flex justify-center items-center h-screen z-10 relative">
          <MotionScroll>
            <h1 className=" text-center">My Projects</h1>
            <TabsProjects />
          </MotionScroll>
        </div>

      

      {/* ScrollIndicator */}
      <nav className="absolute bottom-4/5 left-1/25 transform z-20">
      <ScrollIndicator/>
      </nav>
    </main>
  );
}

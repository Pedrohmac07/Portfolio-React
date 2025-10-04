import HomeComponent from "@/components/HomeInfo";
import "./page.css";
import Particles from "@/particles/particlesbackground";
import ScrollIndicator from "@/particles/ScrollIndicator";
import MotionScroll from "@/particles/Framer-Motion";
import TabsProjects from "@/components/TabsProjects";
import MyProfilePicture from "@/particles/Images";
import AboutMeComp from "@/components/AboutMeInfo";

export default function Home() {
  return (
    <main className="relative w-screen overflow-hidden">
      <div className="w-screen h-screen fixed top-0 left-0 z-0">
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

      <div className="flex justify-center items-center z-10 relative mb-10">
        <MotionScroll>
          <h1 className=" text-center">My Projects</h1>
          <TabsProjects />
        </MotionScroll>
      </div>
      <div className="relative "><h3 className=" text-center text-2xl font-bold mb-10 z-10">You can search for more projects on my <a href="https://github.com/Pedrohmac07" className=" underline hover:text-blue-700">Github</a></h3></div>

      <nav className="absolute bottom-4/5 left-1/25 transform">
        <ScrollIndicator />
      </nav>
    </main>
  );
}

import HomeComponent from "@/components/HomeInfo";
import "./page.css";
import StarsBackground from "@/particles/BackgroundParticles";
import MyProfilePicture from "@/pages/Images";
import ScrollIndicator from "@/particles/ScrollIndicator";
import MotionScroll from "@/components/Framer-Motion";
import TabsProjects from "@/components/TabsProjects";

export default function Home() {
  return (
    <main className="relative w-screen overflow-x-hidden">

      {/* Fundo */}
      <div className="absolute inset-0 z-0">
        <StarsBackground />
      </div>

      {/* Primeira seção */}
      <MotionScroll>
        <div className="grid grid-cols-2 place-items-center gap-0 h-screen z-10 relative">
          <HomeComponent />
          <MyProfilePicture />
        </div>
      </MotionScroll>

      {/* Segunda seção */}
        <div className="flex justify-center items-center h-screen z-10 relative">
          <MotionScroll>
            <h1 className=" text-center">Meus Projetos</h1>
            <TabsProjects />
          </MotionScroll>
        </div>

      

      {/* ScrollIndicator */}
      <nav className="fixed bottom-0.5 left-1/2 transform z-20">
      <ScrollIndicator/>
      </nav>
    </main>
  );
}

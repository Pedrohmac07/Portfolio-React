import HomeComponent from "@/components/HomeInfo";
import './page.css'
import StarsBackground from "@/particles/BackgroundParticles";
import MyProfilePicture from "@/pages/Images";

export default function Home() {
  return (<div className="relative h-screen w-screen">
    <StarsBackground/>
    <div className="absolute inset-0 grid grid-cols-2 place-items-center gap-0">
      <HomeComponent />
      <MyProfilePicture />
    </div>
  </div>
);
}

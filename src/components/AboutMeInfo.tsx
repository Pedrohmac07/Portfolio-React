"use client";
import "../styles/AboutMe.css";
import TextPressure from "../utils/TextPressure";
import LogoLoop from "../utils/LogoLoop";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPython,
  SiJavascript,
  SiDocker,
  SiGithub,
  SiGit,
  SiAdobe,
  SiNodedotjs,
  SiC,
} from "react-icons/si";

const techLogosA = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  {
    node: <SiTypescript />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
  { node: <SiPython />, title: "Python", href: "https://www.python.org" },
  {
    node: <SiJavascript />,
    title: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
];

const techLogosB = [
  { node: <SiDocker />, title: "Docker", href: "https://www.docker.com" },
  { node: <SiGithub />, title: "GitHub", href: "https://github.com" },
  { node: <SiGit />, title: "Git", href: "https://git-scm.com" },
  { node: <SiAdobe />, title: "Adobe", href: "https://www.adobe.com" },
  { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiC />, title: "C", href: "https://www.c-language.org/" },
]

const AboutMeComp = () => {
  return (
    <section className="w-4/5 max-w-5xl text-white mx-auto text-center flexbox">
      <div className="relative mx-auto">
        <TextPressure
          text="About Me"
          flex={true}
          alpha={false}
          stroke={false}
          width={true}
          weight={true}
          italic={true}
          textColor="#ffffff"
          strokeColor="#ff0000"
          minFontSize={36}
        />
      </div>
      <p className="text-xl mt-12 indent-4 text-justify relative">
        Hello, I'm<strong> Pedro Machado</strong>, currently studying <strong>Computer Engineering</strong>, and I have a passion for <strong>programming</strong> and <strong>design</strong>. I love to create beautiful and functional web applications, and I am always looking for new challenges and opportunities to learn and grow as a <strong>developer</strong>. I have some projects and knowledge in development, and I am excited to share my work with you!
      </p>
      <div className="grid gap-4 overflow-hidden mt-12">
        <LogoLoop
          logos={techLogosA}
          speed={120}
          direction="left"
          logoHeight={48}
          gap={40}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor="#ffffff"
          ariaLabel="Technology partners"
        />
        <LogoLoop
          logos={techLogosB}
          speed={70}
          direction="right"
          logoHeight={48}
          gap={40}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor="#ffffff"
          ariaLabel="Technology partners"
        />
      </div>
    </section>
  );
};

export default AboutMeComp;

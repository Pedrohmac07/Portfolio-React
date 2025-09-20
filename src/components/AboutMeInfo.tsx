"use client";
import './AboutMe.css';
import TextPressure from './TextPressure';
import LogoLoop from './LogoLoop';

import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiPython, SiJavascript, SiDocker, SiGithub, SiGit, SiAdobe, SiNodedotjs, SiPostman, SiC} from 'react-icons/si';

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiPython />, title: "Python", href: "https://www.python.org" },
  { node: <SiJavascript />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { node: <SiDocker />, title: "Docker", href: "https://www.docker.com" },
  { node: <SiGithub />, title: "GitHub", href: "https://github.com" },
  { node: <SiGit />, title: "Git", href: "https://git-scm.com" },
  { node: <SiAdobe />, title: "Adobe", href: "https://www.adobe.com" },
  { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiPostman />, title: "Postman", href: "https://www.postman.com" },
  { node: <SiC />, title: "C", href: "https://www.c-language.org/" },
];

const AboutMeComp = () => {
  return (
    <div className="w-4/5 max-w-5xl text-white mx-auto text-center flexbox">
      {/* Título animado */}
      <div style={{ position: 'relative', height: '200px', margin: '0 auto' }}>
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
      {/* Parágrafo */}
      <p className="text-lg mt-4 indent-4 text-justify">
        Hello, <strong>Im Pedro Machado</strong>, currently studying <strong>Computer Engineering</strong>, 
        and i have a passion with programming and <strong>design</strong>. I love to create beautiful and 
        functional web applications, and I am always looking for new challenges and opportunities to learn 
        and grow as a developer. I have some projects and knowledge in front-end and back-end development, 
        and I am excited to share my work with you!
      </p>
      {/* LogoLoop abaixo do parágrafo */}
      <div style={{ height: '200px', position: 'relative', overflow: 'hidden', marginTop: '2rem'}}>
        <LogoLoop
          logos={techLogos}
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
      </div>
    </div>
  );
};

export default AboutMeComp;

"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)

import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";
import { Opacity } from '@tsparticles/engine';

const HomeComponent = () => (
  <div className="w-75">
    <h1 className="text-4xl font-bold text-white">
      <ReactTyped strings={["Olá, eu sou Pedro Machado!"]} typeSpeed={40} />
    </h1>
    <p className="text-shadow-white">
      <ReactTyped
        strings={[
          "Gosto de programar",
          "Gosto de design",
          "Amo front-end",
          "Amo back-end!"
        ]}
        typeSpeed={40}
        backSpeed={50}
        attr="placeholder"
        loop
      >
        <input type="text" />
      </ReactTyped>
    </p>
    <motion.div initial={{y: 200, Opacity: 0}}
    animate={{y:0, opacity: 1}}
    transition={{duration: 1}}
    className="flex gap-1"
    >
      <a className='fabicon'>
        <FontAwesomeIcon icon={['fab', 'github']}/>
      </a>
      <a className='fabicon'>
        <FontAwesomeIcon icon={['fab', 'linkedin']}/>
      </a>
      <a href='' className='fabicon'>
        <FontAwesomeIcon icon={['fab', 'instagram']}/>
      </a>
    </motion.div>
  </div>
);

export default HomeComponent;

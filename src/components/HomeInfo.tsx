"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)

import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";
import './HomeInfo.css';

const HomeComponent = () => (
  <div className="w-75">
    <h1 className="text-4xl font-bold text-white">
      <ReactTyped strings={["Hello, I'm Pedro Machado!"]} typeSpeed={40} />
    </h1>
    <p className="text-shadow-white">
      <ReactTyped
        strings={[
          "I love programming",
          "I love design",
          "Studying a lot!",
        ]}
        typeSpeed={40}
        backSpeed={50}
        attr="placeholder"
        loop
      >
        <input type="text" />
      </ReactTyped>
    </p>
    <motion.div initial={{y: 200, opacity: 0}}
    animate={{y:0, opacity: 1}}
    transition={{duration: 1}}
    className="grid grid-cols-3 gap-4 w-1/2 mt-4 text-white text-3xl">      
    <a href='https://github.com/Pedrohmac07' target='_blank' className='fabicon'>
        <FontAwesomeIcon icon={['fab', 'github']}/>
      </a>
      <a href='https://www.linkedin.com/in/pedro-henrique-machado-99171334a/' target='_blank' className='fabicon'>
        <FontAwesomeIcon icon={['fab', 'linkedin']}/>
      </a>
      <a href='https://www.instagram.com/pedrohmachado0?igsh=NjFzZDIyZmo5YXJj' target='_blank' className='fabicon'>
        <FontAwesomeIcon icon={['fab', 'instagram']}/>
      </a>
    </motion.div>
  </div>
);

export default HomeComponent;

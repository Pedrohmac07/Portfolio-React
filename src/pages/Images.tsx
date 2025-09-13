'use client'
import Image from 'next/image'
import { motion } from "framer-motion"

export default function MyProfilePicture() {
  return (
    <motion.div
      className="p-2 rounded-full w-90 h-90 flex items-center justify-center shadow-lg"
      style={{
        background: "linear-gradient(270deg, #a855f7, #3b82f6, #ec4899)",
        backgroundSize: "600% 600%",
      }}
      animate={{
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      }}
      transition={{
        duration: 4,
        ease: "linear",
        repeat: Infinity,
      }}
    >
      <div className="rounded-full overflow-hidden w-[340px] h-[340px] bg-black">
        <Image
          src="/fotominha.jpg"
          width={500}
          height={500}
          alt="Minha foto"
          className="rounded-full object-cover w-full h-full"
        />
      </div>
    </motion.div>
  )
}
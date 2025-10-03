'use client'
import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
}

export default function MotionScroll({ children }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}      
      whileInView={{ opacity: 1, y: 0 }}    
      exit={{ opacity: 0, y: 20 }}          
      viewport={{ once: false, amount: 0.1 }} 
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className="w-full h-full margin-auto"
    >
      {children}
    </motion.div>
  );
}

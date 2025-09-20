'use client'
import { useState } from "react";
import projectCategories from "@/data/projects.json";
import { motion } from "framer-motion";

export default function ProjectsTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const activeCategory = projectCategories[activeTab];

  return (
    <div className="w-full max-w-6xl mx-auto mt-16 px-4">
      <div className="grid grid-cols-2 gap-5 mb-8 justify-center">
        {projectCategories.map((category, index) => (
          <button
            key={category.id}
            onClick={() => setActiveTab(index)}
            className={`px-4 py-2 font-medium transition-colors hover:cursor-pointer ${
              activeTab === index
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-800"
            }`}
          >
            {category.category}
          </button>
        ))}
      </div>

      {/* Projetos da categoria ativa */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
        {activeCategory.projects.map((project: any) => (
          <motion.a
            className="border p-4 rounded-lg shadow-md hover:shadow-lg bg-gray-950 hover:cursor-pointer hover:scale-105 duration-200"
            key={project.id}
            whileHover={{ scale: 1.00 }}
            whileTap={{ scale: 0.95 }}
            href={project.link}
            target="_blank"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-bold mb-2">{project.name}</h3>
            <p className="text-gray-700">{project.description}</p>
          </motion.a>
        ))}
        <div className="w-screen">
          <h3 className=" text-center text-2xl font-bold">You can search for more projects on my <a href="https://github.com/Pedrohmac07" className=" underline hover:text-blue-700">Github</a></h3>
        </div>
      </div>
    </div>
  );
}

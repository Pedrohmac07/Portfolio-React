'use client'
import { useState } from "react";
import projectCategories from "@/data/projects.json";

export default function ProjectsTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const activeCategory = projectCategories[activeTab];

  return (
    <div className="w-full max-w-6xl mx-auto mt-16 px-4">
      {/* Abas de categoria */}
      <div className="flex space-x-4 mb-8 justify-center">
        {projectCategories.map((category, index) => (
          <button
            key={category.id}
            onClick={() => setActiveTab(index)}
            className={`px-4 py-2 rounded-md font-medium transition-colors ${
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
          <div
            key={project.id}
            className="border p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow bg-gray-950"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-bold mb-2">{project.name}</h3>
            <p className="text-gray-700">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

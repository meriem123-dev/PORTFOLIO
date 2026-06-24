import React from "react";
import prj1 from "../assets/prj1.png";

const Projects = () => {
  const projets = [
    {
      id: 1,
      image: prj1,
      title: "CityQuest",
      desc: "10:58:16 PM [vite] (client) hmr update /src/index.css, /src/components/Projects.jsx (x5)",
      tech: ["React", "Node.js", "MangoDB"],
    },
    {
      id: 2,
      image: prj1,
      title: "CityQuest",
      desc: "10:58:16 PM [vite] (client) hmr update /src/index.css, /src/components/Projects.jsx (x5)",
      tech: ["React", "Node.js", "MangoDB"],
    },
    {
      id: 3,
      image: prj1,
      title: "CityQuest",
      desc: "10:58:16 PM [vite] (client) hmr update /src/index.css, /src/components/Projects.jsx (x5)",
      tech: ["React", "Node.js", "MangoDB"],
    },
    {
      id: 4,
      image: prj1,
      title: "CityQuest",
      desc: "10:58:16 PM [vite] (client) hmr update /src/index.css, /src/components/Projects.jsx (x5)",
      tech: ["React", "Node.js", "MangoDB"],
    },
  ];
  return (
    <section className="py-16 bg-gray-900 " id="projects">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Projects .
          </h2>

          <div className="w-28 h-1 bg-primary mx-auto mt-2 rounded-2xl"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projets.map((prj) => (
            <div
              key={prj.id}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-lg hover:scale-105 trannsition-all duration-300 "
            >
              <img
                src={prj.image}
                alt={prj.title}
                className="w-full h-44 object-cover hover:opacity-90 transition-opacity duration-300"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white group-hover:text-primary transition-colors ">
                  {prj.title}
                </h3>
                <p className="text-gray-400 text-sm mt-1">{prj.desc}</p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {prj.tech.map((tec, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-0.5  bg-primary text-gray-300 rounded-full hover:bg-gray-800 hover:text-white transition-colors duration-300"
                    >
                      {tec}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

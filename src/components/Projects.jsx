import React from "react";
import cityquest from "../assets/cityquest.jpeg";
import connect from "../assets/connect.png";
import roadskill from "../assets/roadskill.png";
import pencraft from "../assets/roadskill.png";

import { FolderGit2 } from "lucide-react";

const Projects = () => {
  const projets = [
    {
      id: 1,
      image: cityquest,
      title: "CitiQuest",
      desc: "A gamified citizen engagement mobile application that encourages community participation through location-based missions, XP rewards, badges, and real-time notifications. Includes dedicated spaces for citizens, associations, and administrators.",
      tech: [
        "React Native",
        "Expo",
        "Node.js",
        "Express",
        "MongoDB",
        "Firebase",
      ],
      github: "https://github.com/imenelc1/citiQuest",
    },
    {
      id: 2,
      image: connect,
      title: "Connect",
      desc: "A full-stack e-learning platform designed for universities, featuring course management, coding exercises, quizzes, gamification, collaborative spaces, and an AI-powered educational assistant.",
      tech: ["React", "Django", "PostgreSQL", "Tailwind CSS", "Groq AI"],
      github: "https://github.com/imenelc1/Connect",
    },
    {
      id: 3,
      image: roadskill,
      title: "RoadSkill",
      desc: "A desktop management system for driving schools that centralizes learner records, lesson scheduling, examinations, payments, document management, and analytics in a modern Electron application.",
      tech: ["Electron", "React", "TypeScript", "Node.js", "SQLite"],
      github: "https://github.com/imenelc1/roadskill",
    },
    {
      id: 4,
      image: pencraft,
      title: "Pencraft",
      desc: "A full-stack e-commerce platform for personalized graphic design and printing services, allowing customers to place orders, and manage purchases through an intuitive interface.",
      tech: ["Flask", "MySQL", "JavaScript", "HTML", "CSS"],
      github: "https://github.com/meriem123-dev/pencraft",
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden" id="projects">
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
              className="group relative bg-primary/10 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-[0_0_40px_-5px_rgba(62,130,231,0.2)]"
            >
              <div className="overflow-hidden">
                <img
                  className="w-full h-44 object-cover transition-transform duration-700 group-hover:scale-105"
                  src={prj.image}
                  alt={prj.title}
                />
              </div>
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
                <a
                  href={prj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                              flex items-center gap-2
                              py-4
                              rounded-lg
                              text-primary
                              hover:bg-primary
                              hover:text-white
                              transition-all
                              duration-300
                            "
                >
                  <FolderGit2 size={14}/>
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

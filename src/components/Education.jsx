import React from "react";
import EducationImage from "../assets/educ.svg";
import { Calendar, BookOpen, GraduationCap, MapPin } from "lucide-react";

const Education = () => {
  const eduData = [
    {
      id: 1,
      degree: "Software Engineering",
      school: "Abderrahmane Mira University of Bejaia",
      year: "2022 - Present (Expected Graduation: 2027)",
      details:
        "Currently pursuing a Software Engineering degree, studying algorithms, data structures, software architecture, databases, web development, and software design. Through academic projects, I continuously develop practical experience in designing, implementing, and improving software solutions .",
      tags: [
        "Algorithms",
        "Data Structures",
        "Web Development",
        "Software Architecture",
        "Databases",
        "Academic Projects",
      ],
    },
    {
      id: 2,
      degree: "Scientific Baccalaureate",
      school: "Stambouli High School",
      year: "2022",
      details:
        "Graduated with a Scientific Baccalaureate, providing a strong foundation in mathematics, physics, and analytical problem-solving .",
      tags: [
        "Mathematics",
        "Physics",
        "Scientific Reasoning",
        "Problem Solving",
      ],
    },
  ];

  return (
    <section className="text-white py-20 overflow-hidden mt-50" id="education">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="mb-16">
          <p className="text-primary text-md uppercase tracking-widest mb-2 font-semibold cursor-pointer">
            Learning Path
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Education.
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-16 mt-4">
          {/* Image */}
          <div
            className="w-full lg:w-5/12 flex justify-center lg:justify-start"
            data-aos="fade-right"
          >
            <div className="relative w-64 md:w-80 h-80 md:h-[420px]">
              {/* Image */}
              <div className="relative z-20 w-full h-full rounded-3xl overflow-hidden shadow-lg hover:scale-110">
                <img
                  src={EducationImage}
                  alt="Education"
                  className="w-full h-full object-cover object-top rounded-3xl "
                />
              </div>

              <div className="absolute -top-4 -left-4 bg-primary/20 w-16 h-16 rounded-full blur-2xl"></div>
            </div>
          </div>

          {/* Cards */}

          <div className="w-full lg:w-10/12 space-y-6" data-aos="fade-left">
            {eduData.map((edu, index) => (
              <div
                key={edu.id}
                className="group relative rounded-xl overflow-hidden transition-all duration-500 hover:-translate-y-1 border border-white/10 hover:border-primary/40"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Glow */}
                <div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ boxShadow: "0 0 40px 0 rgba(62,130,231,0.12)" }}
                />

                {/* Tab bar */}
                <div className="flex items-center gap-0 bg-[#1e1e2e] border-b border-white/10">
                  {/* Traffic lights */}
                  <div className="flex items-center gap-1.5 px-3 py-2.5 border-r border-white/10">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  </div>

                  {/* Active tab */}
                  <div className="flex items-center gap-2 px-4 py-2 bg-[#1a1a2e] border-r border-white/10 text-xs text-gray-300">
                    <GraduationCap size={12} className="text-primary" />
                    {index === 0
                      ? "software_engineering.ts"
                      : "baccalaureate.ts"}
                  </div>

                  {/* Inactive tab */}
                  <div className="flex items-center gap-2 px-4 py-2 text-xs text-gray-600">
                    {index === 0
                      ? "baccalaureate.ts"
                      : "software_engineering.ts"}
                  </div>
                </div>

                {/* Editor body */}
                <div className="flex bg-[#12121e]">
                  {/* Line numbers */}
                  <div className="flex flex-col items-end px-3 pt-4 pb-4 text-[11px] text-gray-600 select-none font-mono border-r border-white/5 leading-6 min-w-[36px]">
                    {Array.from({ length: 10 }, (_, i) => (
                      <span key={i}>{i + 1}</span>
                    ))}
                  </div>

                  {/* Code content */}
                  <div className="p-4 font-mono text-[12px] leading-6 overflow-x-auto w-full">
                    <div>
                      <span className="text-purple-400">const </span>
                      <span className="text-blue-300">education</span>
                      <span className="text-white"> = </span>
                      <span className="text-yellow-300">{"{"}</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-primary">degree</span>
                      <span className="text-white">: </span>
                      <span className="text-green-300">"{edu.degree}"</span>
                      <span className="text-white">,</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-primary">University</span>
                      <span className="text-white">: </span>
                      <span className="text-green-300">"{edu.school}"</span>
                      <span className="text-white">,</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-primary">year</span>
                      <span className="text-white">: </span>
                      <span className="text-green-300">"{edu.year}"</span>
                      <span className="text-white">,</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-primary">details</span>
                      <span className="text-white">: </span>
                      <span className="text-green-300">"{edu.details}"</span>
                      <span className="text-white">,</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-primary">tags</span>
                      <span className="text-white">: [</span>
                    </div>
                    <div className="pl-8 flex flex-wrap gap-x-1">
                      {edu.tags.map((tag, i) => (
                        <span key={tag}>
                          <span className="text-orange-300">"{tag}"</span>
                          {i < edu.tags.length - 1 && (
                            <span className="text-white">, </span>
                          )}
                        </span>
                      ))}
                    </div>
                    <div className="pl-4">
                      <span className="text-white">],</span>
                    </div>
                    <div>
                      <span className="text-yellow-300">{"}"}</span>
                      <span className="text-white">;</span>
                    </div>
                  </div>
                </div>

                {/* Status bar */}
                <div className="flex items-center justify-between px-3 py-1 bg-primary/80 text-[10px] text-white/80 font-mono">
                  <div className="flex items-center gap-3">
                    <span>⎇ main</span>
                    <span className="flex items-center gap-1">
                      <MapPin size={9} />
                      {edu.school}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span>TypeScript</span>
                    <span>UTF-8</span>
                    <Calendar size={9} />
                    <span>{edu.year}</span>
                  </div>
                </div>
              </div>
            ))}

            {/* Bottom accent */}
            <div className="flex items-center gap-3 pt-2" data-aos="fade-up">
              <BookOpen size={16} className="text-primary" />
              <p className="text-gray-500 text-xs uppercase tracking-widest font-medium">
                Continuously learning & growing
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

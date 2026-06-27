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
                className="group relative rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Glass background */}
                <div className="absolute inset-0 bg-[#3e82e74e] backdrop-blur-sm border border-white/10  group-hover:border-white rounded-2xl group-hover:border-primary/40 transition-colors duration-500" />

                {/* Glow on hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ boxShadow: "0 0 40px 0 rgba(62,130,231,0.12)" }}
                />

                {/* Left accent bar */}
                <div className="absolute left-0 top-4 bottom-4 w-[3px] rounded-full bg-primary/30 group-hover:bg-primary transition-colors duration-300" />

                <div className="relative z-10 p-6 pl-8">
                  {/* Top row */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/15 border border-primary/30 rounded-xl group-hover:bg-primary/25 transition-colors duration-300">
                        <GraduationCap className="text-primary" size={20} />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-white leading-tight group-hover:text-primary transition-colors duration-300">
                          {edu.degree}
                        </h3>
                        <p className="text-gray-400 text-xs mt-0.5 flex items-center gap-1">
                          <MapPin size={10} className="text-primary/60" />
                          {edu.school}
                        </p>
                      </div>
                    </div>

                    {/* Year badge */}
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/25 text-primary text-xs font-semibold">
                      <Calendar size={11} />
                      {edu.year}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {edu.details}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {edu.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-gray-300 group-hover:border-primary/20 transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
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

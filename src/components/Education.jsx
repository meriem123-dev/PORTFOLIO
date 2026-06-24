import React from "react";
import EducationImage from "../assets/education.png";
import { Calendar, CheckCircle, GraduationCap } from "lucide-react";

const Education = () => {
  const eduData = [
    {
      id: 1,
      degree: "4th Year Software Engineering Student",
      school: "UniversitY Abderahmane Mira of Bejaia",
      year: "2020-2027",
      details:
        "I am currently pursuing a degree in Software Engineering at the University of Science .",
    },
    {
      id: 2,
      degree: "4th Year Software Engineering Student",
      school: "UniversitY Abderahmane Mira of Bejaia",
      year: "2020-2027",
      details:
        "I am currently pursuing a degree in Software Engineering at the Universih a strong foundation in .",
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
              {/* le plus éloigné */}
              <div
                className="absolute inset-0 rounded-3xl border-2 border-primary bg-transparent"
                style={{ transform: "translate(14px, 14px)" }}
              ></div>

              {/* intermédiaire */}
              <div
                className="absolute inset-0 rounded-3xl  border-primary bg-transparent"
                style={{ transform: "translate(8px, 8px)" }}
              ></div>

              {/* Image */}
              <div className="relative z-20 w-full h-full rounded-3xl overflow-hidden shadow-lg hover:scale-110">
                <img
                  src={EducationImage}
                  alt="Education"
                  className="w-full h-full object-cover object-top rounded-3xl"
                />
              </div>

              <div className="absolute -top-4 -left-4 bg-primary/20 w-16 h-16 rounded-full blur-2xl"></div>
            </div>
          </div>

          {/* Cards */}
          <div className="w-full lg:w-11/12 space-y-6" data-aos="fade-left">
            {eduData.map((edu) => (
              <div
                key={edu.id}
                className="group relative p-6 rounded-2xl bg-[#3e82e74e] border border-primary transition-all duration-300 hover:border-primary/50"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary rounded-lg  group-hover:border-primary transition-colors">
                      <GraduationCap className="text-white" size={24} />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                    {edu.degree}
                  </h3>
                  <p className="text-gray-400 text-sm">{edu.school}</p>
                </div>

                <div className="flex items-center gap-2 text-xs font-medium bg-primary px-3 py-1 rounded-full border border-gray-700 w-fit mb-4">
                  <Calendar size={12} className="text-white" />
                  {edu.year}
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {edu.details}
                </p>

                <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-white font-bold">
                  <CheckCircle size={12} />
                  Academic Excellence
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
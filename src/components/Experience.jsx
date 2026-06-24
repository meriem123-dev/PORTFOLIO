import React from "react";
import { Briefcase, Calendar, Cpu,BriefcaseBusiness } from "lucide-react";

const Experience = () => {
  const skills = [
    {
      id: 1,
      name: "React js",
      width: "60%",
      icon: Cpu,
    },
    {
      id: 2,
      name: "React js",
      width: "60%",
      icon: Cpu,
    },
    {
      id: 3,
      name: "React js",
      width: "60%",
      icon: Cpu,
    },
    {
      id: 4,
      name: "React js",
      width: "60%",
      icon: Cpu,
    },
  ];

  const experiences = [
    {
      id: 1,
      role: "teacher",
      company: "Google",
      date: "Jan 2024 - Oct",
    },
    {
      id: 2,
      role: "teacher",
      company: "Google",
      date: "Jan 2024 - Oct",
    },
  ];

  return (
    <section className="text-white py-20 relative overflow-hidden" id="skills">
      <div className=" grid lg:grid-cols-2 gap-20 max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
        <div data-aos="fade-right">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-12">
            Technical <span className="text-primary"> Skills </span>
          </h2>
          <div className="space-y-8">
            {skills.map((sk) => {
              const SkIcon = sk.icon;
              return (
                <div key={sk.id} className="group">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-[#3e82e74e] rounded-lg group-hover:bg-primary transition-colors duration-300">
                      <SkIcon
                        size={20}
                        className="text-primary group-hover:text-white "
                      />
                    </div>

                    <span className="font-medium tracking-wide">{sk.name}</span>
                  </div>

                  <div className="flex justify-end">
                    <span className="text-primary font-bold justify-end">
                      {sk.width}
                    </span>
                  </div>

                  <div className="h-2 w-full bg-[#3e82e74e] rounded-full p-0.5">
                    <div
                      className="h-full rounded-b-full bg-linear-to-r from-primary to-cyan-400 shadow-[0_0_10px_#3e82e74e]"
                      style={{ width: sk.width }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="fade-left max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-12">
            Work <span className="text-primary">Experience</span>
          </h2>
          <div className="space-y-6">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                className="group relative p-6 rounded-2xl bg-[#3e82e74e] hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 mt-1">
                    <div className="p-3 bg-[#3e82e74e] rounded-xl border border-gray-800 group-hover:border-primary transition-colors">
                      <Briefcase className="text-white" size={24} />
                    </div>
                  </div>
                  <div className="grow">
                    <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-2 text-sm text-gray-400">
                      <div className="flex items-center gap-1.5">
                      <BriefcaseBusiness />
                      <p className="text-primary font-medium mt-1">
                        {exp.company}
                      </p>
                      </div>
                      
                      <span className="flex items-center gap-1.5 ">
                        <Calendar />
                        <span>{exp.date}</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

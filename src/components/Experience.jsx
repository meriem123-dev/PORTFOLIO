import React from "react";
import { Briefcase, Calendar, Cpu, BriefcaseBusiness } from "lucide-react";

const Experience = () => {
  const skills = [
    {
      id: 1,
      name: "React",
      width: "70%",
      icon: Cpu,
    },
    {
      id: 2,
      name: "Node.js",
      width: "60%",
      icon: Cpu,
    },
    {
      id: 3,
      name: "Python",
      width: "60%",
      icon: Cpu,
    },
    {
      id: 4,
      name: "JAVA",
      width: "80%",
      icon: Cpu,
    },
    {
      id: 4,
      name: "Flask",
      width: "60%",
      icon: Cpu,
    },
    {
      id: 4,
      name: "JavaScript",
      width: "60%",
      icon: Cpu,
    },
    {
      id: 4,
      name: "Tailwind CSS",
      width: "80%",
      icon: Cpu,
    },
    {
      id: 4,
      name: "PostgreSQL",
      width: "70%",
      icon: Cpu,
    },
    {
      id: 4,
      name: "MangoDB",
      width: "80%",
      icon: Cpu,
    },
    {
      id: 4,
      name: "Git and GitHub",
      width: "60%",
      icon: Cpu,
    },
  ];

  const experiences = [
    {
      id: 1,
      role: "English Tutor for Children",
      company: "ECA School",
      date: "Summer 2025 - Summer 2026",
      description:
        "Taught English to young learners through interactive activities, helping them develop communication skills in a fun and engaging environment.",
    },
    {
      id: 2,
      role: "Discovery IT Intern",
      company: "CEVITAL Agro-Industrie",
      date: "May 2025",
      description:
        "Completed a 15-day internship within the IT department, gaining exposure to system administration, networking, ERP systems, cybersecurity, and business information systems.",
    },
    {
      id: 3,
      role: "Team Leader - Matching & Customer Experience",
      company: "AIESEC in Bejaia",
      date: "2023 - 2024",
      description:
        "coordinated international exchange processes, supported members, and developed leadership, communication, and problem solving skills.",
    },
  ];

  return (
    <section className="text-white py-20 relative overflow-hidden" id="skills">
      <div className=" grid lg:grid-cols-2 gap-20 max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
        <div data-aos="fade-right">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-12">
            Technical <span className="text-primary"> Skills </span>
          </h2>
          <div className="space-y-5">
            {skills.map((sk) => {
              const SkIcon = sk.icon;
              return (
                <div key={sk.id} className="group">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-[#3e82e74e] rounded-lg group-hover:bg-primary transition-colors duration-300">
                      <SkIcon
                        size={16}
                        className="text-primary group-hover:text-white "
                      />
                    </div>

                    <span className="font-medium tracking-wide text-sm">{sk.name}</span>
                  </div>

                  <div className="flex justify-end">
                    <span className="text-primary font-bold justify-end">
                      {sk.width}
                    </span>
                  </div>

                 <div className="h-1.5 w-full bg-[#3e82e74e] rounded-full overflow-hidden">
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

        <div className="fade-left max-w-7xl" data-aos="fade-left">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-12">
            Experience
          </h2>
          <div className="space-y-6">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                className="group relative p-4 rounded-2xl bg-[#3e82e74e] border border-primary hover:border-primary/50 hover:-translate-1.5 hover:border-primary/60 hover:shadow-[0_0_40px_-5px_rgba(62,130,231,0.2)] transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 mt-1">
                    <div className="p-3 bg-[#3e82e74e] rounded-xl border border-gray-800 group-hover:border-primary transition-colors">
                      <Briefcase className="text-white" size={14} />
                    </div>
                  </div>
                  <div className="grow">
                    <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-2 text-sm text-gray-400">
                      <div className="flex items-center gap-1.5">
                        <BriefcaseBusiness size={14}/>
                        <p className="text-primary font-medium mt-1">
                          {exp.company}
                        </p>
                      </div>

                      <span className="flex items-center gap-1.5 ">
                        <Calendar size={14}/>
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

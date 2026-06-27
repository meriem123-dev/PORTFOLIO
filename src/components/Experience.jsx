import React from "react";
import {
  Briefcase,
  Calendar,
  Cpu,
  BriefcaseBusiness,
  Atom,
  Server,
  Code2,
  Coffee,
  FlaskConical,
  FileCode,
  Wind,
  Database,
  DatabaseZap,
  GitBranch,
} from "lucide-react";

const Experience = () => {
  const skills = [
    {
      id: 1,
      name: "React",
      width: "70%",
      icon: Atom,
    },
    {
      id: 2,
      name: "Node.js",
      width: "60%",
      icon: Server,
    },
    {
      id: 3,
      name: "Python",
      width: "60%",
      icon: Code2,
    },
    {
      id: 4,
      name: "JAVA",
      width: "80%",
      icon: Coffee,
    },
    {
      id: 4,
      name: "Flask",
      width: "60%",
      icon: FlaskConical,
    },
    {
      id: 4,
      name: "JavaScript",
      width: "60%",
      icon: FileCode,
    },
    {
      id: 4,
      name: "Tailwind CSS",
      width: "80%",
      icon: Wind,
    },
    {
      id: 4,
      name: "PostgreSQL",
      width: "70%",
      icon: Database,
    },
    {
      id: 4,
      name: "MangoDB",
      width: "80%",
      icon: DatabaseZap,
    },
    {
      id: 4,
      name: "Git and GitHub",
      width: "60%",
      icon: GitBranch,
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

                    <span className="font-medium tracking-wide text-sm">
                      {sk.name}
                    </span>
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
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
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
                  <div className="flex items-center gap-1.5 px-3 py-2.5 border-r border-white/10">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  </div>

                  {/* Active tab */}
                  <div className="flex items-center gap-2 px-4 py-2 bg-[#1a1a2e] border-r border-white/10 text-xs text-gray-300">
                    <Briefcase size={12} className="text-primary" />
                    {exp.role.toLowerCase().replace(/\s+/g, "_")}.ts
                  </div>

                  {/* Inactive tab */}
                  <div className="flex items-center gap-2 px-4 py-2 text-xs text-gray-600">
                    readme.md
                  </div>
                </div>

                {/* Editor body */}
                <div className="flex bg-[#12121e]">
                  {/* Line numbers */}
                  <div className="flex flex-col items-end px-3 pt-4 pb-4 text-[11px] text-gray-600 select-none font-mono border-r border-white/5 leading-6 min-w-[36px]">
                    {Array.from({ length: 9 }, (_, i) => (
                      <span key={i}>{i + 1}</span>
                    ))}
                  </div>

                  {/* Code content */}
                  <div className="p-4 font-mono text-[12px] leading-6 overflow-x-auto w-full">
                    <div>
                      <span className="text-purple-400">const </span>
                      <span className="text-blue-300">experience</span>
                      <span className="text-white"> = </span>
                      <span className="text-yellow-300">{"{"}</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-primary">role</span>
                      <span className="text-white">: </span>
                      <span className="text-green-300">"{exp.role}"</span>
                      <span className="text-white">,</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-primary">company</span>
                      <span className="text-white">: </span>
                      <span className="text-green-300">"{exp.company}"</span>
                      <span className="text-white">,</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-primary">date</span>
                      <span className="text-white">: </span>
                      <span className="text-green-300">"{exp.date}"</span>
                      <span className="text-white">,</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-primary">description</span>
                      <span className="text-white">: </span>
                      <span className="text-green-300">
                        "{exp.description}"
                      </span>
                      <span className="text-white">,</span>
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
                      <BriefcaseBusiness size={9} />
                      {exp.company}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span>TypeScript</span>
                    <span>UTF-8</span>
                    <Calendar size={9} />
                    <span>{exp.date}</span>
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

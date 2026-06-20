import React from "react";
import EducationImage from "../assets/education.png";

const Education = () => {
  const eduData = [
    {
      id: 1,
      degree: "4th Year Software Engineering Student",
      school: "UniversitY Abderahmane Mira of Bejaia",
      year: "2020-2027",
      details:
        "I am currently pursuing a degree in Software Engineering at the University of Science and Technology Houari Boumediene. My coursework has provided me with a strong foundation in programming, algorithms, and software development methodologies.",
    },
    {
      id: 2,
      degree: "4th Year Software Engineering Student",
      school: "UniversitY Abderahmane Mira of Bejaia",
      year: "2020-2027",
      details:
        "I am currently pursuing a degree in Software Engineering at the University of Science and Technology Houari Boumediene. My coursework has provided me with a strong foundation in programming, algorithms, and software development methodologies.",
    },
    {
      id: 3,
      degree: "4th Year Software Engineering Student",
      school: "UniversitY Abderahmane Mira of Bejaia",
      year: "2020-2027",
      details:
        "I am currently pursuing a degree in Software Engineering at the University of Science and Technology Houari Boumediene. My coursework has provided me with a strong foundation in programming, algorithms, and software development methodologies.",
    },
  ];

  return (
    <section className="text-white py-20 overflow-hidden " id="education">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 ">
        <div className="mb-16">
          <p className="text-primary text-md uppercase tracking-widest mb-2 font-semibold cursor-pointer">
            Learning Path
          </p>
          <h2 className="text-4xl md:text-5xl  text-white mt-3  font-bold cursor-pointer">
            Education.
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16 mt-4 ">
          <div
            className="w-full lg:w-5/12 flex justify-center lg:justify-start"
            data-aos="fade-right"
          >
            <div className="relative w-64 md:w-80 h-80 md:h-105">
              {/*le plus éloigné */}
              <div
                className="absolute inset-0 rounded-3xl border-2 border-primary bg-transparent"
                style={{ transform: "translate(14px, 14px)" }}
              ></div>

              {/* intermédiaire */}
              <div
                className="absolute inset-0 rounded-3xl border-1 border-primary bg-transparent"
                style={{ transform: "translate(8px, 8px)" }}
              ></div>

              {/* Image (premier plan) */}
              <div className="relative z-20 w-full h-full rounded-3xl overflow-hidden shadow-lg ">
                <img
                  src={EducationImage}
                  alt="Education"
                  className="w-full h-full object-cover object-top rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-20 lg:h-40" />
    </section>
  );
};

export default Education;
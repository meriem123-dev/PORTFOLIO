import React from "react";
import about from "../assets/about.jpg";

const AboutSection = () => {
  return (
    <section className="text-white mt-20 relative overflow-hidden " id="about">
      <div className="max-w-7xl mx-4 lg:mx-8 px-2 grid md:grid-cols-2 gap-12 items-center py-16 xl:px-16 relative z-10 min-w-0">
        <div data-aos="fade-right">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            More <span className="text-primary">About</span> Me
          </h2>

          <p className="text-gray-400 text-base lg:text-lg mb-10 leading-relaxed">
            I'm a fourth-year Software Engineering student who enjoys learning
            through hands-on projects and practical challenges. I like exploring
            new technologies and improving my technical skills by building
            real-world applications.
            <br /> Recently, I've started solving coding challenges on LeetCode
            and exploring cybersecurity labs on Hack The Box. I'm also
            interested in using AI tools to enhance software development and
            improve productivity while continuing to learn and grow as a future
            software engineer.
          </p>

          <div className="grid grid-cols-3 gap-2 max-w-xl ">
            <div
              className="text-center px-4 rounded-2xl bg-[#3e82e74e] border border-primary hover:border-primary/50 hover:-translate-y-2"
              data-aos="zoom-in"
            >
              <h3 className="text-primary font-bold text-l md:text-2xl">
                4th Year
              </h3>
              <p className="text-xs text-gray-400 uppercase tracking-wider mt-0.5">
                Software Engineering
              </p>
            </div>

            <div
              className="text-center px-4 rounded-2xl bg-[#3e82e74e] border border-primary hover:border-primary/50 hover:-translate-y-2"
              data-aos="zoom-in"
            >
              <h3 className="text-primary font-bold text-l md:text-3xl">+4</h3>
              <p className="text-xs text-gray-400 uppercase tracking-wider mt-0.5">
                Projects
              </p>
            </div>

            <div
              className="text-center px-4 rounded-2xl bg-[#3e82e74e] border border-primary hover:border-primary/50 hover:-translate-y-2"
              data-aos="zoom-in"
            >
              <h3 className="text-primary font-bold text-l md:text-2xl">
                Continuous
              </h3>
              <p className="text-xs text-gray-400 uppercase tracking-wider mt-0.5">
                Learning
              </p>
            </div>
          </div>
        </div>

        <div
          className="mt-16 md:mt-0 flex justify-center lg:justify-end relative"
          data-aos="fade-left"
        >
          <div className="relative w-64 h-64 md:w-96 md:h-120 ">
            <div className="absolute inset-0 z-0 rounded-full shadow-lg border border-primary translate-x-4 translate-y-4"></div>
            <div className="relative z-10 w-full h-full bg-[#3e82e74e] rounded-full overflow-hidden border border-white">
              <img
                src={about}
                alt="About"
                className="w-full h-full object-fill transition-transform duration-500 hover:scale-110 "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

import { Download } from "lucide-react";
import React from "react";

import HeaderImage from "../assets/HeaderImage.jpg";

const scrollToSection = (href) => {
  document.querySelector(href).scrollIntoView({ behavior: "smooth" });
};

const HeroSection = () => {
  return (
    <section className="relative w-full " data-aos="zoom-in-up">
      <div className="absolute top-0 inset-x-0 h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-80px] left-[-60px] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]" />
        <div className="absolute top-[-40px] right-[-60px] w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="w-full px-5 sm:px-8 md:px-12 lg:px-8 max-w-5xl lg:max-w-7xl mx-auto-relative ">
        <div className="grid lg:grid-cols-2 gap-10 relative pt-24 lg:max-w-none max-w-2xl md:max-w-3xl mx-auto">
          <div className="lg:py-6">
            <div className="text-center lg:text-left">
              <h1 className="pt-4 text-white font-bold text-4xl md:text-7xl-5xl lg:text-6xl">
                Hello, I'm{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-[#2493e8] to-cyan-400">
                  Meriem{" "}
                </span>
              </h1>
              <p className="text-gray-300 pt-8 text-center lg:text-left mx-auto mx-w-xl mt-4">
                I'm a Software Engineering student passionate about creating
                modern, reliable, and user-centered applications. I enjoy
                turning ideas into real-world solutions through clean code,
                intuitive design, and continuous learning. I actively explore
                AI-powered tools to enhance development workflows, boost
                productivity, and accelerate problem-solving while maintaining a
                solid understanding of the technologies behind every project.
              </p>
              <div className="flex items-center gap-3 pt-9 flex-col sm:flex-row sm:w-max lg:mx-0">
                <button
                  className="px-6 md:px-7 py-3 rounded-full relative group w-full sm:w-max flex justify-center "
                  onClick={() => scrollToSection("#contact")}
                >
                  <span className="absolute inset-0 bg-primary rounded-3xl  opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all ease-in-out border-2 border-transparent"></span>
                  <span className="relative flex items-center justify-center text-white">
                    Hire Me{" "}
                  </span>
                </button>

                <a
                  href="/CV_English.pdf"
                  download
                  className="border border-primary px-6 md:px-7 py-3 rounded-full w-full sm:w-max flex justify-center items-center gap-2 
                                 text-primary hover:bg-primary hover:text-white transition-all duration-300 group"
                >
                  <Download
                    size={18}
                    className="group-hover:text-white transition-colors duration-300"
                  />
                  Download resume
                </a>
              </div>
            </div>
            <div className="lg:h-full md:flex">
              {/* img Mobile*/}
              <div className="flex justify-center lg:hidden py-5">
                <div
                  className="p-2 shadow-lg border border-primary w-72 h-80"
                  style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" }}
                >
                  <img
                    src={HeaderImage}
                    alt="Header Image"
                    loading="lazy"
                    className="w-full h-full object-cover"
                    style={{
                      borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
                    }}
                  />
                </div>
              </div>

              {/* img Desktop */}
              <div
                className="hidden lg:block absolute z-10 p-2  top-1/5 lg:right-3 shadow-lg border border-primary lg:w-96 lg:h-[420px]"
                style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" }}
              >
                <img
                  src={HeaderImage}
                  alt="Header Image"
                  loading="lazy"
                  className="w-full h-full object-cover"
                  style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

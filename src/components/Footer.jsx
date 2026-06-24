import React from "react";

const Footer = () => {
  return (
    <footer className="mt-8 border z-10 border-t-[#3e82e74e] border-l-transparent border-r-transparent text-white">
      <div className="container p-4 md:p-12 flex justify-between flex-col items-center gap-4 md:gap-0 md:flex-row">
        <div className="text-white text-2xl md:text-3xl font-black cursor-pointer">
          PORTFOLIO <span className="text-primary">.</span>
        </div>
        <p className="text-slate-600 text-sm md:text-base lg:mr-0">All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;

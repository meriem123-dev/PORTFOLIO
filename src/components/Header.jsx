import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuItems = [
    { name: "Education", href: "#education" },
    { name: "Certifications", href: "#certificates" },
    { name: "Projects", href: "#projects" },
    { name: "About Me", href: "#about" },
    { name: "Skills", href: "#skills" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href) => {
    setIsMenuOpen(false);
    document.querySelector(href).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/5 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="text-white text-2xl font-bold cursor-pointer tracking-tight">
            My Portfolio<span className="text-primary"> . </span>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex gap-1 items-center">
            <ul className="flex gap-1 items-center">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="relative text-gray-300 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-white/8 group"
                  >
                    {item.name}
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-px bg-primary transition-all duration-300 group-hover:w-4/5" />
                  </button>
                </li>
              ))}
            </ul>

            <div className="w-px h-5 bg-white/20 mx-3" />

            <button
              onClick={() => scrollToSection("#contact")}
              className="relative overflow-hidden bg-primary/10 hover:bg-primary text-primary hover:text-white border border-primary/40 hover:border-primary px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-300"
            >
              Contact Me
            </button>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-white p-2 rounded-xl hover:bg-white/10 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div
              className={`transition-all duration-300 ${isMenuOpen ? "rotate-90 opacity-70" : "rotate-0 opacity-100"}`}
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </div>
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-[#3e82e74e] backdrop-blur-sm md:hidden "
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile drawer */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out md:hidden
    bg-white/8 backdrop-blur-2xl border-t border-white/15
    rounded-t-3xl shadow-2xl shadow-black/40
    ${isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}
    flex flex-col px-6 pt-4 pb-10`}
      >
        {/* Handle bar */}
        <div className="w-10 h-1 bg-white/20 rounded-full mx-auto mb-6" />

        <ul className="flex flex-col gap-1">
          {menuItems.map((item) => (
            <li key={item.name}>
              <button
                onClick={() => scrollToSection(item.href)}
                className="w-full text-left text-white/70 hover:text-white text-base font-medium px-4 py-3.5 rounded-2xl hover:bg-white/10 transition-all duration-200"
              >
                {item.name}
              </button>
            </li>
          ))}

          <li className="pt-4 mt-2 border-t border-white/10">
            <button
              onClick={() => scrollToSection("#contact")}
              className="w-full bg-primary hover:bg-primary/90 text-white py-3.5 rounded-2xl text-base font-bold transition-colors shadow-lg shadow-primary/25"
            >
              Contact Me
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;

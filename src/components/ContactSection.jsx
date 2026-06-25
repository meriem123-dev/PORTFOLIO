import React from "react";
import { FaEnvelope, FaLinkedin, FaMapMarkedAlt, FaPhone } from "react-icons/fa";

const ContactSection = () => {
  const contact = [
    { id: 1, icon: FaEnvelope, title: "Email", value: "meriemhamouchepro@gmail.com", link: "mailto:meriemhamouchepro@gmail.com" },
    { id: 2, icon: FaPhone, title: "Phone", value: "0540036023", link: "#" },
    { id: 3, icon: FaLinkedin, title: "LinkedIn", value: "my linkedin", link: "https://www.linkedin.com/in/meriem-hamouche-9b879b254/?jobid=1234" },
    { id: 4, icon: FaMapMarkedAlt, title: "Location", value: "Béjaia", link: null },
  ];

  return (
    <section className="py-20 bg-gray-900" id="contact">
      <div className="container mx-auto max-w-6xl px-6">

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-2">Let's Connect</h2>
          <div className="w-28 h-1 bg-primary mx-auto mt-2 rounded-2xl"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Left */}
          <div className="text-left">
            <p className="text-gray-400 mb-10 leading-relaxed text-base">
              I'm always open to discussing new opportunities, innovative ideas, and exciting
              projects. Whether you're looking for a collaborator, an intern, or simply want
              to connect, feel free to reach out.
            </p>

            <div className="space-y-4">
              {contact.map((inf) => {
                const Icon = inf.icon;
                return (
                  <div key={inf.id} className="flex items-center gap-5 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-primary/30 transition-all duration-300 group">
                    <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center group-hover:bg-primary/25 group-hover:scale-110 transition-all duration-300 shrink-0">
                      <Icon size={22} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs uppercase tracking-widest mb-0.5">{inf.title}</p>
                      {inf.link
                        ? <a href={inf.link} className="text-white font-medium text-base hover:text-primary transition-colors" target={inf.title === "Location" ? "_self" : "_blank"} rel="noopener noreferrer">{inf.value}</a>
                        : <p className="text-white font-medium text-base">{inf.value}</p>
                      }
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* form */}
          <div className="bg-[#3e82e74e] backdrop-blur-lg border border-gray-700 rounded-3xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-2">Send Me a Message</h3>
            <p className="text-gray-400 mb-8">Have a question or an opportunity? I'd love to hear from you.</p>

            <form className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                <input type="text" id="name" placeholder="Hamouche Meriem"
                  className="w-full px-4 py-3 rounded-xl bg-gradient-to-r from-white/15 via-white/10 to-cyan-400/10 border border-white/10 text-white placeholder-gray-300 backdrop-blur-md focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition-all" />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                <input type="email" id="email" placeholder="merry@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-gradient-to-r from-white/15 via-white/10 to-cyan-400/10 border border-white/10 text-white placeholder-gray-300 backdrop-blur-md focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition-all" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea id="message" rows="5" placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-xl bg-gradient-to-r from-white/15 via-white/10 to-cyan-400/10 border border-white/10 text-white placeholder-gray-300 backdrop-blur-md focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition-all" />
              </div>

              <button type="submit"
                className="w-full py-3 rounded-xl bg-primary text-white font-semibold transition-all duration-300 hover:bg-cyan-400 hover:scale-[1.02]">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
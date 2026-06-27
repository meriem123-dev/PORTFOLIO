import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaLinkedin, FaMapMarkedAlt, FaPhone } from "react-icons/fa";

const ContactSection = () => {
  const formRef = useRef();
  const [status, setStatus] = useState("idle"); 

  const contact = [
    { id: 1, icon: FaEnvelope, title: "Email", value: "meriemhamouchepro@gmail.com", link: "mailto:meriemhamouchepro@gmail.com" },
    { id: 2, icon: FaPhone, title: "Phone", value: "0540036023", link: "#" },
    { id: 3, icon: FaLinkedin, title: "LinkedIn", value: "my linkedin", link: "https://www.linkedin.com/in/meriem-hamouche-9b879b254/?jobid=1234" },
    { id: 4, icon: FaMapMarkedAlt, title: "Location", value: "Béjaia", link: null },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("loading");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      )
      .then(() => {
        setStatus("success");
        formRef.current.reset();
      })
      .catch(() => {
        setStatus("error");
      });
  };

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
                  <div key={inf.id} className="flex items-center gap-5 p-4 rounded-2xl bg-primary/10 backdrop-blur-sm border border-white/10 transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-[0_0_40px_-5px_rgba(62,130,231,0.2)] group">
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

          {/* Form */}
          <div className="bg-[#3e82e74e] backdrop-blur-lg border border-gray-700 rounded-3xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-2">Send Me a Message</h3>
            <p className="text-gray-400 mb-8">Have a question or an opportunity? I'd love to hear from you.</p>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                <input type="text" name="from_name" placeholder="Hamouche Meriem" required
                  className="w-full px-4 py-3 rounded-xl bg-gradient-to-r from-white/15 via-white/10 to-cyan-400/10 border border-white/10 text-white placeholder-gray-300 backdrop-blur-md focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition-all" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                <input type="email" name="from_email" placeholder="merry@example.com" required
                  className="w-full px-4 py-3 rounded-xl bg-gradient-to-r from-white/15 via-white/10 to-cyan-400/10 border border-white/10 text-white placeholder-gray-300 backdrop-blur-md focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition-all" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea name="message" rows="5" placeholder="Tell me about your project..." required
                  className="w-full px-4 py-3 rounded-xl bg-gradient-to-r from-white/15 via-white/10 to-cyan-400/10 border border-white/10 text-white placeholder-gray-300 backdrop-blur-md focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition-all" />
              </div>

              {/* Feedback  */}
              {status === "success" && (
                <p className="text-green-400 text-sm font-medium"> Message sent successfully!</p>
              )}
              {status === "error" && (
                <p className="text-red-400 text-sm font-medium"> Something went wrong. Try again.</p>
              )}

              <button type="submit" disabled={status === "loading"}
                className="w-full py-3 rounded-xl bg-primary text-white font-semibold transition-all duration-300 hover:bg-white/10 hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed">
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
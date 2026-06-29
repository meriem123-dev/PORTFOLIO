import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaLinkedin,
  FaMapMarkedAlt,
  FaPhone,
} from "react-icons/fa";
import { ArrowRight } from "lucide-react";

const ContactSection = () => {
  const formRef = useRef();
  const [status, setStatus] = useState("idle");

  const contact = [
    {
      id: 1,
      icon: FaEnvelope,
      title: "Email",
      value: "meriemhamouchepro@gmail.com",
      link: "mailto:meriemhamouchepro@gmail.com",
    },
    { id: 2, icon: FaPhone, title: "Phone", value: "0540036023", link: "#" },
    {
      id: 3,
      icon: FaLinkedin,
      title: "LinkedIn",
      value: "my linkedin",
      link: "https://www.linkedin.com/in/meriem-hamouche-9b879b254/?jobid=1234",
    },
    {
      id: 4,
      icon: FaMapMarkedAlt,
      title: "Location",
      value: "Béjaia",
      link: null,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("loading");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY },
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
      <div className="container mx-auto max-w-7xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-2">
            Let's Connect
          </h2>
          <div className="w-28 h-1 bg-primary mx-auto mt-2 rounded-2xl"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <div className="text-left">
            <p className="text-gray-400 mb-10 leading-relaxed text-base">
              I'm always open to discussing new opportunities, innovative ideas,
              and exciting projects. Whether you're looking for a collaborator,
              an intern, or simply want to connect, feel free to reach out.
            </p>

            <div className="space-y-8">
              {contact.map((inf) => {
                const Icon = inf.icon;
                return (
                  <div
                    key={inf.id}
                    className="flex items-center gap-5 p-4 rounded-2xl bg-primary/10 backdrop-blur-sm border border-white/10 transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-[0_0_40px_-5px_rgba(62,130,231,0.2)] group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center group-hover:bg-primary/25 group-hover:scale-110 transition-all duration-300 shrink-0">
                      <Icon size={22} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs uppercase tracking-widest mb-0.5">
                        {inf.title}
                      </p>
                      {inf.link ? (
                        <a
                          href={inf.link}
                          className="text-white font-medium text-base hover:text-primary transition-colors"
                          target={inf.title === "Location" ? "_self" : "_blank"}
                          rel="noopener noreferrer"
                        >
                          {inf.value}
                        </a>
                      ) : (
                        <p className="text-white font-medium text-base">
                          {inf.value}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Form */}
          <div className="bg-[#0d0d14] border border-white/10 rounded-xl overflow-hidden shadow-xl font-mono">
            {/* barre  */}
            <div className="flex items-center gap-2 bg-[#1a1a2e] border-b border-white/10 px-4 py-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              <span className="text-white/30 text-xs ml-2">
                contact.sh — bash
              </span>
            </div>

            {/* Terminal  */}
            <div className="p-6 space-y-5">
              {/* Shell prompt */}
              <p className="text-sm">
                <span className="text-primary">$ </span>
                <span className="text-white/60">
                  ./send_message.sh --interactive
                </span>
              </p>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                {/* Full Name */}
                <div>
                  <p className="text-primary text-xs mb-1.5">
                    <div className="flex gap-2 items-center">
                      <ArrowRight />{" "}
                      <span className="text-white/50">from_name</span>
                    </div>
                  </p>
                  <input
                    type="text"
                    name="from_name"
                    placeholder="Hamouche Meriem"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white placeholder-white/20 font-mono focus:outline-none focus:border-primary focus:bg-primary/5 transition-colors"
                  />
                </div>

                {/* Email */}
                <div>
                  <p className="text-primary text-xs mb-1.5">
                    <div className="flex gap-2 items-center">
                      <ArrowRight />{" "}
                      <span className="text-white/50">from_email</span>
                    </div>
                  </p>
                  <input
                    type="email"
                    name="from_email"
                    placeholder="merry@example.com"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white placeholder-white/20 font-mono focus:outline-none focus:border-primary focus:bg-primary/5 transition-colors"
                  />
                </div>

                {/* Message */}
                <div>
                  <p className="text-primary text-xs mb-1.5">
                    <div className="flex gap-2 items-center">
                      <ArrowRight />{" "}
                      <span className="text-white/50">message</span>
                    </div>
                  </p>
                  <textarea
                    name="message"
                    rows="5"
                    placeholder="Tell me about your project..."
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white placeholder-white/20 font-mono focus:outline-none focus:border-primary focus:bg-primary/5 transition-colors resize-none"
                  />
                </div>

                {/* Feedback */}
                {status === "success" && (
                  <p className="text-green-400 text-xs">
                    <span className="text-green-500">✓ </span>message sent —
                    exit code 0
                  </p>
                )}
                {status === "error" && (
                  <p className="text-red-400 text-xs">
                    <span className="text-red-500">✗ </span>error: something
                    went wrong. try again.
                  </p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-2.5 rounded-lg bg-primary text-white text-sm font-mono transition-all duration-300 opacity-85 hover:opacity-100 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? "$ sending..." : "$ ./send --execute"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

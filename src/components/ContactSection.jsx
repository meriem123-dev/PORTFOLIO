import React from "react";
import {
  FaEnvelope,
  FaLinkedin,
  FaMapMarkedAlt,
  FaPhone,
} from "react-icons/fa";

const ContactSection = () => {
  const contact = [
    {
      id: 1,
      icon: FaEnvelope,
      title: "Email",
      value: "meriemhamouchepro@gmail.com",
      link: "mailto:meriemhamouchepro",
    },
    {
      id: 2,
      icon: FaPhone,
      title: "Phone",
      value: "0123456789",
      link: "#",
    },
    {
      id: 3,
      icon: FaLinkedin,
      title: "Email",
      value: "linkdin",
      link: "#",
    },
    {
      id: 4,
      icon: FaMapMarkedAlt,
      title: "Location",
      value: "Béjaia",
      link: "#",
    },
  ];
  return (
    <section className="py-20 bg-gray-900" id="contact">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mt-12">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-2">
            Let's Connect
          </h2>
          <div className="w-28 h-1 bg-primary mx-auto mt-2 rounded-2xl"></div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <p className="text-gray-400 mb-8 leading-relaxed">
                Loremkenro"'jrpn
                vogj-gnvpntj,e,p'àtuh-yhorenfikghip"edf'ih"oedvbrtiolzsl,vfltrjogozk;dxl,rojg'ar'
              </p>

              <div className="space-y-6">
                {contact.map((inf) => {
                  const Icon = inf.icon;
                  return (
                    <div key={inf.id} className="flex items-center gap-4 group">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon size={18} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium text-sm">
                          {inf.title}
                        </h4>
                        {inf.link ? (
                          <a
                            href={inf.link}
                            className="text-gray-400 text-sm hover:text-primary transition-colors"
                            target={
                              inf.title === "Location" ? "_self" : "_blank"
                            }
                            rel={
                              inf.title == "Location"
                                ? ""
                                : "noopener noreferrer"
                            }
                          >
                            {inf.value}
                          </a>
                        ) : (
                          <p className="text-gray-400 text-sm">{inf.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* contact form */}
            <div className="bg-gray-800 rounded-3xl p-6 mt-20 max-w-full mx-2">
              <form>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="text-white block mb-2 text-sm font-medium"
                  >
                    Email
                  </label>
                  <textarea
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white text-sm focus:outline-none focus:border-primary transition-colors"
                    placeholder="email@gmail.com"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="text-white block mb-2 text-sm font-medium"
                  >
                    Message
                  </label>
                  <textarea
                    type="message"
                    id="message"
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white text-sm focus:outline-none focus:border-primary transition-colors"
                    placeholder="Your message ..."
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-2.5 bg-primary text-white rounded-lg fornt-medium hover:bg-gray-300"
                >
                  Send message
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

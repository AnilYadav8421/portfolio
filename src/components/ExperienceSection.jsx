import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { SiReact, SiJavascript, SiTailwindcss, SiAxios, SiFigma } from "react-icons/si";

const experienceData = [
  {
    role: "React.js Developer Intern (Frontend)",
    logo: "/projects/anstric.avif",
    company: "Anstric Games Pvt. Ltd.",
    tech: [
      { name: "React", icon: <SiReact className="text-blue-400 w-5 h-5" /> },
      { name: "Tailwind css", icon: <SiTailwindcss className="text-blue-400 w-5 h-5" /> },
      { name: "React Router", icon: <SiReact className="text-blue-300 w-5 h-5" /> },
      { name: "Axios", icon: <SiAxios className="text-blue-500 w-5 h-5" /> },
      { name: "Figma", icon: <SiFigma className="text-pink-500 w-5 h-5" /> },
    ],
    duration: "November 2025 - Present",
    description: ["Developed a CMS-driven web platform using React.js with modular, reusable components. Built core modules including Admin Panel, CMS, Authentication, and Contact Forms for dynamic content management and secure access. Managed global state with Context API, implemented client-side routing with React Router, and integrated REST APIs via Axios. Converted Figma designs into responsive, production-ready UI ensuring design consistency across devices."]
  },

  {
    role: "Frontend Developer Intern",
    logo: "/projects/nerdtech.png",
    company: "NerdTech Lcc",
    tech: [
      { name: "React", icon: <SiReact className="text-blue-400 w-5 h-5" /> },
      { name: "Tailwind css", icon: <SiTailwindcss className="text-blue-400 w-5 h-5" /> },
      { name: "React Router", icon: <SiReact className="text-blue-300 w-5 h-5" /> },
      { name: "Fetch API", icon: <SiJavascript className="text-yellow-400 w-5 h-5" /> },
    ],
    duration: "July 2025 - October 2025",
    description: [
      "Developed a React.js and Tailwind CSS E-Commerce app with modular components. Built Product Listing, Shopping Cart, and Checkout workflows using Context API. Integrated REST APIs for dynamic data and optimized performance with lazy loading and memoization."
    ],
  },
  // Add more experiences here if needed
];

const ExperienceSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto md:w-6xl">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
          My <span className="text-primary">Experience</span>
        </h2>

        {/* Timeline */}
        <div className="relative border-l-3 border-primary pl-10 space-y-10">
          {experienceData.map((exp, index) => {
            const isOpen = activeIndex === index;

            return (
              <div key={index} className="relative pl-0 md:pl-20">
                {/* Logo */}
                <div
                  className=" absolute left-0 md:left-[-4.25rem] -translate-x-16/12 md:translate-x-0 z-10 mb-4 md:mb-0 top-1/2 md:top-1/2 -translate-y-1/2 flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-card border border-primary overflow-hidden shadow-md"
                >
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="w-8 h-8 md:w-10 md:h-10 object-contain"
                  />
                </div>

                {/* Card */}
                <div
                  className=" border border-border rounded-xl p-4 sm:p-5 md:p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-card cursor-pointer"
                  onClick={() => setActiveIndex(isOpen ? null : index)}
                >
                  {/* Top Row */}
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                    <div>
                      <h3 className="text-base sm:text-lg md:text-xl font-semibold text-primary">
                        {exp.role}
                      </h3>

                      <p className="text-sm sm:text-base font-medium text-white mt-1">
                        {exp.company}
                      </p>
                    </div>

                    <div className="text-left sm:text-right">
                      <p className="text-xs sm:text-sm text-white">
                        {exp.duration}
                      </p>

                      {exp.current && (
                        <span className="inline-block mt-2 text-xs px-3 py-1 bg-primary/15 text-primary rounded-full">
                          Current
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 md:gap-3 mt-4">
                    {exp.tech.map((t, i) => (
                      <span
                        key={i}
                        className="
            flex items-center gap-1
            bg-white/5 border border-border
            rounded-full px-2 sm:px-3 py-1
            text-xs sm:text-sm
            text-foreground/80
          "
                      >
                        {t.icon}
                        <span>{t.name}</span>
                      </span>
                    ))}
                  </div>

                  {/* Accordion Content */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden text-left mt-5 space-y-2 text-sm md:text-base text-white leading-relaxed"
                      >
                        {exp.description.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>

  );
};

export default ExperienceSection;

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { SiReact, SiJavascript, SiTailwindcss, SiAxios, SiFigma } from "react-icons/si";

const experienceData = [
  {
    role: "Frontend Developer",
    logo: "/projects/nerdtech.png",
    company: "NerdTech Lcc",
    tech: [
      { name: "React", icon: <SiReact className="text-blue-400 w-5 h-5" /> },
      { name: "Tailwind css", icon: <SiTailwindcss className="text-blue-400 w-5 h-5" /> },
      { name: "React Router", icon: <SiReact className="text-blue-300 w-5 h-5" /> },
      { name: "Axios", icon: <SiAxios className="text-blue-500 w-5 h-5" /> },
      { name: "Figma", icon: <SiFigma className="text-pink-500 w-5 h-5" /> },
    ],
    duration: "May 2025 - Feb 2026",
    description: ["Developed a CMS-driven web platform using React.js with modular, reusable components. Built core modules including Admin Panel, CMS, Authentication, and Contact Forms for dynamic content management and secure access. Managed global state with Context API, implemented client-side routing with React Router, and integrated REST APIs via Axios. Converted Figma designs into responsive, production-ready UI ensuring design consistency across devices."]
  },

  {
    role: "React.js Developer Intern",
    logo: "/projects/anstric.avif",
    company: "Anstric Games Pvt. Ltd.",
    tech: [
      { name: "React", icon: <SiReact className="text-blue-400 w-5 h-5" /> },
      { name: "Tailwind css", icon: <SiTailwindcss className="text-blue-400 w-5 h-5" /> },
      { name: "React Router", icon: <SiReact className="text-blue-300 w-5 h-5" /> },
      { name: "Fetch API", icon: <SiJavascript className="text-yellow-400 w-5 h-5" /> },
    ],
    duration: "Feb 2025 - April 2025",
    description: [
      "Developed a React.js and Tailwind CSS E-Commerce app with modular components. Built Product Listing, Shopping Cart, and Checkout workflows using Context API. Integrated REST APIs for dynamic data and optimized performance with lazy loading and memoization."
    ],
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const ExperienceSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="experience" className="py-20 px-4">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto md:w-6xl"
      >

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
          My <span className="text-primary">Experience</span>
        </h2>

        {/* Timeline */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="relative border-l-3 border-primary pl-10 space-y-10"
        >

          {experienceData.map((exp, index) => {
            const isOpen = activeIndex === index;

            return (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -4 }}
                className="relative pl-0 md:pl-20"
              >

                {/* Logo */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="absolute left-0 md:left-[-4.25rem] -translate-x-16/12 md:translate-x-0 z-10 mb-4 md:mb-0 top-1/2 -translate-y-1/2 flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-card border border-primary overflow-hidden shadow-md"
                >
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="w-8 h-8 md:w-10 md:h-10 object-contain"
                  />
                </motion.div>

                {/* Card */}
                <motion.div
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 200, damping: 18 }}
                  className="border border-border rounded-xl p-4 sm:p-5 md:p-6 shadow-md hover:shadow-xl bg-card cursor-pointer"
                  onClick={() => setActiveIndex(isOpen ? null : index)}
                >

                  {/* Top Row */}
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">

                    <div>
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-primary">
                        {exp.role}
                      </h3>

                      <p className="text-sm sm:text-base font-semibold text-white mt-2">
                        {exp.company}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs sm:text-base text-white">
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
                  <motion.div
                    initial={false}
                    className="flex flex-wrap gap-2 md:gap-3 mt-4"
                  >
                    {exp.tech.map((t, i) => (
                      <motion.span
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-1 bg-white/8 border border-border rounded-full px-2 sm:px-3 py-1 text-xs sm:text-sm text-white"
                      >
                        {t.icon}
                        <span>{t.name}</span>
                      </motion.span>
                    ))}
                  </motion.div>

                  {/* Accordion */}
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

                </motion.div>

              </motion.div>
            );
          })}

        </motion.div>

      </motion.div>
    </section>
  );
};

export default ExperienceSection;
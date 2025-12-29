import { motion } from "framer-motion";

const experienceData = [
  {
    role: "React.js Developer Intern (Frontend)",
    logo: "/projects/anstric.avif",
    company: "Anstric Games Pvt. Ltd.",
    duration: "November 2025 - Present",
    description: [
      "Building a college website using React.js creating reusable components and responsive layouts for a smooth user experience",
      "Referring to Figma designs to implement consistent and visually appealing UI across pages .",
      "Managing application state with and setting up client-side routing using and setting up client-side routing using React Router.",
      "Fetching and displaying dynamic data via REST APIs using Axios."
    ]
  },

  {
    role: "Frontend Developer Intern",
    logo: "/projects/nerdtech.png",
    company: "NerdTech Lcc",
    duration: "July 2025 - October 2025",
    description: [
      "Built and maintained a client website with React.js and Tailwind CSS.",
      "Integrated REST APIs for dynamic product data.",
      "Worked with the team to add features, fix bugs, and improve UI/UX.",
      "Used Git for version control in collaborative workflows."
    ],
  },
  // Add more experiences here if needed
];

const ExperienceSection = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section id="experience" className="py-16 px-3 sm:px-4 md:py-20">
      <div className="max-w-4xl mx-auto">
        {/* Section Heading */}
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Work <span className="text-primary">Experience</span>
        </motion.h2>

        {/* Experience Cards */}
        <motion.div
          className="space-y-4 sm:space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              className="border border-border rounded-2xl p-3 sm:p-5 shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              variants={cardVariants}
            >
              {/* Header: Logo + Role/Company + Duration */}
              <div className="flex flex-row flex-wrap justify-between items-center gap-2 sm:gap-4">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="p-2 rounded-full flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
                    {exp.logo && (
                      <img
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                      />
                    )}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold">{exp.role}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">{exp.company}</p>
                  </div>
                </div>

                <span className="text-xs sm:text-sm px-2 py-1 rounded-md bg-secondary text-foreground font-medium border border-gray-700 mt-2 sm:mt-0">
                  {exp.duration}
                </span>
              </div>

              <hr className="mt-3 border-t border-gray-300/40" />

              {/* Description */}
              <div className="mt-4 sm:mt-4 text-muted-foreground leading-relaxed space-y-2 sm:space-y-2 text-sm sm:text-base text-left">
                {exp.description.map((point, idx) => (
                  <p key={idx} className="flex items-start gap-2">
                    <span className="mt-2 w-2 h-2 bg-primary rounded-full flex-shrink-0"></span>
                    {point}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;

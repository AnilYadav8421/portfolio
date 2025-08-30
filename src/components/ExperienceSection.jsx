import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experienceData = [
  {
    role: "Frontend Developer Intern",
    logo: "/projects/nerdtech.png",
    company: "NerdTech Lcc",
    duration: "July 2025 - Present",
    description: [
      "Developed a real client-facing jewellery website using React and Tailwind CSS.",
      "Fetched API data to display products dynamically on the website.",
    ],
  },
];

const ExperienceSection = () => {
  // Variants for staggered container
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  // Fade-up animation for each card
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section id="experience" className="py-20 px-4 sm:py-28 bg-background">
      <div className="container mx-auto max-w-5xl">
        {/* Section Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 sm:mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Work <span className="text-primary">Experience</span>
        </motion.h2>

        {/* Experience Cards */}
        <motion.div
          className="space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-primary/10 border border-border rounded-2xl p-4 sm:p-6 shadow-md hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
              variants={cardVariants}
            >
              {/* Header: Icon + Title + Company + Duration */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-primary/10 flex-shrink-0">
                    {exp.logo && (
                      <img
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                      />
                    )}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold">{exp.role}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      {exp.company}
                    </p>
                  </div>
                </div>

                <span className="text-xs sm:text-sm px-3 py-1 rounded-md bg-secondary text-foreground font-medium mt-2 sm:mt-0 border-1 border-gray-700">
                  {exp.duration}
                </span>
              </div>
              <hr className="mt-3 border-t border-gray-300/40" />

              {/* Description */}
              <div className="mt-4 text-muted-foreground leading-relaxed space-y-2 text-sm sm:text-base">
                {exp.description.map((point, idx) => (
                  <p key={idx} className="flex items-start gap-2">
                    <span className="mt-2.5 w-2 h-2 bg-primary rounded-full flex-shrink-0"></span>
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

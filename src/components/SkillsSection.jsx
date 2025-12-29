import { useState } from "react";
import { cn } from "../lib/utils";
import { Code, Server, Settings } from "lucide-react";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML", category: "frontend", logo: "/projects/html.png" },
  { name: "CSS", category: "frontend", logo: "/projects/css.png" },
  { name: "JavaScript", category: "frontend", logo: "/projects/js.png" },
  { name: "React", category: "frontend", logo: "/projects/react.png" },
  { name: "Tailwind CSS", category: "frontend", logo: "/projects/tailwind.png" },
  { name: "Bootstrap", category: "frontend", logo: "/projects/bootstrap.png" },
  { name: "Node.js", category: "backend", logo: "/projects/node.png" },
  { name: "Git/GitHub", category: "tools", logo: "/projects/github.png" },
  { name: "VS Code", category: "tools", logo: "/projects/vscode.png" },
  { name: "Figma", category: "tools", logo: "/projects/figma.png" },
];

const categories = ["All", ...new Set(skills.map(skill => skill.category))];

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills = skills.filter(
    skill =>
      activeCategory.toLowerCase() === "all" ||
      skill.category === activeCategory.toLowerCase()
  );

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="skills" className="py-16 px-4">
      <div className="container mx-auto max-w-5xl">
        {/* Heading */}
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          My <span className="text-primary">Technical Skills</span>
        </motion.h2>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-4 py-1 rounded-full transition-colors duration-300 capitalize focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 text-sm sm:text-base",
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {filteredSkills.map(skill => (
            <motion.div
              key={skill.name}
              className="border border-border rounded-xl p-4 shadow-sm hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center gap-2"
              variants={cardVariants}
            >
              <h3 className="text-base sm:text-lg font-semibold text-center">{skill.name}</h3>
              {skill.logo && (
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="w-12 h-12 object-contain"
                />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;

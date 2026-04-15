import { useState } from "react";
import { cn } from "../lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const skills = [
  { name: "HTML", category: "frontend", logo: "/projects/html.png" },
  { name: "CSS", category: "frontend", logo: "/projects/css.png" },
  { name: "JavaScript", category: "frontend", logo: "/projects/js.png" },
  { name: "React", category: "frontend", logo: "/projects/react.png" },
  { name: "Tailwind CSS", category: "frontend", logo: "/projects/tailwind.png" },
  { name: "Bootstrap", category: "frontend", logo: "/projects/bootstrap.png" },
  { name: "Node.js", category: "backend", logo: "/projects/node.png" },
  { name: "Express.js", category: "backend", logo: "/projects/Express.png" },
  { name: "MongoDB", category: "backend", logo: "/projects/MongoDB.svg" },
  { name: "Git/GitHub", category: "tools", logo: "/projects/github.png" },
  { name: "VS Code", category: "tools", logo: "/projects/vscode.png" },
  { name: "Figma", category: "tools", logo: "/projects/figma.png" },
  { name: "Postman", category: "tools", logo: "/projects/Postman.png" },
];

const categories = ["All", ...new Set(skills.map(s => s.category))];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills = skills.filter(
    s => activeCategory === "All" || s.category === activeCategory
  );

  return (
    <section id="skills" className="py-20 px-4">

      <div className="container mx-auto max-w-5xl">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-10 text-center"
        >
          My <span className="text-primary">Technical Skills</span>
        </motion.h2>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-4 py-1 rounded-full text-sm capitalize transition",
                activeCategory === category
                  ? "bg-primary text-black"
                  : "bg-secondary/70 hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={container}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
          >

            {filteredSkills.map(skill => (
              <motion.div
                key={skill.name}
                variants={item}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 200, damping: 18 }}
                className="border border-border rounded-xl p-4 flex flex-col items-center gap-3 bg-card hover:shadow-lg"
              >

                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="w-12 h-12 object-contain"
                />

                <h3 className="text-sm md:text-base font-semibold text-center">
                  {skill.name}
                </h3>

              </motion.div>
            ))}

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
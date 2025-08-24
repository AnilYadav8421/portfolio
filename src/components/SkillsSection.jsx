import { useState } from "react";
import { cn } from "../lib/utils";
import { Code, Server, Settings } from "lucide-react";

const skills = [
    { name: "HTML/CSS", level: 95, category: "frontend" },
    { name: "JavaScript", level: 90, category: "frontend" },
    { name: "React", level: 90, category: "frontend" },
    { name: "Tailwind CSS", level: 90, category: "frontend" },
    { name: "Bootstrap", level: 80, category: "frontend" },
    { name: "Node.js", level: 50, category: "backend" },
    { name: "Express", level: 40, category: "backend" },
    { name: "MongoDB", level: 40, category: "backend" },
    { name: "Git/GitHub", level: 90, category: "tools" },
    { name: "VS Code", level: 95, category: "tools" },
];

const categories = ["All", "Frontend", "Tools"];

const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredSkills = skills.filter(
        (skill) =>
            activeCategory.toLowerCase() === "all" ||
            skill.category === activeCategory.toLowerCase()
    );

    const getIcon = (category) => {
        if (category === "frontend") return <Code className="w-5 h-5 text-primary" />;
        if (category === "backend") return <Server className="w-5 h-5 text-primary" />;
        return <Settings className="w-5 h-5 text-primary" />;
    };

    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary">Technical Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={cn(
                                "px-5 py-2 rounded-full transition-colors duration-300 capitalize focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                                activeCategory === category
                                    ? "bg-primary text-primary-foreground shadow-lg"
                                    : "bg-secondary/70 text-foreground hover:bg-secondary"
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill) => (
                        <div
                            key={skill.name}
                            className="bg-gradient-to-r from-primary/10 via-primary/5 to-secondary p-6 rounded-xl shadow-lg card-hover transition-transform duration-300 hover:scale-105"
                        >
                            <div className="flex items-center gap-2 mb-3">
                                {getIcon(skill.category)}
                                <h3 className="font-semibold text-lg">{skill.name}</h3>
                            </div>

                            <div
                                className="w-full bg-secondary/50 h-3 rounded-full overflow-hidden"
                                role="progressbar"
                                aria-valuenow={skill.level}
                                aria-valuemin={0}
                                aria-valuemax={100}
                            >
                                <div
                                    className="h-3 rounded-full transition-all duration-1000 ease-out bg-gradient-to-r from-primary to-primary/70"
                                    style={{ width: skill.level + "%" }}
                                />
                            </div>

                            <div className="text-right mt-2">
                                <span className="text-sm text-muted-foreground">{skill.level}%</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;

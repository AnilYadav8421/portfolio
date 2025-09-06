import { Briefcase, Code, User } from "lucide-react";
import { motion } from "framer-motion";

const AboutSection = () => {
    const containerVariants = {
        hidden: {},
        visible: {
            transition: { staggerChildren: 0.2 },
        },
    };

    const fadeUpVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    const skills = [
        {
            icon: <Code className="h-6 w-6 text-primary" />,
            title: "Web Development",
            desc: "Creating responsive websites and web applications with modern frameworks.",
        },
        {
            icon: <User className="h-6 w-6 text-primary" />,
            title: "UI/UX Design",
            desc: "Designing intuitive user interfaces and seamless user experiences.",
        },
        {
            icon: <Briefcase className="h-6 w-6 text-primary" />,
            title: "Project Management",
            desc: "Planning, organizing, and managing development tasks effectively using Agile methodologies.",
        },
    ];

    return (
        <section id="about" className="py-24 relative overflow-hidden">
            {/* Optional floating shapes */}
            <motion.div
                className="absolute top-0 left-0 w-40 h-40 rounded-full filter blur-3xl -translate-x-20 -translate-y-20"
                animate={{ x: [0, 20, 0], y: [0, 20, 0] }}
                transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
            />
            <motion.div
                className="absolute bottom-0 right-0 w-60 h-60 rounded-full filter blur-3xl translate-x-20 translate-y-20"
                animate={{ x: [0, -20, 0], y: [0, -20, 0] }}
                transition={{ duration: 12, repeat: Infinity, repeatType: "reverse" }}
            />

            <div className="container mx-auto max-w-5xl relative z-10">
                {/* Section Heading */}
                <motion.h2
                    className="text-3xl md:text-4xl font-bold mb-12 text-center"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    About <span className="text-primary">Me</span>
                </motion.h2>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                >
                    {/* Text Content */}
                    <motion.div className="space-y-8 text-center md:text-left" variants={fadeUpVariants}>
                        <h3 className="text-3xl md:text-4xl font-semibold">Frontend Developer</h3>

                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                            I specialize in building responsive, accessible, and high-performance web applications with modern technologies.
                        </p>

                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                            I’m passionate about crafting elegant solutions to complex problems and continuously learning new technologies to stay at the forefront of the ever-evolving web.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 pt-6 justify-center md:justify-start">
                            <a
                                href="#contact"
                                role="button"
                                className="cosmic-button px-8 py-4 text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-transform transform hover:scale-105 hover:shadow-[0_0_20px_rgba(139,92,246,0.5)]"
                            >
                                Get In Touch
                            </a>

                            <a
                                href="/Anil_Yadav_Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 rounded-full border border-primary text-primary text-lg font-medium hover:bg-primary/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 hover:shadow-[0_0_15px_rgba(139,92,246,0.4)]"
                            >
                                Download CV
                            </a>
                        </div>
                    </motion.div>

                    {/* Skills / Cards */}
                    <motion.div className="grid grid-cols-1 gap-6" variants={containerVariants}>
                        {skills.map((skill, index) => (
                            <motion.article
                                key={index}
                                className="gradient-border p-6 rounded-xl card-hover transition-all duration-300 hover:scale-105 hover:shadow-xl"
                                variants={fadeUpVariants}
                            >
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-full flex-shrink-0">
                                        {skill.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-lg">{skill.title}</h4>
                                        <p className="text-muted-foreground">{skill.desc}</p>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSection;

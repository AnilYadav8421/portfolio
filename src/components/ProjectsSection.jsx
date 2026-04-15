import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { projects } from '../Data/projectData.js'
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const featuredProjects = projects.slice(0, 4);

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
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

const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">

            <div className="container mx-auto max-w-5xl">

                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-4xl font-bold mb-12 text-center"
                >
                    Featured <span className="text-primary">Projects</span>
                </motion.h2>

                {/* Grid */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    {featuredProjects.map(project => (
                        <motion.div
                            key={project.id}
                            variants={item}
                            whileHover={{ y: -6 }}
                            transition={{ type: "spring", stiffness: 200, damping: 18 }}
                            className="group rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-border bg-card"
                        >

                            <div className="w-full p-5 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full rounded-lg object-cover transition-transform duration-500 group-hover:scale-105 group-hover:rotate-1"
                                />
                            </div>

                            <div className="p-5 flex flex-col gap-3">

                                <div className="flex justify-between items-start">

                                    <h3 className="text-lg sm:text-xl font-bold">
                                        {project.title}
                                    </h3>

                                    <div className="flex gap-3 mt-1">

                                        <a
                                            href={project.demoUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-foreground/70 hover:text-primary transition-colors"
                                        >
                                            <ExternalLink size={20} />
                                        </a>

                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-foreground/70 hover:text-primary transition-colors"
                                        >
                                            <Github size={20} />
                                        </a>

                                    </div>
                                </div>

                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {project.description}
                                </p>

                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-col md:flex-row gap-6 md:justify-around mt-12"
                >

                    <a
                        className="cosmic-button md:w-52 flex justify-center items-center mx-auto gap-2"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/AnilYadav8421"
                    >
                        Check My Github <ArrowRight size={16} />
                    </a>

                    <Link
                        to="/all_project"
                        className="cosmic-button md:w-52 flex justify-center items-center mx-auto gap-2"
                    >
                        All Projects <ArrowRight size={16} />
                    </Link>

                </motion.div>

            </div>
        </section>
    );
};

export default ProjectsSection;
import { ArrowRight, ExternalLink, Github } from "lucide-react";

import {projects} from '../Data/projectData.js'

const Projects = () => {
    return (
        <section id="projects" className="py-24 px-4 bg-gray-900 relative">
            <div className="container mx-auto max-w-7xl">
                <h2
                    className="text-3xl text-white md:text-4xl font-bold mb-12 text-center"
                >
                    All <span className="text-primary">Projects</span>
                </h2>

                <div
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    {projects.map(project => (
                        <div
                            key={project.id}
                            className="group text-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-transform duration-300 border border-border"
                        >
                            <div className="w-full aspect-w-16 aspect-h-9 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-300"
                                />
                            </div>

                            <div className="p-5 flex flex-col gap-3">
                                <div className="flex justify-between items-start">
                                    <h3 className="text-lg sm:text-xl font-semibold">
                                        {project.title}
                                        <div className="text-xs rounded-full mt-1 text-left text-muted-foreground">
                                            {project.date}
                                        </div>
                                    </h3>
                                    <div className="flex gap-3 mt-1">
                                        <a
                                            href={project.demoUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-white hover:text-primary transition-colors duration-300"
                                        >
                                            <ExternalLink size={20} />
                                        </a>
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-white hover:text-primary transition-colors duration-300"
                                        >
                                            <Github size={20} />
                                        </a>
                                    </div>
                                </div>

                                <p className="text-sm text-muted-foreground text-left leading-relaxed">
                                    {project.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* <div className="text-center mt-12">
                    <a
                        className="cosmic-button w-fit flex items-center mx-auto gap-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/AnilYadav8421"
                    >
                        Check My Github <ArrowRight size={16} />
                    </a>
                </div> */}
            </div>
        </section>
    );
};

export default Projects;

import { Briefcase, Code, User } from "lucide-react";

const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div className="space-y-6 text-center md:text-left">
                        <h3 className="text-2xl font-semibold">Frontend Developer</h3>

                        <p className="text-muted-foreground">
                            I specialize in building responsive, accessible, and high-performance web applications with modern technologies.
                        </p>

                        <p className="text-muted-foreground">
                            I’m passionate about crafting elegant solutions to complex problems and continuously learning new technologies to stay at the forefront of the ever-evolving web.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
                            <a
                                href="#contact"
                                role="button"
                                className="cosmic-button focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                            >
                                Get In Touch
                            </a>

                            <a
                                href="/Anil_Yadav_Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                            >
                                Download CV
                            </a>
                        </div>
                    </div>

                    {/* Skills / Cards */}
                    <div className="grid grid-cols-1 gap-6">
                        <article className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lg">Web Development</h4>
                                    <p className="text-muted-foreground">
                                        Creating responsive websites and web applications with modern frameworks.
                                    </p>
                                </div>
                            </div>
                        </article>

                        <article className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lg">UI/UX Design</h4>
                                    <p className="text-muted-foreground">
                                        Designing intuitive user interfaces and seamless user experiences.
                                    </p>
                                </div>
                            </div>
                        </article>

                        <article className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lg">Project Management</h4>
                                    <p className="text-muted-foreground">
                                        Planning, organizing, and managing development tasks effectively using Agile methodologies.
                                    </p>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;

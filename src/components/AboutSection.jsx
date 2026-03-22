import { Briefcase, Code, User } from "lucide-react";
import Stats from "./Stats";

const AboutSection = () => {
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
        <section id="about" className="relative overflow-hidden py-24">
            {/* Decorative Background Shapes */}
            <div className="absolute top-0 left-0 w-40 h-40 rounded-full blur-3xl -translate-x-20 -translate-y-20" />
            <div className="absolute bottom-0 right-0 w-60 h-60 rounded-full blur-3xl translate-x-20 translate-y-20" />

            <div className="container relative z-10 mx-auto max-w-7xl">
                {/* Section Heading */}
                <h2 className="mb-16 text-center text-3xl font-bold md:text-4xl tracking-tight">
                    About <span className="text-primary">Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">

                    {/* Left Content */}
                    <div className="flex flex-col justify-between text-center md:text-left">

                        <div className="space-y-6">
                            <h3 className="text-3xl md:text-4xl font-semibold tracking-tight">
                                Frontend Developer
                            </h3>

                            <p className="max-w-xl text-lg md:text-xl text-muted-foreground leading-relaxed">
                                I currently specialize in{" "}
                                <span className="text-primary font-semibold">
                                    frontend development
                                </span>
                                , but my passion lies in building full-stack websites from
                                initial idea to product delivery.
                            </p>
                        </div>

                        {/* Stats */}
                        <Stats/>
                    </div>

                    {/* Right Skills */}
                    <div className="grid gap-6">
                        {skills.map((skill, index) => (
                            <article
                                key={index}
                                className="gradient-border p-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="p-3 rounded-full flex-shrink-0">
                                        {skill.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold">
                                            {skill.title}
                                        </h4>
                                        <p className="text-muted-foreground leading-relaxed">
                                            {skill.desc}
                                        </p>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutSection;
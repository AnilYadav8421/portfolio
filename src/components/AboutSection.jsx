import { Briefcase, Code, User } from "lucide-react";
import plus from "../assets/svgs/plusSvg.svg";
import percent from "../assets/svgs/percentSvg.svg";

const AboutSection = () => {
    const targets = [
        { element: document.getElementById('starsCount'), count: 4670, suffix: '+' },
        { element: document.getElementById('downloadsCount'), count: 80000, suffix: '+' },
        { element: document.getElementById('sponsorsCount'), count: 100, suffix: '+' }
    ];

    // Find the maximum count among all targets
    const maxCount = Math.max(...targets.map(target => target.count));

    // Function to animate count-up effect
    function animateCountUp(target, duration) {
        let currentCount = 0;
        const increment = Math.ceil(target.count / (duration / 10));

        const interval = setInterval(() => {
            currentCount += increment;
            if (currentCount >= target.count) {
                clearInterval(interval);
                currentCount = target.count;
                target.element.textContent = currentCount + target.suffix;
            } else {
                target.element.textContent = currentCount;
            }
        }, 10);
    }

    // Animate count-up for each target with adjusted duration
    targets.forEach(target => {
        animateCountUp(target, maxCount / 100); // Adjust duration based on max count
    });
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
                        <div className="mt-12 flex  sm:flex-row justify-between items-center gap-8 p-8 md:p-10 rounded-2xl gradient-border text-center">
                            {/* Projects */}
                            <div className="flex flex-col items-center">
                                <div className="flex items-baseline gap-1">
                                    <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
                                        10
                                    </h2>
                                    <img src={plus} alt="plus icon" className="w-5 md:w-7" />
                                </div>
                                <p className="mt-2 text-sm md:text-base text-muted-foreground">
                                    Completed Projects
                                </p>
                            </div>

                            {/* Satisfaction */}
                            <div className="flex flex-col items-center">
                                <div className="flex items-baseline gap-1">
                                    <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
                                        95
                                    </h2>
                                    <img src={percent} alt="percentage icon" className="w-5 md:w-7" />
                                </div>
                                <p className="mt-2 text-sm md:text-base text-muted-foreground">
                                    Client Satisfaction
                                </p>
                            </div>

                            {/* Experience */}
                            <div className="flex flex-col items-center">
                                <div className="flex items-baseline gap-1">
                                    <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
                                        1
                                    </h2>
                                    <img src={plus} alt="plus icon" className="w-5 md:w-7" />
                                </div>
                                <p className="mt-2 text-sm md:text-base text-muted-foreground">
                                    Years of Experience
                                </p>
                            </div>
                        </div>
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
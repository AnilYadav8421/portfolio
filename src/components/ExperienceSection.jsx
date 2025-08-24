import { Briefcase } from "lucide-react";
import { useEffect, useState } from "react";

const experienceData = [
    {
        role: "Frontend Developer Intern",
        company: "NerdTech Lcc",
        duration: "July 2025 - Present",
        description: [
            "Developed a real client-facing jewellery website using React and Tailwind CSS.",
            "Fetched API data to display products dynamically on the website.",
        ]
    }
];

const ExperienceSection = () => {
    const [visibleItems, setVisibleItems] = useState([]);

    useEffect(() => {
        const observers = [];
        experienceData.forEach((_, index) => {
            const element = document.getElementById(`exp-${index}`);
            if (element) {
                const observer = new IntersectionObserver(
                    (entries) => {
                        entries.forEach((entry) => {
                            if (entry.isIntersecting) {
                                setVisibleItems((prev) => [...new Set([...prev, index])]);
                            }
                        });
                    },
                    { threshold: 0.3 }
                );
                observer.observe(element);
                observers.push(observer);
            }
        });
        return () => observers.forEach((o) => o.disconnect());
    }, []);

    return (
        <section id="experience" className="py-24 px-4">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Work <span className="text-primary">Experience</span>
                </h2>

                <div className="relative border-l-2 border-primary/30  ml-4">
                    {experienceData.map((exp, index) => (
                        <div
                            key={index}
                            id={`exp-${index}`}
                            className={`mb-12 pl-6 transition-all duration-700 ${visibleItems.includes(index)
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-10"
                                }`}
                        >
                            {/* Dot */}
                            <span className="absolute -left-3 w-5 h-5 rounded-full bg-primary"></span>

                            <h3 className="text-xl font-semibold flex items-center gap-2">
                                <Briefcase className="w-5 h-5 text-primary" />
                                {exp.role} @ {exp.company}
                            </h3>
                            <span className="text-sm text-primary">{exp.duration}</span>
                            <ul className="mt-2 list-disc list-inside text-muted-foreground">
                                {exp.description.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;

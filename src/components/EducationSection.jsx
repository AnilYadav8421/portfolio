import { GraduationCap } from "lucide-react";
import { useInView } from "../hooks/useInView";

const educationData = [
    {
        degree: "Master of Computer Application (MCA)",
        institute: "Sandip University",
        duration: "2022 - 2024",
        description:
            "Specialized in Computer Applications with a focus on front-end and full-stack development.",
    },
    {
        degree: "Bachelor of Science",
        institute: "HPT Arts & RYK Science College",
        duration: "2019 - 2022",
        description:
            "Majored in Information Technology, focusing on coding and software development.",
    },
    {
        degree: "High School",
        institute: "Silver Oak",
        duration: "2017 - 2019",
        description: "Completed Higher Secondary education in the Science stream.",
    },
    {
        degree: "School",
        institute: "Fravashi Academy",
        duration: "2007 - 2017",
        description: "Completed Primary and Secondary education with distinction.",
    },
];


const EducationSection = () => {
    return (
        <section
            id="education"
            className="py-24 px-4 relative bg-secondary/30"
        >
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary">Education</span>
                </h2>

                <div className="relative border-l-2 border-primary/40 ml-4">
                    {educationData.map((edu, index) => {
                        const [ref, isInView] = useInView();
                        return (
                            <div
                                key={index}
                                ref={ref}
                                className={`mb-10 ml-6 relative transition-all duration-700 ease-out transform ${isInView
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-10"
                                    }`}
                                style={{ transitionDelay: `${index * 0.3}s` }}
                            >
                                {/* Timeline Point */}
                                <span className="absolute -left-5 flex items-center justify-center w-4 h-4 rounded-full bg-primary shadow-lg"></span>

                                {/* Content */}
                                <div className="bg-card p-6 rounded-lg shadow-md card-hover">
                                    <h3 className="text-xl font-semibold flex items-center gap-2">
                                        <GraduationCap className="w-5 h-5 text-primary" />
                                        {edu.degree}
                                    </h3>
                                    <p className="text-muted-foreground">{edu.institute}</p>
                                    <span className="text-sm text-primary">{edu.duration}</span>
                                    <p className="mt-2 text-muted-foreground">{edu.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default EducationSection;

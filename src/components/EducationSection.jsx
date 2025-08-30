import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

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
    const containerVariants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.3 } },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    return (
        <section
            id="education"
            className="py-20 px-4 sm:py-28 bg-gradient-to-b from-background/50 to-background/10"
        >
            <div className="container mx-auto max-w-5xl">
                {/* Section Heading */}
                <motion.h2
                    className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    My <span className="text-primary">Education</span>
                </motion.h2>

                {/* Timeline */}
                <motion.div
                    className="relative border-l-2 border-primary/40 ml-4 sm:ml-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                >
                    {educationData.map((edu, index) => (
                        <motion.div
                            key={index}
                            className="mb-12 ml-6 relative"
                            variants={cardVariants}
                        >
                            {/* Timeline Point */}
                            <span className="absolute -left-6 mt-20 flex items-center justify-center w-4 h-4 rounded-full bg-primary shadow-lg animate-pulse"></span>

                            {/* Education Card */}
                            <div className="bg-card p-6 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-transform duration-300 border border-primary/20">
                                <h3 className="text-xl sm:text-2xl font-semibold flex items-center gap-3">
                                    <GraduationCap className="w-5 h-5 text-primary" />
                                    {edu.degree}
                                </h3>
                                <p className="text-sm sm:text-base text-muted-foreground mt-1">
                                    {edu.institute}
                                </p>
                                <span className="text-sm sm:text-base text-primary font-medium">
                                    {edu.duration}
                                </span>
                                <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                                    {edu.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default EducationSection;

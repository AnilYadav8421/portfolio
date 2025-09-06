import { motion } from "framer-motion";

const educationData = [
    {
        degree: "Master of Computer Application (MCA)",
        institute: "Sandip University",
        duration: "2022 - 2024",
        description:
            "Specialized in Computer Applications with a focus on front-end and full-stack development.",
        logo: "/projects/sandip.jpg",
    },
    {
        degree: "Bachelor of Science",
        institute: "HPT Arts & RYK Science College",
        duration: "2019 - 2022",
        description:
            "Majored in Information Technology, focusing on coding and software development.",
        logo: "/projects/RYK.jpg",
    },
    {
        degree: "High School",
        institute: "Silver Oak",
        duration: "2017 - 2019",
        description:
            "Completed Higher Secondary education in the Science stream.",
        logo: "/projects/universal.jpg",
    },
    {
        degree: "School",
        institute: "Fravashi Academy",
        duration: "2007 - 2017",
        description:
            "Completed Primary and Secondary education with distinction.",
        logo: "/projects/fravashi.jpg",
    },
];

const EducationSection = () => {
    const containerVariants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.2 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <section id="education" className="py-20 px-4">
            <div className="container mx-auto max-w-4xl">
                {/* Heading */}
                <motion.h2
                    className="text-3xl md:text-4xl font-bold mb-12 text-center text-white"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    My <span className="text-primary">Education</span>
                </motion.h2>

                {/* Timeline */}
                <motion.div
                    className="relative border-l border-border pl-6 space-y-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                >
                    {educationData.map((edu, index) => (
                        <motion.div
                            key={index}
                            className="relative"
                            variants={itemVariants}
                        >
                            {/* Timeline Logo */}
                            <div className="absolute -left-11 flex items-center justify-center w-12 h-12 rounded-full bg-card border border-border overflow-hidden shadow-md">
                                <img
                                    src={edu.logo}
                                    alt={edu.institute}
                                    className="w-10 h-10 object-contain"
                                />
                            </div>

                            {/* Card */}
                            <div className="border border-border rounded-xl p-5 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-card">
                                <h3 className="text-lg md:text-xl font-semibold text-primary">
                                    {edu.degree}
                                </h3>
                                <p className="text-sm md:text-base font-medium text-foreground/90 mt-1">
                                    {edu.institute} • {edu.duration}
                                </p>
                                <p className="text-sm md:text-base text-white/80 mt-3 leading-relaxed">
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

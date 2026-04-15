import { Briefcase, Code, User } from "lucide-react";
import Stats from "./Stats";
import { motion } from "framer-motion";

const container = {
    hidden: {},
    show: {
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

            {/* background blobs (unchanged visual, no animation noise added) */}
            <div className="absolute top-0 left-0 w-40 h-40 rounded-full blur-3xl -translate-x-20 -translate-y-20" />
            <div className="absolute bottom-0 right-0 w-60 h-60 rounded-full blur-3xl translate-x-20 translate-y-20" />

            <div className="container relative z-10 mx-auto max-w-7xl">

                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center text-3xl font-bold md:text-4xl tracking-tight"
                >
                    About <span className="text-primary">Me</span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">

                    {/* LEFT */}
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        className="flex flex-col justify-between text-center md:text-left"
                    >

                        <div className="space-y-6">

                            <motion.h3 variants={item} className="text-3xl md:text-4xl font-semibold">
                                Frontend Developer
                            </motion.h3>

                            <motion.p variants={item} className="max-w-xl text-lg md:text-xl text-muted-foreground leading-relaxed">
                                I currently specialize in{" "}
                                <span className="text-primary font-semibold">
                                    frontend development
                                </span>
                                , but my passion lies in building full-stack systems from idea to deployment.
                            </motion.p>

                        </div>

                        <motion.div variants={item}>
                            <Stats />
                        </motion.div>

                    </motion.div>

                    {/* RIGHT */}
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        className="hidden md:grid gap-6"
                    >
                        {skills.map((skill, index) => (
                            <motion.article
                                key={index}
                                variants={item}
                                whileHover={{ y: -4 }}
                                transition={{ type: "spring", stiffness: 200, damping: 18 }}
                                className="gradient-border p-6 rounded-xl"
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
                            </motion.article>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
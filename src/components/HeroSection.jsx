import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.18,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 24 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const HeroSection = () => {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col items-center justify-center"
        >
            <div className="container max-w-6xl mx-auto text-center z-10">

                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="space-y-6"
                >

                    {/* Heading */}
                    <motion.h1
                        variants={item}
                        className="text-4xl md:text-7xl font-bold tracking-tight"
                        aria-label="Hi, I'm Anil Yadav"
                    >
                        Hi, I’m{" "}
                        <span className="text-primary">Anil Yadav</span>
                    </motion.h1>

                    {/* Subtext */}
                    <motion.p
                        variants={item}
                        className="text-sm md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
                    >
                        Have a project you want to collaborate on, or looking for a
                        frontend developer who builds clean, fast, and scalable web
                        experiences?
                    </motion.p>

                    {/* CTA */}
                    <motion.div variants={item}>
                        <a
                            href="#"
                            className="relative inline-flex px-6 py-3 rounded-xl border border-primary/40 text-primary hover:bg-primary/10 transition focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                            View My Resume
                        </a>
                    </motion.div>

                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
                animate={{ y: [0, -10, 0] }}
                transition={{
                    duration: 1.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                <span className="text-xs tracking-widest text-muted-foreground mb-2">
                    SCROLL
                </span>
                <ArrowDown className="h-6 w-6 text-primary" />
            </motion.div>

        </section>
    );
};

export default HeroSection;
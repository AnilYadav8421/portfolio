import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
    return (
        <section
            id="hero"
            className="relative min-h-[70vh] md:min-h-screen flex flex-col items-center justify-center md:pt-0"
        >
            <div className="container max-w-4xl mx-auto text-center z-10">
                <motion.div
                    className="space-y-6"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: 0.3,
                            },
                        },
                    }}
                >
                    <motion.h1
                        className="text-3xl md:text-8xl font-bold tracking-tight"
                        aria-label="Hi, I'm Anil Yadav"
                        variants={{
                            hidden: { opacity: 0, y: -20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
                        }}
                    >
                        <span className="text-white">Hi, I'm</span>
                        <span className="text-primary ml-2">Anil</span>
                        <span className="text-gradient ml-2">Yadav</span>
                    </motion.h1>

                    <motion.p
                        className="text-base sm:text-sm md:text-xl text-muted-foreground max-w-2xl sm:max-w-3xl md:max-w-5xl sm:px-6 mx-auto text-center"
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
                        }}
                    >
                        Have a project you want to collaborate on, or looking for a talented and versatile frontend developer?
                    </motion.p>

                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
                        }}
                    >
                        <a
                            href="#projects"
                            role="button"
                            className="cosmic-button focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                        >
                            View My Work
                        </a>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 md:bottom-16 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
            >
                <span className="text-sm md:text-lg text-muted-foreground mb-2">
                    Scroll
                </span>
                <ArrowDown className="h-6 w-6 md:h-7 md:w-7 text-white" aria-hidden="true" />
            </motion.div>
        </section>
    );
};

export default HeroSection;

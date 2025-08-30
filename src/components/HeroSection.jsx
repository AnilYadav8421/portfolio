import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col items-center justify-center px-4"
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
                        className="text-lg md:text-xl text-muted-foreground max-w-7xl mx-auto"
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
                        }}
                    >
                        I design and develop modern web experiences using cutting-edge technologies. Specializing in front-end development, I create interfaces that are responsive, accessible, and visually engaging.
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
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
            >
                <span className="text-lg text-muted-foreground mb-2">Scroll</span>
                <ArrowDown className="h-7 w-7 text-white" aria-hidden="true" />
            </motion.div>
        </section>
    );
};

export default HeroSection;

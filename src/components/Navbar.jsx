import { cn } from "../lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import a from '../assets/svgs/a.jpg'

const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

const mobileContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
        },
    },
};

const mobileItem = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4"
            >
                <div
                    className={cn(
                        "w-full max-w-7xl rounded-full transition-all duration-300",
                        isScrolled
                            ? "py-3 bg-background/20 backdrop-blur-xl shadow-lg"
                            : "py-4 bg-background/10 backdrop-blur-md"
                    )}
                >
                    <div className="flex items-center justify-between px-4 md:px-6">

                        {/* Logo */}
                        <motion.a
                            href="#hero"
                            whileHover={{ scale: 1.03 }}
                            className="flex items-center gap-2 text-xl md:text-2xl font-bold text-white"
                        >
                            <img src={a} alt="" className="w-9" />
                            <span>Anil Yadav</span>
                        </motion.a>

                        {/* Desktop Nav */}
                        <div className="hidden md:flex items-center space-x-8">
                            {navItems.map((item) => (
                                <motion.a
                                    key={item.name}
                                    href={item.href}
                                    whileHover={{ y: -2 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                    className="relative text-white text-base md:text-lg
                                    after:absolute after:left-0 after:-bottom-1 after:h-[2px]
                                    after:w-0 after:bg-white after:transition-all after:duration-300
                                    hover:after:w-full"
                                >
                                    {item.name}
                                </motion.a>
                            ))}

                            <motion.a
                                href="https://www.linkedin.com/in/anilyadav12/"
                                target="_blank"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                className="cosmic-button px-6 py-2 text-sm font-semibold"
                            >
                                Let's talk
                            </motion.a>
                        </div>

                        {/* Mobile Toggle */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden text-foreground"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
                        </button>

                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        key="mobile"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center md:hidden"
                    >
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            className="absolute top-6 right-6"
                        >
                            <X size={28} />
                        </button>

                        <motion.div
                            variants={mobileContainer}
                            initial="hidden"
                            animate="show"
                            className="flex flex-col items-center gap-8"
                        >
                            {navItems.map((item) => (
                                <motion.a
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    variants={mobileItem}
                                    className="text-2xl text-white/90 hover:text-primary transition"
                                >
                                    {item.name}
                                </motion.a>
                            ))}

                            <motion.a
                                href="#contact"
                                onClick={() => setIsMenuOpen(false)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                className="cosmic-button px-8 py-3"
                            >
                                Get In Touch
                            </motion.a>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
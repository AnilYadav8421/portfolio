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

const mobileMenuContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.15,
        },
    },
};

const mobileMenuItem = {
    hidden: { opacity: 0, y: 24 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 24,
        },
    },
};

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                <div
                    className={cn(
                        "w-full max-w-7xl transition-all duration-300 rounded-full md:px-6",
                        isScrolled
                            ? "py-4 bg-background/10 backdrop-blur-md shadow-xl"
                            : "py-4 bg-background/20 backdrop-blur-sm"
                    )}
                >
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <a
                            href="#hero"
                            className="text-xl flex items-center md:text-2xl font-bold text-white"
                        >
                            <img src={a} alt="" className="w-10" />
                            <div>
                                <span className="">
                                    Anil
                                </span>{" "}
                                Yadav
                            </div>

                        </a>

                        {/* Desktop Nav + Button */}
                        <div className="hidden md:flex items-center space-x-8">
                            {navItems.map((item) => (
                                <motion.a
                                    key={item.name}
                                    href={item.href}
                                    className="relative text-white text-base md:text-lg
                                    after:content-[''] after:absolute after:-bottom-1 after:left-0
                                    after:w-0 after:h-1 after:bg-white after:rounded
                                    after:transition-all after:duration-300
                                    hover:after:w-full"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    {item.name}
                                </motion.a>
                            ))}

                            {/* CTA Button */}
                            <a
                                href="https://www.linkedin.com/in/anilyadav12/"
                                target="_blank"
                                role="button"
                                className="cosmic-button text-white px-6 py-2 text-base font-semibold
                                focus:outline-none focus:ring-2 focus:ring-primary
                                focus:ring-offset-2 transition-transform transform
                                hover:scale-105 hover:shadow-[0_0_20px_rgba(139,92,246,0.5)]"
                            >
                                Let's talk
                            </a>
                        </div>

                        {/* Mobile Button */}
                        <button
                            onClick={() => setIsMenuOpen((prev) => !prev)}
                            className="md:hidden p-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary rounded"
                            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                        >
                            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence mode="wait" initial={false}>
                {isMenuOpen && (
                    <motion.div
                        key="mobile-menu"
                        className="fixed inset-0 z-50 bg-background/90 backdrop-blur-lg flex flex-col items-center justify-center md:hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            className="absolute top-6 right-6 p-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary rounded"
                            aria-label="Close Menu"
                        >
                            <X size={28} />
                        </button>

                        <motion.div
                            className="flex flex-col items-center space-y-6"
                            variants={mobileMenuContainer}
                            initial="hidden"
                            animate="show"
                        >
                            {navItems.map((item) => (
                                <motion.a
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    variants={mobileMenuItem}
                                    className="text-2xl text-foreground/90 hover:text-primary transition-all"
                                >
                                    {item.name}
                                </motion.a>
                            ))}

                            {/* Mobile CTA */}
                            <a
                                href="#contact"
                                onClick={() => setIsMenuOpen(false)}
                                className="cosmic-button mt-4 px-8 py-3 text-lg font-semibold
                                transition-transform hover:scale-105"
                            >
                                Get In Touch
                            </a>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
import { cn } from "../lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

const mobileMenuContainer = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.15,
        },
    },
};

const mobileMenuItem = {
    hidden: {
        opacity: 0,
        y: 24,
    },
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
        <motion.nav
            className={cn(
                "w-full z-50 transition-all duration-300 md:fixed",
                isScrolled
                    ? "py-6 bg-background/30 backdrop-blur-md shadow-lg"
                    : "py-4 bg-transparent"
            )}
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            <div className="container mx-auto flex items-center justify-between px-4">
                {/* Logo */}
                <a
                    href="#hero"
                    className="text-2xl font-bold text-primary relative"
                >
                    <span className="text-glow text-foreground">Anil&apos;s</span> Portfolio
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex space-x-8">
                    {navItems.map((item) => (
                        <motion.a
                            key={item.name}
                            href={item.href}
                            className="relative text-white text-base md:text-lg lg:text-xl
                after:content-[''] after:absolute after:-bottom-1 after:left-0
                after:w-0 after:h-1 after:bg-white after:rounded after:transition-all after:duration-300
                hover:after:w-full hover:after:shadow-[0_0_15px_#fff,0_0_30px_#fff,0_0_45px_#fff]"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            {item.name}
                        </motion.a>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    className="md:hidden p-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary rounded z-50"
                    aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                >
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence mode="wait" initial={false}>
                {isMenuOpen && (
                    <motion.div
                        key="mobile-menu"
                        className="fixed inset-0 z-50 bg-background/90 backdrop-blur-lg flex flex-col items-center justify-center md:hidden"
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            className="absolute top-6 right-6 p-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary rounded"
                            aria-label="Close Menu"
                        >
                            <X size={28} />
                        </button>

                        {/* Menu Links */}
                        <motion.div
                            className="flex flex-col items-center justify-center space-y-6 w-full max-w-xs px-4"
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
                                    className="w-full text-center text-2xl text-foreground/90 py-3 rounded
                    hover:bg-primary/10 hover:text-primary transition-all duration-300"
                                >
                                    {item.name}
                                </motion.a>
                            ))}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;

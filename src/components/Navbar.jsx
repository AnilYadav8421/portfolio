import { cn } from "../lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed w-full z-50 transition-all duration-300",
                isScrolled
                    ? "py-3 bg-background/80 backdrop-blur-md shadow-md"
                    : "py-5"
            )}
        >
            <div className="container mx-auto flex items-center justify-between px-4">
                {/* Logo */}
                <a
                    href="#hero"
                    className="text-xl font-bold text-primary flex items-center z-50"
                >
                    <span className="relative z-10">
                        <span className="text-glow text-foreground">Anil</span> Portfolio
                    </span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex space-x-8">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    className="md:hidden p-2 text-foreground z-50 focus:outline-none focus:ring-2 focus:ring-primary rounded"
                    aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Menu Overlay */}
                <div
                    className={cn(
                        "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center transform transition-all duration-300 md:hidden",
                        isMenuOpen
                            ? "opacity-100 scale-100 pointer-events-auto"
                            : "opacity-0 scale-95 pointer-events-none"
                    )}
                >
                    <div className="flex flex-col space-y-8 text-xl">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

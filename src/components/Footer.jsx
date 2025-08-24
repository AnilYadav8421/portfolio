import { ArrowUp, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
    return (
        <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
                {/* Left: Copyright */}
                <p className="text-sm text-muted-foreground text-center md:text-left">
                    &copy; {new Date().getFullYear()} All rights reserved. <span className="block md:inline"> - Build by Anil Yadav</span>
                </p>

                {/* Center: Social Links */}
                <div className="flex space-x-4">
                    <a
                        href="https://www.linkedin.com/in/anil-yadav-3111a9268/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 transition-colors"
                    >
                        <Linkedin size={20} />
                    </a>
                    <a
                        href="https://x.com/anilyadav1108"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 transition-colors"
                    >
                        <Twitter size={20} />
                    </a>
                </div>

                {/* Right: Scroll to Top */}
                <a
                    href="#hero"
                    className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-transform transform hover:scale-110"
                >
                    <ArrowUp size={20} />
                </a>
            </div>
        </footer>
    );
};

export default Footer;

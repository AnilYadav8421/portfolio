import { ArrowUp, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
    return (
        <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">

                {/* Left: Copyright */}
                <p className="text-lg text-muted-foreground text-center md:text-left">
                    &copy; {new Date().getFullYear()} All rights reserved.{" "}
                    <span className="block md:inline font-medium text-foreground/90">
                        - Built by Anil Yadav
                    </span>
                </p>

                {/* Right: Scroll to Top + Socials */}
                <div className="flex items-center gap-4">
                    {/* Social Links */}
                    <a
                        href="https://www.linkedin.com/in/anil-yadav-3111a9268/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-transform transform hover:scale-110"
                    >
                        <Linkedin size={20} />
                    </a>
                    <a
                        href="https://x.com/anilyadav1108"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-transform transform hover:scale-110"
                    >
                        <Twitter size={20} />
                    </a>

                    {/* Scroll to Top */}
                    <a
                        href="#hero"
                        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-transform transform hover:scale-110"
                    >
                        <ArrowUp size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

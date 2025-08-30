import { ArrowUp, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
    return (
        <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
                {/* Left: Copyright */}
                <p className="text-lg text-muted-foreground text-center md:text-left">
                    &copy; {new Date().getFullYear()} All rights reserved. <span className="block md:inline"> - Build by Anil Yadav</span>
                </p>


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

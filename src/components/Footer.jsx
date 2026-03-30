import { ArrowUp, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
    return (
        <footer className="py-6 px-4 bg-card relative border-t border-border mt-6 pt-8">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">

                {/* Left: Copyright */}
                <p className="text-lg text-muted-foreground text-center md:text-left">
                    &copy; {new Date().getFullYear()} All rights reserved.{" "}
                    <span className="block md:inline font-medium text-foreground/90">
                        - Built by Anil Yadav
                    </span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;

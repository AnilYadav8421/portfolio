import {
    Linkedin,
    Mail,
    MapPin,
    Phone,
    Send,
    Twitter,
} from "lucide-react";
import { cn } from "../lib/utils";
import { useToast } from "../hooks/use-toast";
import { useState } from "react";

const ContactSection = () => {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        setTimeout(() => {
            toast({
                title: "Message sent!",
                description: "Thank you for your message. I'll get back to you soon.",
            });
            setIsSubmitting(false);
        }, 1500);
    };

    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                {/* Section Title */}
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary">Touch</span>
                </h2>

                {/* Section Description */}
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Have a project or collaboration in mind? Feel free to reach out — I’m always open to new opportunities.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

                        <div className="space-y-6">
                            {/* Email */}
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium">Email</h4>
                                    <a
                                        href="mailto:anilyadav8149838058@gmail.com"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        anilyadav8149838058@gmail.com
                                    </a>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium">Phone</h4>
                                    <a
                                        href="tel:+918421873970"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        +91 84218-73970
                                    </a>
                                </div>
                            </div>

                            {/* Location */}
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium">Location</h4>
                                    <span className="text-muted-foreground">Nashik, Maharashtra, India</span>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="pt-8">
                            <h4 className="font-medium mb-4">Connect With Me</h4>
                            <div className="flex space-x-4 justify-center">
                                <a
                                    href="https://www.linkedin.com/in/anil-yadav-3111a9268/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Linkedin className="h-6 w-6 text-primary hover:text-primary/80 transition-colors" />
                                </a>
                                <a
                                    href="https://x.com/anilyadav1108"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Twitter className="h-6 w-6 text-primary hover:text-primary/80 transition-colors" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

                        <form className="space-y-6" onSubmit={handleSubmit}>
                            {/* Name */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    placeholder="Anil Yadav..."
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    placeholder="john@gmail.com"
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    placeholder="Hello, I'd like to talk about..."
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={cn(
                                    "cosmic-button w-full flex items-center justify-center gap-2"
                                )}
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                                <Send size={16} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;

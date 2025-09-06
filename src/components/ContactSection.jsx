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
import { motion } from "framer-motion";

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

    const containerVariants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.2 } },
    };

    const fadeUpVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
    };

    return (
        <section id="contact" className="py-24 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold mb-4 text-center"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    Get In <span className="text-primary">Touch</span>
                </motion.h2>

                <motion.p
                    className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Have a project or collaboration in mind? Feel free to reach out — I’m always open to new opportunities.
                </motion.p>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-12"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                >
                    {/* Contact Info */}
                    <motion.div className="space-y-8" variants={fadeUpVariants}>
                        <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

                        <div className="space-y-6">
                            {[
                                { icon: <Mail className="h-6 w-6 text-primary" />, label: "Email", value: "anilyadav8149838058@gmail.com", href: "mailto:anilyadav8149838058@gmail.com" },
                                { icon: <Phone className="h-6 w-6 text-primary" />, label: "Phone", value: "+91 84218-73970", href: "tel:+918421873970" },
                                { icon: <MapPin className="h-6 w-6 text-primary" />, label: "Location", value: "Nashik, Maharashtra, India" },
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-start space-x-4">
                                    <div className="p-3 rounded-full bg-primary/10">{item.icon}</div>
                                    <div>
                                        <h4 className="font-medium">{item.label}</h4>
                                        {item.href ? (
                                            <a
                                                href={item.href}
                                                className="text-muted-foreground hover:text-primary transition-colors"
                                            >
                                                {item.value}
                                            </a>
                                        ) : (
                                            <span className="text-muted-foreground">{item.value}</span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div className="pt-8">
                            <h4 className="font-medium mb-4">Connect With Me</h4>
                            <div className="flex space-x-4 justify-center md:justify-start">
                                <a
                                    href="https://www.linkedin.com/in/anil-yadav-3111a9268/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="transform transition-transform duration-300 hover:scale-110"
                                >
                                    <Linkedin className="h-6 w-6 text-primary hover:text-primary/80 transition-colors" />
                                </a>
                                <a
                                    href="https://x.com/anilyadav1108"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="transform transition-transform duration-300 hover:scale-110"
                                >
                                    <Twitter className="h-6 w-6 text-primary hover:text-primary/80 transition-colors" />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        className="bg-card p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                        variants={fadeUpVariants}
                    >
                        <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

                        <form className="space-y-6" onSubmit={handleSubmit}>
                            {[
                                { id: "name", label: "Your Name", type: "text", placeholder: "Anil Yadav..." },
                                { id: "email", label: "Your Email", type: "email", placeholder: "john@gmail.com" },
                                { id: "message", label: "Your Message", type: "textarea", placeholder: "Hello, I'd like to talk about..." },
                            ].map((field, idx) => (
                                <div key={idx}>
                                    <label htmlFor={field.id} className="block text-sm font-medium mb-2">
                                        {field.label}
                                    </label>
                                    {field.type === "textarea" ? (
                                        <textarea
                                            id={field.id}
                                            name={field.id}
                                            required
                                            placeholder={field.placeholder}
                                            className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none transition-shadow duration-300"
                                        />
                                    ) : (
                                        <input
                                            type={field.type}
                                            id={field.id}
                                            name={field.id}
                                            required
                                            placeholder={field.placeholder}
                                            className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-shadow duration-300"
                                        />
                                    )}
                                </div>
                            ))}

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
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactSection;

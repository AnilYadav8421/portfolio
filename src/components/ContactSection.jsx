import { Linkedin, Mail, MapPin, Phone, Send, Twitter } from "lucide-react";
import { cn } from "../lib/utils";
import { useToast } from "../hooks/use-toast";
import { useState } from "react";
import { motion } from "framer-motion";

const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.12,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 25 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

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
        }, 1200);
    };

    return (
        <section id="contact" className="py-24 relative bg-secondary/30">

            <div className="container mx-auto max-w-5xl">

                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-4xl font-bold mb-4 text-center"
                >
                    Get In <span className="text-primary">Touch</span>
                </motion.h2>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
                >
                    Have a project or collaboration in mind? I’m open to opportunities and discussions.
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                    {/* LEFT */}
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        className="space-y-8"
                    >

                        <motion.h3 variants={item} className="text-2xl font-semibold">
                            Contact Information
                        </motion.h3>

                        <motion.p variants={item} className="text-muted-foreground">
                            Feel free to reach out for collaborations or just a chat.
                        </motion.p>

                        <div className="space-y-6">

                            {[
                                {
                                    icon: <Mail className="h-6 w-6 text-primary" />,
                                    label: "Email",
                                    value: "anilyadav8149838058@gmail.com",
                                    href: "mailto:anilyadav8149838058@gmail.com"
                                },
                                {
                                    icon: <Phone className="h-6 w-6 text-primary" />,
                                    label: "Phone",
                                    value: "+91 84218-73970",
                                    href: "tel:+918421873970"
                                },
                                {
                                    icon: <MapPin className="h-6 w-6 text-primary" />,
                                    label: "Location",
                                    value: "Nashik, Maharashtra, India"
                                },
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={item}
                                    className="flex items-start gap-4"
                                >
                                    <div className="p-3 rounded-full bg-primary/10">
                                        {item.icon}
                                    </div>

                                    <div>
                                        <h4 className="font-medium">{item.label}</h4>

                                        {item.href ? (
                                            <a
                                                href={item.href}
                                                className="text-muted-foreground hover:text-primary transition"
                                            >
                                                {item.value}
                                            </a>
                                        ) : (
                                            <span className="text-muted-foreground">
                                                {item.value}
                                            </span>
                                        )}
                                    </div>
                                </motion.div>
                            ))}

                        </div>

                        {/* Social */}
                        <motion.div variants={item} className="pt-6">
                            <h4 className="font-medium mb-4">Connect</h4>

                            <div className="flex justify-center gap-4">

                                <motion.a
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    href="https://www.linkedin.com/in/anil-yadav-3111a9268/"
                                    target="_blank"
                                >
                                    <Linkedin className="h-7 w-7 text-primary" />
                                </motion.a>

                                <motion.a
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    href="https://x.com/anilyadav1108"
                                    target="_blank"
                                >
                                    <Twitter className="h-7 w-7 text-primary" />
                                </motion.a>

                            </div>
                        </motion.div>

                    </motion.div>

                    {/* RIGHT FORM */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                        className="bg-card p-8 rounded-xl shadow-md"
                    >

                        <h3 className="text-2xl font-semibold mb-6">
                            Send a Message
                        </h3>

                        <form className="space-y-6" onSubmit={handleSubmit}>

                            {[
                                { id: "name", label: "Your Name", type: "text", placeholder: "Anil Yadav..." },
                                { id: "email", label: "Your Email", type: "email", placeholder: "john@gmail.com" },
                            ].map((field) => (
                                <div key={field.id}>
                                    <label className="block text-sm mb-2">
                                        {field.label}
                                    </label>

                                    <input
                                        type={field.type}
                                        required
                                        placeholder={field.placeholder}
                                        className="w-full px-4 py-3 rounded-md border bg-background focus:ring-2 focus:ring-primary transition"
                                    />
                                </div>
                            ))}

                            <div>
                                <label className="block text-sm mb-2">
                                    Your Message
                                </label>

                                <textarea
                                    required
                                    placeholder="Hello..."
                                    className="w-full px-4 py-4 rounded-md border bg-background focus:ring-2 focus:ring-primary resize-none transition"
                                />
                            </div>

                            <motion.button
                                whileTap={{ scale: 0.97 }}
                                type="submit"
                                disabled={isSubmitting}
                                className="cosmic-button w-full flex items-center justify-center gap-2"
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                                <Send size={16} />
                            </motion.button>

                        </form>

                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default ContactSection;
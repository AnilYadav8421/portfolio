import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
    {
        id: 1,
        title: "E-commerce Platform",
        image: "/projects/Project1.png",
        demoUrl: "https://e-commerce-website-git-main-anils-projects-1753d137.vercel.app/",
        githubUrl: "https://github.com/AnilYadav8421/eCommerce-website",
    },
    {
        id: 2,
        title: "Crypto Screener App",
        image: "/projects/Project2.png",
        demoUrl: "https://live-crypto-gamma.vercel.app/",
        githubUrl: "https://github.com/AnilYadav8421/LiveCrypto",
    },
    {
        id: 3,
        title: "Real Estate App",
        image: "/projects/Project3.png",
        demoUrl: "https://anilyadav8421.github.io/Estate-App/",
        githubUrl: "https://github.com/AnilYadav8421/Estate-App",
    },
    {
        id: 4,
        title: "Car Rental App",
        image: "/projects/cr-rent.png",
        demoUrl: "https://car-rental-omega-gold.vercel.app/",
        githubUrl: "https://github.com/AnilYadav8421/Car_Rental",
    },
    {
        id: 5,
        title: "Car-Service",
        image: "/projects/bcs.png",
        demoUrl: "https://black-car-service.vercel.app/",
        githubUrl: "https://github.com/AnilYadav8421/Black-Car-Service",
    },
];

const ProjectsSection = () => {
    // Framer Motion variants
    const containerVariants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.2 } },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
    };

    return (
        <section id="projects" className="py-24 px-2 relative bg-background">
            <div className="container mx-auto max-w-5xl">
                {/* Section Title */}
                <motion.h2
                    className="text-3xl md:text-4xl font-bold mb-12 text-center"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    Featured <span className="text-primary">Projects</span>
                </motion.h2>

                {/* Projects Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                >
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            className="group bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-transform duration-300"
                            variants={cardVariants}
                            whileHover={{ scale: 1.03 }}
                        >
                            {/* Project Image */}
                            <div className="w-full aspect-w-16 aspect-h-9 overflow-hidden">
                                <motion.img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-300"
                                    whileHover={{ scale: 1.1 }}
                                    loading="lazy"
                                />
                            </div>

                            {/* Project Name & Links */}
                            <div className="p-4 flex justify-between items-center">
                                <h3 className="text-lg sm:text-xl font-semibold">{project.title}</h3>
                                <div className="flex gap-3">
                                    <a
                                        href={project.demoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                    >
                                        <ExternalLink size={20} />
                                    </a>
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                    >
                                        <Github size={20} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Github Button */}
                <div className="text-center mt-12">
                    <a
                        className="cosmic-button w-fit flex items-center mx-auto gap-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/AnilYadav8421"
                    >
                        Check My Github <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;

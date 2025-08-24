import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "E-commerce Platform",
        description:
            "Full-featured e-commerce platform with product browsing, filtering, sorting, and cart management.",
        image: "/projects/Project1.png",
        tags: ["React", "Tailwind CSS"],
        demoUrl: "https://e-commerce-website-git-main-anils-projects-1753d137.vercel.app/",
        githubUrl: "https://github.com/AnilYadav8421/eCommerce-website",
    },
    {
        id: 2,
        title: "Crypto Screener App",
        description:
            "Real-time cryptocurrency screener using APIs. Users can search, sort, and view live data and charts.",
        image: "/projects/Project2.png",
        tags: ["React", "React Router", "Context API"],
        demoUrl: "https://live-crypto-gamma.vercel.app/",
        githubUrl: "https://github.com/AnilYadav8421/LiveCrypto",
    },
    {
        id: 3,
        title: "Real Estate App",
        description:
            "Responsive real estate website with dynamic UI components, smooth animations, and a contact form integration.",
        image: "/projects/Project3.png",
        tags: ["React", "Tailwind CSS", "Email API"],
        demoUrl: "https://anilyadav8421.github.io/Estate-App/",
        githubUrl: "https://github.com/AnilYadav8421/Estate-App",
    },
    {
        id: 4,
        title: "Car Rental App",
        description:
            "Fully responsive car rental web app including dynamic car listing, search, and filtering features.",
        image: "/projects/cr-rent.png",
        tags: ["React", "Tailwind CSS", "Lucide-react"],
        demoUrl: "https://car-rental-omega-gold.vercel.app/",
        githubUrl: "https://github.com/AnilYadav8421/Car_Rental",
    },
    {
        id: 5,
        title: "Tinder Clone",
        description:
            "Responsive Tinder clone with smooth animations, dynamic UI components, and a contact form for inquiries.",
        image: "/projects/Project4.png",
        tags: ["React", "Node.js", "MongoDB"],
        demoUrl: "#",
        githubUrl: "https://github.com/AnilYadav8421/Tinder-app",
    },
];

const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                {/* Section Title */}
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured <span className="text-primary">Projects</span>
                </h2>

                {/* Section Description */}
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects, crafted with attention to detail, performance, and seamless user experience.
                </p>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover hover:scale-105 transition-transform duration-300"
                        >
                            {/* Project Image */}
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    loading="lazy"
                                />
                            </div>

                            {/* Project Content */}
                            <div className="p-6">
                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground capitalize"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Title & Description */}
                                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4">
                                    {project.description}
                                </p>

                                {/* Links */}
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
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
                            </div>
                        </div>
                    ))}
                </div>

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

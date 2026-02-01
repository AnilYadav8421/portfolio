import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "E-commerce Platform",
        description:
            "E-commerce platform built with React featuring product filters, variant selection, cart, and Stripe & Razorpay checkout. Deployed on Vercel.",
        image: "/projects/Project1.png",
        date: "March 2025",
        demoUrl:
            "https://e-commerce-website-git-main-anils-projects-1753d137.vercel.app/",
        githubUrl: "https://github.com/AnilYadav8421/eCommerce-website",
    },
    {
        id: 2,
        title: "Crypto Screener App",
        description:
            "Modern crypto screener built with React.js featuring live price tracking, charts, search, sorting, pagination, and favorites.",
        image: "/projects/Project2.png",
        date: "July 2025",
        demoUrl: "https://live-crypto-gamma.vercel.app/",
        githubUrl: "https://github.com/AnilYadav8421/LiveCrypto",
    },
    {
        id: 3,
        title: "Real Estate App",
        description:
            "Responsive real estate website built with React.js & Tailwind CSS featuring smooth animations and a functional contact form with email integration.",
        image: "/projects/Project3.png",
        date: "Jan 2025",
        demoUrl: "https://anilyadav8421.github.io/Estate-App/",
        githubUrl: "https://github.com/AnilYadav8421/Estate-App",
    },
    {
        id: 4,
        title: "Car Rental App",
        description:
            "Responsive car rental frontend built with React.js featuring car listings, location-based filters, and date selection in a modern UI.",
        image: "/projects/cr-rent.png",
        date: "Aug 2025",
        demoUrl: "https://car-rental-omega-gold.vercel.app/",
        githubUrl: "https://github.com/AnilYadav8421/Car_Rental",
    },
    {
        id: 5,
        title: "Live City Dashboard",
        description:
            "React.js city dashboard with live weather, news, country data, Firebase real-time notes, and WebSocket notifications.",
        image: "/projects/live-city.png",
        date: "Nov 2024",
        demoUrl: "https://live-city-dashboard.vercel.app/",
        githubUrl: "https://github.com/AnilYadav8421/Live-City-Dashboard",
    },
    {
        id: 6,
        title: "Medication Manager",
        description:
            "Responsive medication tracker built with React.js & Tailwind CSS featuring reminders, dosage tracking, and a clean, user-friendly UI.",
        image: "/projects/med-mgmt.png",
        date: "Sept 2024",
        demoUrl: "https://medifor7-landing-page-t16g.vercel.app/",
        githubUrl: "https://github.com/AnilYadav8421/medifor7-landing-page",
    },

    {
        id: 7,
        title: "Task Management App",
        description:
            "Responsive task management app built with HTML, CSS, and JavaScript featuring task creation, editing, deletion, and status tracking.",
        image: "/projects/task-mgmt.png",
        date: "July 2024",
        demoUrl: "https://anilyadav8421.github.io/To-Do-App/",
        githubUrl: "https://github.com/AnilYadav8421/To-Do-App",
    },
    {
        id: 8,
        title: "Weather Forecast App",
        description:
            "Responsive weather forecast app built with React.js & Tailwind CSS featuring real-time data, location-based forecasts, and a clean, easy-to-use UI.",
        image: "/projects/weather-app.png",
        date: "Feb 2024",
        demoUrl: "https://weather-website-omega.vercel.app/",
        githubUrl: "https://github.com/AnilYadav8421/Weather-website",
    },
];

const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2
                    className="text-3xl md:text-4xl font-bold mb-12 text-center"
                >
                    Featured <span className="text-primary">Projects</span>
                </h2>

                <div
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    {projects.map(project => (
                        <div
                            key={project.id}
                            className="group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-transform duration-300 border border-border"
                        >
                            <div className="w-full aspect-w-16 aspect-h-9 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-300"
                                />
                            </div>

                            <div className="p-5 flex flex-col gap-3">
                                <div className="flex justify-between items-start">
                                    <h3 className="text-lg sm:text-xl font-semibold">
                                        {project.title}
                                        <div className="text-xs rounded-full mt-1 text-left text-muted-foreground">
                                            {project.date}
                                        </div>
                                    </h3>
                                    <div className="flex gap-3 mt-1">
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

                                <p className="text-sm text-muted-foreground text-left leading-relaxed">
                                    {project.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

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

import ThemeToggle from '../components/ThemeToggle'
import StarBackground from '../components/StarBackground'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import SkillsSection from '../components/SkillsSection'
import ProjectsSection from '../components/ProjectsSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'
import EducationSection from '../components/EducationSection'
import ExperienceSection from '../components/ExperienceSection'
import { useState, useEffect } from 'react'

const Home = () => {
    const [showTopButton, setShowTopButton] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;

            setShowTopButton(scrollTop > 300);
            setScrollProgress(scrollPercent);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // Circle radius and circumference
    const radius = 24;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (scrollProgress / 100) * circumference;
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
            <ThemeToggle className="fixed top-6 right-6 z-50" />
            <StarBackground />

            <Navbar />
            <main className="relative z-10">
                <HeroSection />
                <AboutSection />
                <ExperienceSection />
                <ProjectsSection />
                <SkillsSection />
                <EducationSection />
                <ContactSection />
            </main>
            <Footer />

            {showTopButton && (
                <button
                    onClick={scrollToTop}
                    className="fixed cursor-pointer bottom-6 right-6 z-50 w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center rounded-full cosmic-button text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-transform transform hover:scale-105 hover:shadow-[0_0_20px_rgba(139,92,246,0.5)]"
                    aria-label="Back to top"
                >
                    {/* SVG Circle for progress */}
                    <svg
                        className="absolute -z-10 w-full h-full"
                        width="100%"
                        height="100%"
                    >
                        <circle
                            cx="50%"
                            cy="50%"
                            r={radius}
                            stroke="#FFFFFF"
                            strokeWidth="5"
                            fill="transparent"
                            strokeDasharray={circumference}
                            strokeDashoffset={offset}
                            strokeLinecap="round"
                        />
                    </svg>
                    ↑
                </button>
            )
            }
        </div >
    )
}

export default Home

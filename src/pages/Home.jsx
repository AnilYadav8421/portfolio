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

const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
            <ThemeToggle className="fixed top-6 right-6 z-50" />
            <StarBackground />

            <Navbar />
            <main className="relative z-10">
                <HeroSection />
                <AboutSection />
                <ExperienceSection />
                <EducationSection />
                <SkillsSection />
                <ProjectsSection />
                <ContactSection />
            </main>

            <Footer />
        </div>
    )
}

export default Home

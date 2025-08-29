import { Briefcase } from "lucide-react";
import { useEffect, useState } from "react";

const experienceData = [
  {
    role: "Frontend Developer Intern",
    company: "NerdTech Lcc",
    duration: "July 2025 - Present",
    description: [
      "Developed a real client-facing jewellery website using React and Tailwind CSS.",
      "Fetched API data to display products dynamically on the website.",
    ],
  },
  // Add more experiences here
];

const ExperienceSection = () => {
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    const observers = [];
    experienceData.forEach((_, index) => {
      const element = document.getElementById(`exp-${index}`);
      if (element) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setVisibleItems((prev) => [...new Set([...prev, index])]);
              }
            });
          },
          { threshold: 0.3 }
        );
        observer.observe(element);
        observers.push(observer);
      }
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section id="experience" className="py-28 px-4 bg-background">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          Work <span className="text-primary">Experience</span>
        </h2>

        <div className="relative border-l-2 border-primary/20 ml-6">
          {experienceData.map((exp, index) => (
            <div
              key={index}
              id={`exp-${index}`}
              className={`mb-16 pl-10 relative transition-all duration-700 ${
                visibleItems.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              {/* Timeline Dot */}
              <span className="absolute -left-5 top-2 w-5 h-5 rounded-full bg-primary shadow-lg"></span>

              {/* Role & Company */}
              <h3 className="text-2xl md:text-3xl font-semibold flex items-center gap-3 mb-1">
                <Briefcase className="w-6 h-6 text-primary" />
                {exp.role} @ {exp.company}
              </h3>

              {/* Duration */}
              <span className="text-sm md:text-base text-primary font-medium">{exp.duration}</span>

              {/* Description */}
              <ul className="mt-3 list-disc list-inside text-muted-foreground space-y-2 text-base md:text-lg">
                {exp.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

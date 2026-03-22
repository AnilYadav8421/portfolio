import { useEffect, useRef, useState } from "react";

function useCountUp(target, duration = 2000, start = false) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!start) return;
        let startTime = null;
        const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            setCount(Math.floor(progress * target));
            if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    }, [start, target, duration]);

    return count;
}

export default function Stats() {
    const [hasStarted, setHasStarted] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setHasStarted(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    const projects = useCountUp(10, 1500, hasStarted);
    const satisfaction = useCountUp(95, 2000, hasStarted);
    const experience = useCountUp(1, 1000, hasStarted);

    return (
        <div
            ref={ref}
            className="mt-12 flex sm:flex-row justify-between items-center gap-8 p-8 md:p-10 rounded-2xl gradient-border text-center"
        >
            {/* Projects */}
            <div className="flex flex-col items-center">
                <div className="flex items-baseline gap-1">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
                            {projects}<span className="text-primary">+</span>
                        </h2>
                    </div>
                </div>
                <p className="mt-2 text-sm md:text-base text-muted-foreground">
                    Completed Projects
                </p>
            </div>

            {/* Satisfaction */}
            <div className="flex flex-col items-center">
                <div className="flex items-baseline gap-1">
                    <div className="flex items-center">
                        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
                            {satisfaction}<span className="text-primary font-bold text-4xl">%</span>
                        </h2>
                    </div>

                </div>
                <p className="mt-2 text-sm md:text-base text-muted-foreground">
                    Client Satisfaction
                </p>
            </div>

            {/* Experience */}
            <div className="flex flex-col items-center">
                <div className="flex items-baseline gap-1">
                    <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
                        {experience}<span className="text-primary">+</span>
                    </h2>
                </div>
                <p className="mt-2 text-sm md:text-base text-muted-foreground">
                    Years of Experience
                </p>
            </div>
        </div>
    );
}
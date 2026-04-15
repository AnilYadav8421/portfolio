import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

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

    const container = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    return (
        <motion.div
            ref={ref}
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mt-12 flex sm:flex-row justify-between items-center gap-8 p-8 md:p-10 rounded-2xl gradient-border text-center"
        >

            {/* Projects */}
            <motion.div variants={item} className="flex flex-col items-center">
                <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
                    {projects}<span className="text-primary">+</span>
                </h2>
                <p className="mt-2 text-sm md:text-base text-muted-foreground">
                    Completed Projects
                </p>
            </motion.div>

            {/* Satisfaction */}
            <motion.div variants={item} className="flex flex-col items-center">
                <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
                    {satisfaction}<span className="text-primary">%</span>
                </h2>
                <p className="mt-2 text-sm md:text-base text-muted-foreground">
                    Client Satisfaction
                </p>
            </motion.div>

            {/* Experience */}
            <motion.div variants={item} className="flex flex-col items-center">
                <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
                    {experience}<span className="text-primary">+</span>
                </h2>
                <p className="mt-2 text-sm md:text-base text-muted-foreground">
                    Years of Experience
                </p>
            </motion.div>

        </motion.div>
    );
}
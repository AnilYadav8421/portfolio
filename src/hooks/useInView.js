import { useEffect, useState, useRef } from "react";

export const useInView = (threshold = 0.1, once = true) => {
    const ref = useRef(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    if (once) observer.unobserve(entry.target); // animate only once
                } else if (!once) {
                    setIsInView(false); // reset if element goes out of view
                }
            },
            { threshold }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [threshold, once]);

    return [ref, isInView];
};

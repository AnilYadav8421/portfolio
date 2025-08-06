import { useEffect } from "react";

const ThemeToggle = () => {
  useEffect(() => {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }, []);

  return null; // Or remove this component entirely if it's no longer needed
};

export default ThemeToggle;

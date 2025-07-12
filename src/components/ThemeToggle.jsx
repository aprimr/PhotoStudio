import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      if (localStorage.theme === "dark") return true;
      if (localStorage.theme === "light") return false;
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

  useEffect(() => {
    const html = window.document.documentElement;
    if (isDark) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <div
      tabIndex={-1}
      onClick={toggleTheme}
      role="button"
      aria-label="Toggle dark mode"
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") toggleTheme();
      }}
      className={`
        w-3 h-3 rounded-full cursor-pointer
        transition-colors duration-300 
        ${isDark ? "bg-white" : "bg-black"}
        shadow-md
      `}
    />
  );
};

export default ThemeToggle;

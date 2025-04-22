// Importing required hooks and icons
import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

// ThemeButton component to toggle between light and dark themes
export const ThemeButton = () => {
  // Initial theme is read from localStorage
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    return localStorage.getItem("darkTheme") === "true";
  });

  useEffect(() => {
    if (isDarkTheme) {
      // Enable dark theme
      document.documentElement.classList.add("dark");
      document.body.style.backgroundColor = "black";
    } else {
      // Enable light theme
      document.documentElement.classList.remove("dark");
      document.body.style.backgroundColor = "white";
    }

    // Stores the theme in localStorage
    localStorage.setItem("darkTheme", isDarkTheme.toString());
  }, [isDarkTheme]);

  // Toggle between dark and light theme
  const toggleTheme = () => {
    setIsDarkTheme((prev) => !prev);
  };

  return (
    // Toggle icon (Sun for dark mode, Moon for light mode)
    <div onClick={toggleTheme} className="cursor-pointer">
      {isDarkTheme ? <Sun className="dark:text-white" /> : <Moon className="dark:text-white" />}
    </div>
  );
};

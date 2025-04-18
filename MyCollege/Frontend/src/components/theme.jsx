import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export const ThemeButton = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    return localStorage.getItem("darkTheme") === "true";
  });

  useEffect(() => {
    if (isDarkTheme) {
      document.documentElement.classList.add("dark");
      document.body.style.backgroundColor = "black";
    } else {
      document.documentElement.classList.remove("dark");
      document.body.style.backgroundColor = "white";
    }
    localStorage.setItem("darkTheme", isDarkTheme.toString());
  }, [isDarkTheme]);

  const toggleTheme = () => {
    setIsDarkTheme((prev) => !prev);
  };

  return (
    <div onClick={toggleTheme} className="cursor-pointer">
      {isDarkTheme ? <Sun className="dark:text-white" /> : <Moon className="dark:text-white" />}
    </div>
  );
};

import { useState, useEffect } from "react";

export const useTheme = () => {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    const isBrowserDarkMode =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(isBrowserDarkMode ? "dark" : "light");
  }, []);
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return [theme, toggleTheme];
};

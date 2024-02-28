"use client";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

const ThemeSwitcher = () => {
  const { resolvedTheme: theme, setTheme } = useTheme();

  const switchTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div>
      {theme === "light" ? (
        <Sun size={24} onClick={switchTheme} />
      ) : (
        <Moon size={24} onClick={switchTheme} />
      )}
    </div>
  );
};

export default ThemeSwitcher;

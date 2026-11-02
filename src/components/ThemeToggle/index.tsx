import { ThemeContext } from "@/providers/theme";
import { useContext } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

const ThemeToggle = () => {
  const { theme, updateTheme } = useContext(ThemeContext);
  const label = theme ? "Switch to " + (theme === "dark" ? "light" : "dark") + " theme" : "Switch color theme";

  return (
    <button className="theme-toggle" type="button" aria-label={label} title={label}
      onClick={() => updateTheme?.(theme === "dark" ? "light" : "dark")}>
      {theme === "dark" ? <FiSun aria-hidden="true" /> : <FiMoon aria-hidden="true" />}
    </button>
  );
};

export default ThemeToggle;

import { createContext, Dispatch, ReactNode, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextValue {
  theme?: Theme;
  updateTheme?: Dispatch<Theme>;
}

export const ThemeContext = createContext<ThemeContextValue>({});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>();

  useEffect(() => {
    const initialTheme = document.documentElement.dataset.theme;
    setTheme(initialTheme === "dark" ? "dark" : "light");
  }, []);

  const updateTheme = (value: Theme) => {
    document.documentElement.dataset.theme = value;
    setTheme(value);
    try {
      localStorage.setItem("color-theme", value);
    } catch {
      // Theme switching still works when browser storage is unavailable.
    }
  };

  return <ThemeContext.Provider value={{ theme, updateTheme }}>{children}</ThemeContext.Provider>;
};

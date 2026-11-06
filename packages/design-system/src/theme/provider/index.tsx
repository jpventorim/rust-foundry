import { type ComponentProps, createContext, useContext } from "react";

export type Theme = "light" | "dark";
export type FieldSurface = "auto" | "mounted" | "integrated";

const ThemeContext = createContext<Theme>("light");

export function useTheme(): Theme {
  return useContext(ThemeContext);
}

/** Scopes material tones. Portaled components inherit this context as well. */
export function ThemeProvider({
  theme = "light",
  className = "",
  children,
  ...props
}: ComponentProps<"div"> & { theme?: Theme }) {
  return (
    <ThemeContext.Provider value={theme}>
      <div {...props} data-theme={theme} className={`rf-theme ${className}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

// https://github.com/kentcdodds/kentcdodds.com/blob/11519442de4701c169e1d238d977c81da72b2817/app/utils/theme-provider.tsx
import React, { createContext, useRef, useState } from "react";
import { useFetcher } from "remix";

enum Theme {
  DARK = "dark",
  LIGHT = "light",
}
const themes: Theme[] = Object.values(Theme);

type ThemeContextType = [
  Theme | null,
  React.Dispatch<React.SetStateAction<Theme | null>>
];
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
ThemeContext.displayName = "ThemeContext";

const prefersLightMQ = "(prefers-color-scheme: light)";
const getPreferredTheme = () =>
  window.matchMedia(prefersLightMQ).matches ? Theme.LIGHT : Theme.DARK;

type ThemeProviderProps = {
  children: React.ReactNode;
  theme: Theme | null;
};
const ThemeProvider = (props: ThemeProviderProps) => {
  const { children, theme } = props;
  const [selectedTheme, setSelectedTheme] = useState<Theme | null>(() => {
    if (theme) {
      if (themes.includes(theme)) {
        return theme;
      } else {
        return null;
      }
    }

    if (typeof window !== "object") {
      return null;
    }

    return getPreferredTheme();
  });

  const persistTheme = useFetcher();
  const persistThemeRef = useRef(persistTheme);
  React.useEffect(() => {
    persistThemeRef.current = persistTheme;
  }, [persistTheme]);

  const mountRun = React.useRef(false);

  React.useEffect(() => {
    if (!mountRun.current) {
      mountRun.current = true;
      return;
    }
    if (!selectedTheme) {
      return;
    }

    persistThemeRef.current.submit(
      { theme: selectedTheme },
      { action: "action/set-theme", method: "post" }
    );
  }, [selectedTheme]);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia(prefersLightMQ);
    const handleChange = () => {
      setSelectedTheme(mediaQuery.matches ? Theme.LIGHT : Theme.DARK);
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <ThemeContext.Provider value={[theme, setSelectedTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};

const clientThemeCode = `
  ;(() => {
    const theme = window.matchMedia(${JSON.stringify(
      prefersLightMQ
    )}).matches ? 'light' ? 'dark';

    const cl = document.documentElement.classList;

    const themeAlreadyApplied = cl.contains('light') || cl.contains('dark');
    if (themeAlreadyApplied) {
      console.warn('Theme already applied');
    } else {
      cl.add(theme);
    }

    const meta = document.querySelector('meta[name=color-scheme]');
    if (meta) {
      if (theme === 'dark') {
        meta.content = 'dark light';
      } else if (theme === 'light) {
        meta.content = 'light dark';
      }
    } else {
      console.log('Something got wrong');
    }
  })();
`;

const handleDarkAndLightModeEls = () => {
  const theme = getPreferredTheme();
  const darkEls = document.querySelectorAll("dark-mode");
  const lightEls = document.querySelectorAll("light-mode");
  for (const darkEl of darkEls) {
    if (theme === "dark") {
      for (const child of darkEl.childNodes) {
        darkEl.parentElement?.append(child);
      }
    }
    darkEl.remove();
  }
};

export { ThemeProvider };

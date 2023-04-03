import { useMemo, useState } from "react";
import { createContext } from "react";

const ThemeContext = createContext({ isDark: true });

const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true);

  const value = useMemo(
    () => ({
      isDark,
      setIsDark,
    }),
    [isDark]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };

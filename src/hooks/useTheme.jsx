import { ThemeContext } from "../helpers/providers/ThemeProvider";
import { useContext } from "react";

const useTheme = () => {
  const value = useContext(ThemeContext);
  return value;
};

export default useTheme;

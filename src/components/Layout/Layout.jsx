import useTheme from "../../hooks/useTheme";
import cn from "classnames";

const Layout = ({ children }) => {
  const { isDark } = useTheme();
  return (
    <div
      className={cn("layout", {
        white: isDark === true,
      })}
    >
      {children}
    </div>
  );
};

export default Layout;

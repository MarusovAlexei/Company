import "./ToggleTheme.scss";
import blackThemeImg from "./../../../assets/image/header/blackThemeImg.png";
import whiteThemeImg from "./../../../assets/image/header/whiteThemeImg.png";
import useTheme from "../../../hooks/useTheme";

const ToggleTheme = () => {
  const { isDark, setIsDark } = useTheme();

  return (
    <div className="header__theme-btn" onClick={() => setIsDark(!isDark)}>
      <img src={blackThemeImg} alt="theme" />
    </div>
  );
};

export default ToggleTheme;

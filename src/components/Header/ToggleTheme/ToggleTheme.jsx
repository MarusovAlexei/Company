import "./ToggleTheme.scss";
import blackThemeImg from "./../../../assets/image/header/blackThemeImg.png";
import whiteThemeImg from "./../../../assets/image/header/whiteThemeImg.png";

const ToggleTheme = () => {
  return (
    <div className="header__theme-btn">
      <img src={blackThemeImg} alt="theme" />
    </div>
  );
};

export default ToggleTheme;

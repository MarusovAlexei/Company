import "./Logo.scss";
import logoImg from "./../../../assets/image/header/logo.png";

const Logo = () => {
  return (
    <>
      <div className="header__logo">
        <div className="header__logo-img">
          <img src={logoImg} alt="logo" />
        </div>
        <div className="header__logo-name">name compony</div>
      </div>
    </>
  );
};

export default Logo;

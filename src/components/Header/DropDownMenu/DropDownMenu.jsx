import "./DropDownMenu.scss";

const DropwnMenu = () => {
  return (
    <>
      <div className="header__language">
        <div className="header__language-text">Language</div>
        <div className="header__language-btn">
          <button className="language__btn-dropdown">english</button>
          <div className="dropdown-content text-menu">russian</div>
          <div className="dropdown-content text-menu">english</div>
        </div>
      </div>
    </>
  );
};

export default DropwnMenu;

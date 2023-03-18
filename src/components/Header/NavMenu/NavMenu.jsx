import "./NavMenu.scss";

const MenuBtn = (props) => {
  return <div className="text-menu">{props.name}</div>;
};

const NavMenu = () => {
  return (
    <>
      <div className="header__menu-nav">
        <MenuBtn name="Main" />
        <MenuBtn name="Map" />
        <MenuBtn name="Contact" />
        <MenuBtn name="About" />
        <MenuBtn name="Partners" />
      </div>
    </>
  );
};

export default NavMenu;

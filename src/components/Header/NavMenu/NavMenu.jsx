import "./NavMenu.scss";

const MenuBtn = (props) => {
  return <div className="text-menu">{props.content}</div>;
};

const NavMenu = () => {
  return (
    <>
      <div className="header__menu-nav">
        <MenuBtn content="Main" />
        <MenuBtn content="Map" />
        <MenuBtn content="Contact" />
        <MenuBtn content="About" />
        <MenuBtn content="Partners" />
      </div>
    </>
  );
};

export default NavMenu;

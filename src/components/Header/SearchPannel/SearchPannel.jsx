import "./SearchPannel.scss";

const SearchPannel = () => {
  return (
    <div className="header__menu-search">
      <input
        className="menu-search"
        type="text"
        placeholder={"enter the name of the residential complex"}
      />
    </div>
  );
};

export default SearchPannel;

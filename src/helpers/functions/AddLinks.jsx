import { Link, NavLink } from "react-router-dom";

const AddLink = (props) => {
  const values = props.value;

  const listItems = values.map((item) => (
    <NavLink
      className={({ isActive }) =>
        isActive ? "text-menu isActive" : "text-menu"
      }
      to={item[1]}
    >
      {item[0]}
    </NavLink>
  ));

  return listItems;
};

export default AddLink;

import { Link } from "react-router-dom";

const AddLink = (props) => {
  const values = props.value;

  const listItems = values.map((item) => (
    <Link className="text-menu" to={item[1]}>
      {item[0]}
    </Link>
  ));

  return listItems;
};

export default AddLink;

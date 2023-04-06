import { Link } from "react-router-dom";

const AddIcon = (props) => {
  const value = props.iconItems;
  const values = value.map((item) => (
    <Link className="social__media-item" to="#">
      {item}
    </Link>
  ));

  return values;
};

export default AddIcon;

import { Link } from "react-router-dom";

const AddLink = (props) => {
  return (
    <Link className="text-menu" to={props.path}>
      {props.content}
    </Link>
  );
};

export default AddLink;

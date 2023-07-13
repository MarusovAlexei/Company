import { Link } from "react-router-dom";

const AddCountry = (props) => {
  const values = props.value;
  const country = values.map((item) => (
    <Link className="map-item" to={item[2]} state={{ name: item[0] }}>
      <div className="map-item_contry-header">{item[0]}</div>
      <img className="map-item_contry-img" src={item[1]} alt={item[0]} />
    </Link>
  ));
  return country;
};

export default AddCountry;

import { Link } from "react-router-dom";

const AddCityOnMap = (props) => {
  const values = props.value;
  const itemClass = `city-container`;

  const cities = values.map((item) => (
    <div className={item[0] + " " + itemClass}>
      <Link className="city-point" to={item[2]}></Link>
      <div className="city-text">{item[1]}</div>
    </div>
  ));
  return cities;
};

export default AddCityOnMap;

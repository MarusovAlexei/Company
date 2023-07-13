import { Link } from "react-router-dom";

const AddCompanyInCity = (props) => {
  const values = props.value;

  const companies = values.map((item) => (
    <Link
      className="company__item"
      style={{ backgroundImage: `url(${item[2]})` }}
      to={item[1]}
    >
      <div className="company__item-overley"></div>
      <div className="company__item-header">{item[0]}</div>
    </Link>
  ));

  return companies;
};

export default AddCompanyInCity;

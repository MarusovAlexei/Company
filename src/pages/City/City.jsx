import "./City.scss";

import { Link, useLocation } from "react-router-dom";
import ChangeСityСompanies from "../../base/city/BaseCity";

const Company = () => {
  const city = useLocation().pathname.split("/").pop();

  // The name of the city from state Link
  const location = useLocation();
  const { name } = location.state;

  return (
    <div className="company">
      <div className="company__container">
        <h2 className="company__header">{name}</h2>
        <div className="company__items">
          <ChangeСityСompanies city={city} />
        </div>
        <div className="country__btns">
          <Link className="company__btn" to={"/"}>
            back to map
          </Link>
          <Link className="company__btn" to={"/"}>
            back to country
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Company;

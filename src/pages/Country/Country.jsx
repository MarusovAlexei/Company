import "./Country.scss";
import { Link, useLocation } from "react-router-dom";
import Belarus from "./../../assets/image/map/Belarus.png";
import Russia from "./../../assets/image/map/Russia.png";
import Azerbaijan from "./../../assets/image/map/Azerbaijan.png";
import Cyprus from "./../../assets/image/map/Cyprus.png";
import Georgia from "./../../assets/image/map/Georgia.png";
import Turkey from "./../../assets/image/map/Turkey.png";
import UAE from "./../../assets/image/map/UAE.png";

import RussiaLocation from "./LocationCity/Russia";
import ChangeLocation from "./LocationCity/ChangeLocation";

const Country = () => {
  const country = useLocation().pathname.substring(1);
  const countyes = [
    { img: Belarus, country: "Belarus" },
    { img: Russia, country: "Russia" },
    { img: Azerbaijan, country: "Azerbaijan" },
    { img: Cyprus, country: "Cyprus" },
    { img: Georgia, country: "Georgia" },
    { img: Turkey, country: "Turkey" },
    { img: UAE, country: "UAE" },
  ];

  const targetCountry = countyes.map((elem) => {
    if (elem.country === country) {
      return elem.img;
    }
  });

  return (
    <div className="country">
      <div className="country__container">
        <h2 className="country__header">{country}</h2>
        <ChangeLocation userChange={country} />
        <img src={targetCountry.join("")} alt="country" />
        <div className="country__btns">
          <Link className="country__btn" to={"/"}>
            back to map
          </Link>
          <Link className="country__btn" to={`/${country}/City`}>
            to city
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Country;

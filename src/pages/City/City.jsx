import "./City.scss";
import { Link, useLocation } from "react-router-dom";
import Geolocations from "../Main/Geolocations/Geolocations";

const City = () => {
  const country = useLocation().pathname.substring(1);

  return (
    <div className="city">
      <div className="city__container">
        <h2 className="city__header">{country}</h2>
        <div className="city__content">
          <div className="city__content-slider-intro"></div>
          <div className="city__content-block">
            <div className="city__block-img"></div>
            <div className="city__block-descrition">
              <h3>TEXT</h3>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                voluptate dicta nesciunt odit ex minima voluptatem possimus
                blanditiis recusandae optio expedita sequi, harum beatae quo sit
                cum natus cumque reprehenderit. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Amet voluptate dicta nesciunt odit
                ex minima voluptatem possimus blanditiis recusandae optio
                expedita sequi, harum beatae quo sit cum natus cumque
                reprehenderit. Ex minima voluptatem possimus blanditiis
                recusandae optio expedita sequi, harum beatae quo sit cum natus
                cumque reprehenderit.
              </div>
            </div>
          </div>
          <div className="city__content-block-rev">
            <div className="city__block-img"></div>
            <div className="city__block-descrition">
              <h3>TEXT</h3>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                voluptate dicta nesciunt odit ex minima voluptatem possimus
                blanditiis recusandae optio expedita sequi, harum beatae quo sit
                cum natus cumque reprehenderit. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Amet voluptate dicta nesciunt odit
                ex minima voluptatem possimus blanditiis recusandae optio
                expedita sequi, harum beatae quo sit cum natus cumque
                reprehenderit. Ex minima voluptatem possimus blanditiis
                recusandae optio expedita sequi, harum beatae quo sit cum natus
                cumque reprehenderit.
              </div>
            </div>
          </div>
          <div className="city__content-block">
            <div className="city__block-img"></div>
            <div className="city__block-descrition">
              <h3>TEXT</h3>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                voluptate dicta nesciunt odit ex minima voluptatem possimus
                blanditiis recusandae optio expedita sequi, harum beatae quo sit
                cum natus cumque reprehenderit. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Amet voluptate dicta nesciunt odit
                ex minima voluptatem possimus blanditiis recusandae optio
                expedita sequi, harum beatae quo sit cum natus cumque
                reprehenderit. Ex minima voluptatem possimus blanditiis
                recusandae optio expedita sequi, harum beatae quo sit cum natus
                cumque reprehenderit.
              </div>
            </div>
          </div>
          <div className="city__content-slider-layout"></div>
        </div>
        <div className="city__btns">
          <Link className="country__btn" to={"/"}>
            back to map
          </Link>
          <Link className="country__btn" to={"/"}>
            to city
          </Link>
        </div>
        <Geolocations />
      </div>
    </div>
  );
};

export default City;

import "./Map.scss";

import Belarus from "./../../../assets/image/map/Belarus.png";
import Russia from "./../../../assets/image/map/Russia.png";
import Azerbaijan from "./../../../assets/image/map/Azerbaijan.png";
import Cyprus from "./../../../assets/image/map/Cyprus.png";
import Georgia from "./../../../assets/image/map/Georgia.png";
import Turkey from "./../../../assets/image/map/Turkey.png";
import UAE from "./../../../assets/image/map/UAE.png";

import AddCountry from "../../../helpers/functions/AddCountry";

import { useTranslation } from "react-i18next";

const Map = () => {
  const { t, i18n } = useTranslation();

  const countryItems = [
    [t("map.Belarus"), Belarus],
    [t("map.Russia"), Russia],
    [t("map.Georgia"), Georgia],
    [t("map.Azerbaijan"), Azerbaijan],
    [t("map.UAE"), UAE],
    [t("map.Turkey"), Turkey],
    [t("map.Cyprus"), Cyprus],
  ];

  return (
    <section className="map">
      <div className="map__container">
        <h2 className="map-header">{t("map.header")}</h2>
        <div className="map-items">
          <AddCountry value={countryItems} />
        </div>
      </div>
    </section>
  );
};

export default Map;

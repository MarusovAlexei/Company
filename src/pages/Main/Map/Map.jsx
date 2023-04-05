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

  return (
    <>
      <section className="map">
        <div className="map__container">
          <h2 className="map-header">CHOOSE THE COUNTRY</h2>
          <div className="map-items">
            <AddCountry header={t("map.Belarus")} img={Belarus} />
            <AddCountry header={t("map.Russia")} img={Russia} />
            <AddCountry header={t("map.Georgia")} img={Georgia} />
            <AddCountry header={t("map.Azerbaijan")} img={Azerbaijan} />
            <AddCountry header={t("map.UAE")} img={UAE} />
            <AddCountry header={t("map.Turkey")} img={Turkey} />
            <AddCountry header={t("map.Cyprus")} img={Cyprus} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Map;

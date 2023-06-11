import { useTranslation } from "react-i18next";
import "./Geolocations.scss";

const Geolocations = () => {
  const { t, i18n } = useTranslation();

  return (
    <section className="location">
      <div className="location__container">
        <h2 className="location-header">{t("location.header")}</h2>
        <iframe
          className="location-map"
          src="https://yandex.ru/map-widget/v1/?um=constructor%3Ac1eb8a37ae091b5d1351555e7a481eda5743b403485a2b41e72b4f8bbd305eda&amp;source=constructor"
          width="100%"
          height="300"
          frameborder="0"
        ></iframe>
      </div>
    </section>
  );
};

export default Geolocations;

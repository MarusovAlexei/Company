import "./Intro.scss";
import { useTranslation } from "react-i18next";

const Intro = () => {
  const { t, i18n } = useTranslation();

  return (
    <section className="intro">
      <div className="intro__container">
        <div className="intro-content">
          <h3>{t("intro.header")}</h3>
          <button
            className="intro-btn"
            onClick={() => {
              alert("Здесь будет форма обратной связи");
            }}
          >
            {t("intro.btn")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Intro;

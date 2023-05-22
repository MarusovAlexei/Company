import "./Intro.scss";
import PopUp from "../../../components/PopUp/PopUp";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const Intro = () => {
  const { t, i18n } = useTranslation();
  const [popupActive, setPopupActive] = useState(false);
  return (
    <section className="intro">
      <div className="intro__container">
        <div className="intro-content">
          <h3>{t("intro.header")}</h3>
          <button
            className="intro-btn"
            onClick={() => {
              setPopupActive(!popupActive);
            }}
          >
            {t("intro.btn")}
          </button>
        </div>
      </div>
      <PopUp active={popupActive} setActive={setPopupActive} />
    </section>
  );
};

export default Intro;

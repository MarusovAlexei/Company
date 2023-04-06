import "./Addresses";
import AddList from "../../../helpers/functions/AddList";
import { useTranslation } from "react-i18next";

const Addresses = () => {
  const { t, i18n } = useTranslation();

  const addressItems = [
    t("footer.address.Minsk"),
    t("footer.address.Mogilev"),
    t("footer.address.Moscow"),
  ];

  return (
    <div className="footer__blocks-addresses">
      <h3>{t("footer.address.header")}</h3>
      <AddList items={addressItems} class={"footer__list"} />
    </div>
  );
};

export default Addresses;

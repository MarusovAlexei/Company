import "./Numbers";
import AddList from "../../../helpers/functions/AddList";
import { useTranslation } from "react-i18next";

const Numbers = () => {
  const { t, i18n } = useTranslation();

  const telephones = [
    "+376(22)2222222",
    "+376(22)2222222",
    "+376(22)2222222",
    "+376(22)2222222",
  ];

  return (
    <div className="footer__blocks-contacts">
      <h3>{t("footer.telephones.header")}</h3>
      <AddList items={telephones} class={"footer__list list-center"} />
    </div>
  );
};

export default Numbers;

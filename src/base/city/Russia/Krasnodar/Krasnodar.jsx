import AddCompanyInCity from "../../../../helpers/functions/AddCompanyInCity";

import avrora from "./../../Russia/Krasnodar/img/Avrora.jpg";
import director from "./../../Russia/Krasnodar/img/Director.jpg";
import fresh from "./../../Russia/Krasnodar/img/Fresh.jpg";
import grandPlace from "./../../Russia/Krasnodar/img/GrandPlace.jpg";
import novella from "./../../Russia/Krasnodar/img/Novella.jpg";
import royal from "./../../Russia/Krasnodar/img/Royal.jpg";
import sky from "./../../Russia/Krasnodar/img/Sky.jpg";
import smorodina from "./../../Russia/Krasnodar/img/Smorodina.jpg";
import ural from "./../../Russia/Krasnodar/img/Ural.jpg";
import zelenodar from "./../../Russia/Krasnodar/img/Zelenodar.jpg";

const KrasnodarCompany = () => {
  const base = [
    ["Аврора", "/Russia/Krasnodar/Avrora", avrora],
    ["Режиссер", "/Russia/Krasnodar/Director", director],
    ["Фреш", "/Russia/Krasnodar/Fresh", fresh],
    ["Grand Palace", "/Russia/Krasnodar/GrandPlace", grandPlace],
    ["Новелла", "/Russia/Krasnodar/Novella", novella],
    ["Роял Клиф", "/Russia/Krasnodar/Royal", royal],
    ["Небо", "/Russia/Krasnodar/Sky", sky],
    ["Смородина", "/Russia/Krasnodar/Smorodina", smorodina],
    ["Урал", "/Russia/Krasnodar/Ural", ural],
    ["Зеленодар", "/Russia/Krasnodar/Zelenodar", zelenodar],
  ];

  return <AddCompanyInCity value={base} />;
};

export default KrasnodarCompany;

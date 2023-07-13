import AddCompanyInCity from "../../../../helpers/functions/AddCompanyInCity";

import ardem11 from "./img/Ardem11.jpg";
import ardem12 from "./img/Ardem12.jpeg";
import avangartPrime from "./img/AvangartPrime.jpeg";

const KireniaCompany = () => {
  const base = [
    ["Ardem 11", "/NorthernCyprus/Kirenia/Ardem11", ardem11],
    ["Ardem 12", "/NorthernCyprus/Kirenia/Ardem12", ardem12],
    ["Avangart Prime", "/NorthernCyprus/Kirenia/AvangartPrime", avangartPrime],
  ];

  return <AddCompanyInCity value={base} />;
};

export default KireniaCompany;

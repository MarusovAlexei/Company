import AddCompanyInCity from "../../../../helpers/functions/AddCompanyInCity";

import auralux from "./img/Auralux.jpg";
import neoResidence from "./img/NeoResidence.jpg";

const FamagustaCompany = () => {
  const base = [
    ["Auralux", "/NorthernCyprus/Famagusta/Auralux", auralux],
    ["Neo Residence", "/NorthernCyprus/Famagusta/NeoResidence", neoResidence],
  ];

  return <AddCompanyInCity value={base} />;
};

export default FamagustaCompany;

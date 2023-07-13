import AddCompanyInCity from "../../../../helpers/functions/AddCompanyInCity";

import avanta from "./../../Russia/Anapa/img/Avanta.jpg";

const AnapaCompany = () => {
  const base = [["Аванта", "/Russia/Anapa/Avanta", avanta]];

  return <AddCompanyInCity value={base} />;
};

export default AnapaCompany;

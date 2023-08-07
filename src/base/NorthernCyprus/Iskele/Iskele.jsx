import AddCompanyInCity from "../../../helpers/functions/AddCompanyInCity";

import terraGarden from "./img/TerraGarden.jpg";
import terraLife from "./img/TerraLife.jpg";

const IskeleCompany = () => {
  const base = [
    ["Terra Garden", "/NorthernCyprus/Iskele/TerraGarden", terraGarden],
    ["Terra Life", "/NorthernCyprus/Iskele/TerraLife", terraLife],
  ];

  return <AddCompanyInCity value={base} />;
};

export default IskeleCompany;

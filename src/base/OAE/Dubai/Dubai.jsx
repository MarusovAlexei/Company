import AddCompanyInCity from "../../../helpers/functions/AddCompanyInCity";

import amber from "./img/Amber.jpg";
import burjBinghatti from "./img/BurjBinghatti.jpg";
import fashionz from "./img/Fashionz.jpg";
import venus from "./img/Venus.jpg";

const DubaiCompany = () => {
  const base = [
    ["Amber", "/OAE/Dubai/Amber", amber],
    ["Burj Binghatti", "/OAE/Dubai/BurjBinghatti", burjBinghatti],
    ["Fashionz", "/OAE/Dubai/Fashionz", fashionz],
    ["Venus", "/OAE/Dubai/Venus", venus],
  ];

  return <AddCompanyInCity value={base} />;
};

export default DubaiCompany;

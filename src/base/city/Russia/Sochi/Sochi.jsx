import AddCompanyInCity from "../../../../helpers/functions/AddCompanyInCity";

import lakes from "./../../Russia/Sochi/img/Lakes.jpg";
import letniy from "./../../Russia/Sochi/img/Letniy.jpg";
import mountains from "./../../Russia/Sochi/img/Mountains.jpg";
import oxygen from "./../../Russia/Sochi/img/Oxygen.jpg";

const SochiCompany = () => {
  const base = [
    ["Министерские озера", "/Belarus/Minsk/Lakes", lakes],
    ["Летний", "/Belarus/Minsk/Letniy", letniy],
    ["Горный квартал", "/Belarus/Minsk/Mountains", mountains],
    ["Кислород", "/Belarus/Minsk/Oxygen", oxygen],
  ];

  return <AddCompanyInCity value={base} />;
};

export default SochiCompany;

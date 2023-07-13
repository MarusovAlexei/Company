import AddCompanyInCity from "../../../../helpers/functions/AddCompanyInCity";

import item1 from "./../../Belarus/Minsk/img/1.jpeg";
import item2 from "./../../Belarus/Minsk/img/2.jpeg";
import item3 from "./../../Belarus/Minsk/img/3.jpg";

const SaintPetersburgCompany = () => {
  const base = [
    ["temp1", "/Belarus/Minsk/Temp", item1],
    ["temp2", "/Belarus/Minsk/Temp", item2],
    ["temp3", "/Belarus/Minsk/Temp", item3],
  ];

  return <AddCompanyInCity value={base} />;
};

export default SaintPetersburgCompany;

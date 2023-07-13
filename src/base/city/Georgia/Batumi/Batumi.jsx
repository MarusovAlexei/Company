import AddCompanyInCity from "../../../../helpers/functions/AddCompanyInCity";

import allianceCentropolis from "./img/AllianceCentropolis.jpg";
import alliancePrivilege from "./img/AlliancePrivilege.jpg";
import boulevardPoint from "./img/BoulevardPoint.jpeg";
import gumbatiResidence from "./img/GumbatiResidence.jpeg";
import portline from "./img/Portline.jpg";
import compactHouse from "./img/CompactHouse.jpg";
import marinaClub from "./img/MarinaClub.jpg";
import optimaResidence from "./img/OptimaResidence.jpg";

const BatumiCompany = () => {
  const base = [
    [
      "Alliance Centropolis",
      "/Georgia/Batumi/AllianceCentropolis",
      allianceCentropolis,
    ],
    [
      "Alliance Privilege",
      "/Georgia/Batumi/AlliancePrivilege",
      alliancePrivilege,
    ],
    ["Boulevard Point", "/Georgia/Batumi/BoulevardPoint", boulevardPoint],
    ["Gumbati Residence", "/Georgia/Batumi/GumbatiResidence", gumbatiResidence],
    ["Portline", "/Georgia/Batumi/Portline", portline],
    ["Compact House", "/Georgia/Batumi/CompactHouse", compactHouse],
    ["Marina Club", "/Georgia/Batumi/MarinaClub", marinaClub],
    ["OptimaResidence", "/Georgia/Batumi/OptimaResidence", optimaResidence],
  ];

  return <AddCompanyInCity value={base} />;
};

export default BatumiCompany;

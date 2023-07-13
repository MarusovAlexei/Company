import AddCompanyInCity from "../../../../helpers/functions/AddCompanyInCity";

import babylonBeachResort from "./img/BabylonBeachResort.jpg";
import bahamasHomes from "./img/BahamasHomes.jpg";
import hawaiiHomes from "./img/HawaiiHomes.png";
import idyllHomes from "./img/IdyllHomes.jpg";
import maldivesHomes from "./img/MaldivesHomes.jpg";
import moonlightVillas from "./img/MoonlightVillas.jpeg";
import mykonosHomes from "./img/MykonosHomes.jpg";
import pearlIslandHomes from "./img/PearlIslandHomes.jpg";
import phuketHealthAndWellnessResort from "./img/PhuketHealthAndWellnessResort.jpg";

const EsentepeCompany = () => {
  const base = [
    [
      "Babylon Beach Resort",
      "/NorthernCyprus/Esentepe/BabylonBeachResort",
      babylonBeachResort,
    ],
    ["Bahamas Homes", "/NorthernCyprus/Esentepe/BahamasHomes", bahamasHomes],
    ["Hawaii Homes", "/NorthernCyprus/Esentepe/HawaiiHomes", hawaiiHomes],
    ["Idyll Homes", "/NorthernCyprus/Esentepe/IdyllHomes", idyllHomes],
    ["Maldives Homes", "/NorthernCyprus/Esentepe/MaldivesHomes", maldivesHomes],
    [
      "Moonlight Villas",
      "/NorthernCyprus/Esentepe/MoonlightVillas",
      moonlightVillas,
    ],
    ["Mykonos Homes", "/NorthernCyprus/Esentepe/MykonosHomes", mykonosHomes],
    [
      "Pearl Island Homes",
      "/NorthernCyprus/Esentepe/Pearl Island Homes",
      pearlIslandHomes,
    ],
    [
      "Phuket Health And Wellness Resort",
      "/NorthernCyprus/Esentepe/PhuketHealthAndWellnessResort",
      phuketHealthAndWellnessResort,
    ],
  ];

  return <AddCompanyInCity value={base} />;
};

export default EsentepeCompany;

import AddCompanyInCity from "../../../helpers/functions/AddCompanyInCity";

import appleGarden from "./img/AppleGarden.jpg";
import jasminePark from "./img/JasminePark.jpg";
import milanoResidence from "./img/MilanoResidence.jpg";
import novaGarden from "./img/NovaGarden.jpg";
import obaLotusGarden from "./img/ObaLotusGarden.jpg";
import obaParkHillResidence from "./img/ObaParkHillResidence.jpeg";
import obaParkKornera from "./img/ObaParkKorner.jpg";
import obaParkPoint from "./img/ObaParkPoint.jpeg";
import obaVoyageDelux from "./img/ObaVoyageDelux.jpg";
import paradiseVillas from "./img/ParadiseVillas.jpg";
import qiwiGarden from "./img/QiwiGarden.jpg";
import riverPanorama from "./img/RiverPanorama.jpg";
import skylineResidence from "./img/SkylineResidence.jpg";
import sunray from "./img/Sunray.jpg";
import victoriaVillas from "./img/VictoriaVillas.jpg";

const AlanyaCompany = () => {
  const base = [
    ["Apple Garden", "/Turkey/Alanya/AppleGarden", appleGarden],
    ["Jasmine Park", "/Turkey/Alanya/JasminePark", jasminePark],
    ["Milano Residence", "/Turkey/Alanya/MilanoResidence", milanoResidence],
    ["Nova Garden", "/Turkey/Alanya/NovaGarden", novaGarden],
    ["Oba Lotus Garden", "/Turkey/Alanya/ObaLotusGarden", obaLotusGarden],
    [
      "Oba Park Hill Residence",
      "/Turkey/Alanya/ObaParkHillResidence",
      obaParkHillResidence,
    ],
    ["Oba Park Korner", "/Turkey/Alanya/ObaParkKorner", obaParkKornera],
    ["Oba Park Point", "/Turkey/Alanya/ObaParkPoint", obaParkPoint],
    ["Oba Voyage Delux", "/Turkey/Alanya/ObaVoyageDelux", obaVoyageDelux],
    ["Paradise Villas", "/Turkey/Alanya/ParadiseVillas", paradiseVillas],
    ["Qiwi Garden", "/Turkey/Alanya/QiwiGarden", qiwiGarden],
    ["River Panorama", "/Turkey/Alanya/RiverPanorama", riverPanorama],
    ["Skyline Residence", "/Turkey/Alanya/SkylineResidence", skylineResidence],
    ["Sunray", "/Turkey/Alanya/Sunray", sunray],
    ["Victoria Villas", "/Turkey/Alanya/VictoriaVillas", victoriaVillas],
  ];

  return <AddCompanyInCity value={base} />;
};

export default AlanyaCompany;

import AddCompanyInCity from "../../../helpers/functions/AddCompanyInCity";

import centerTarsus from "./img/CenterTarsus.jpeg";
import eagleTerrace from "./img/EagleTerrace.jpg";
import elexus from "./img/Elexus.png";
import barajKonutlari from "./img/BarajKonutlari.jpg";
import evim from "./img/Evim.jpg";
import flora from "./img/Flora.jpg";
import lemon from "./img/Lemon.jpg";
import marshall from "./img/Marshall.jpg";
import miami from "./img/Miami.jpg";
import oniks from "./img/Oniks.jpg";
import panoramaIcon from "./img/PanoramaIcon.jpg";
import panoramaPlus from "./img/PanoramaPlus.jpg";
import rio from "./img/Rio.jpeg";
import royalTeracce from "./img/RoyalTeracce.jpg";
import silver from "./img/Silver.jpg";
import tecePanorama from "./img/TecePanorama.jpg";
import vega129 from "./img/Vega129.jpg";
import vipPanorama from "./img/VipPanorama.jpeg";

const MersinCompany = () => {
  const base = [
    ["Center Tarsus", "/Turkey/Mersin/CenterTarsus", centerTarsus],
    ["Eagle Terrace", "/Turkey/Mersin/EagleTerrace", eagleTerrace],
    ["Elexus", "/Turkey/Mersin/Elexus", elexus],
    ["Baraj Konutlari", "/Turkey/Mersin/BarajKonutlari", barajKonutlari],
    ["Evim", "/Turkey/Mersin/Evim", evim],
    ["Flora", "/Turkey/Mersin/Flora", flora],
    ["Lemon", "/Turkey/Mersin/Lemon", lemon],
    ["Marshall", "/Turkey/Mersin/Marshall", marshall],
    ["Miami", "/Turkey/Mersin/Miami", miami],
    ["Oniks", "/Turkey/Mersin/Oniks", oniks],
    ["Panorama Icon", "/Turkey/Mersin/PanoramaIcon", panoramaIcon],
    ["Panorama Plus", "/Turkey/Mersin/PanoramaPlus", panoramaPlus],
    ["Rio", "/Turkey/Mersin/Rio", rio],
    ["Royal Teracce", "/Turkey/Mersin/RoyalTeracce", royalTeracce],
    ["Silver", "/Turkey/Mersin/Silver", silver],
    ["Tece Panorama", "/Turkey/Mersin/TecePanorama", tecePanorama],
    ["Vega129", "/Turkey/Mersin/Vega129", vega129],
    ["Vip Panorama", "/Turkey/Mersin/VipPanorama", vipPanorama],
  ];

  return <AddCompanyInCity value={base} />;
};

export default MersinCompany;

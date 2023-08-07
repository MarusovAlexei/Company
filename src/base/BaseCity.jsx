// Belarus
import MinskCompany from "./Belarus/Minsk/Minsk";

// Russia
import KrasnodarCompany from "./Russia/Krasnodar/Krasnodar";
import AnapaCompany from "./Russia/Anapa/Anapa";
import MoscowCompany from "./Russia/Moscow/Moscow";
import SaintPetersburgCompany from "./Russia/SaintPetersburg/SaintPetersburg";
import SochiCompany from "./Russia/Sochi/Sochi";

// Turkey
import AlanyaCompany from "./Turkey/Alanya/Alanya";
import MersinCompany from "./Turkey/Mersin/Mersin";

// Gergia
import BatumiCompany from "./Georgia/Batumi/Batumi";

// Cyprus
import EsentepeCompany from "./NorthernCyprus/Esentepe/Esentepe";
import FamagustaCompany from "./NorthernCyprus/Famagusta/Famagusta";
import IskeleCompany from "./NorthernCyprus/Iskele/Iskele";
import KireniaCompany from "./NorthernCyprus/Kirenia/Kirenia";

// OAE
import DubaiCompany from "./OAE/Dubai/Dubai";

const ChangeСityСompanies = (props) => {
  const userChange = props.city;

  switch (userChange) {
    // Belarus
    case "Minsk":
      return <MinskCompany />;
    // Russia
    case "Krasnodar":
      return <KrasnodarCompany />;
    case "Anapa":
      return <AnapaCompany />;
    case "Moscow":
      return <MoscowCompany />;
    case "SaintPetersburg":
      return <SaintPetersburgCompany />;
    case "Sochi":
      return <SochiCompany />;
    // Turkey
    case "Alanya":
      return <AlanyaCompany />;
    case "Mersin":
      return <MersinCompany />;
    // Gergia
    case "Batumi":
      return <BatumiCompany />;
    // Cyprus
    case "Esentepe":
      return <EsentepeCompany />;
    case "Famagusta":
      return <FamagustaCompany />;
    case "Iskele":
      return <IskeleCompany />;
    case "Kirenia":
      return <KireniaCompany />;
    // OAE
    case "Dubai":
      return <DubaiCompany />;
  }
};

export default ChangeСityСompanies;

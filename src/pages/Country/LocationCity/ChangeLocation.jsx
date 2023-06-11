import RussiaLocation from "./Russia";
import BelarusLocation from "./Belarus";
import GeorgiaLocation from "./Georgia";
import UAELocation from "./UAE";
import TurkeyLocation from "./Turkey";
import AzerbaijanLocation from "./Azerbaijan";
import CyprusLocation from "./Cyprus";

const ChangeLocation = (props) => {
  const userChange = props.userChange;

  switch (userChange) {
    case "Russia":
      return <RussiaLocation />;
    case "Belarus":
      return <BelarusLocation />;
    case "Georgia":
      return <GeorgiaLocation />;
    case "UAE":
      return <UAELocation />;
    case "Turkey":
      return <TurkeyLocation />;
    case "Azerbaijan":
      return <AzerbaijanLocation />;
    case "Cyprus":
      return <CyprusLocation />;
  }
};

export default ChangeLocation;

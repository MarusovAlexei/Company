import "./LocationCity.scss";
import AddCityOnMap from "../../../helpers/functions/AddCityOnMap";

const CyprusLocation = () => {
  const cyprusCities = [
    ["famagusta", "Famagusta", "Famagusta"],
    ["esentepe", "Esentepe", "Esentepe"],
    ["lapta", "Lapta", "Lapta"],
    ["guzelyurt", "Guzelyurt", "Guzelyurt"],
    ["iskele", "Iskele", "Iskele"],
    ["lefke", "Lefke", "Lefke"],
    ["dipkarpaz", "Dipkarpaz", "Dipkarpaz"],
    ["akalsinjak", "Akalsinjak", "Akalsinjak"],
    ["kirenia", "Kirenia", "Kirenia"],
  ];

  return (
    <div className="cyprus country-position">
      <AddCityOnMap value={cyprusCities} />
    </div>
  );
};

export default CyprusLocation;

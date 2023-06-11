import "./LocationCity.scss";
import AddCityOnMap from "../../../helpers/functions/AddCityOnMap";

const CyprusLocation = () => {
  const cyprusCities = [["baki", "Baki", "/"]];

  return (
    <div className="cyprus country-position">
      <AddCityOnMap value={cyprusCities} />
    </div>
  );
};

export default CyprusLocation;

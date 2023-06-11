import "./LocationCity.scss";
import AddCityOnMap from "../../../helpers/functions/AddCityOnMap";

const AzerbaijanLocation = () => {
  const azerbaijanCities = [["baki", "Baki", "/"]];

  return (
    <div className="azerbaijan country-position">
      <AddCityOnMap value={azerbaijanCities} />
    </div>
  );
};

export default AzerbaijanLocation;

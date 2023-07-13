import "./LocationCity.scss";
import AddCityOnMap from "../../../helpers/functions/AddCityOnMap";

const BelarusLocation = () => {
  const belarusCities = [["minsk", "Minsk", "Minsk"]];

  return (
    <div className="belarus country-position">
      <AddCityOnMap value={belarusCities} />
    </div>
  );
};

export default BelarusLocation;

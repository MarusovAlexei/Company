import "./LocationCity.scss";
import AddCityOnMap from "../../../helpers/functions/AddCityOnMap";

const GeorgiaLocation = () => {
  const georgiaCities = [
    ["tbilisi", "Tbilisi", "Tbilisi"],
    ["batumi", "Batumi", "Batumi"],
  ];

  return (
    <div className="georgia country-position">
      <AddCityOnMap value={georgiaCities} />
    </div>
  );
};

export default GeorgiaLocation;

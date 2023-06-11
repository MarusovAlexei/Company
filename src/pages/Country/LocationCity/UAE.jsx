import "./LocationCity.scss";
import AddCityOnMap from "../../../helpers/functions/AddCityOnMap";

const UAELocation = () => {
  const UaeCities = [
    ["dubai", "Dubai", "/"],
    ["ras-al-khaimah", "Ras Al Khaimah", "/"],
  ];

  return (
    <div className="uae country-position">
      <AddCityOnMap value={UaeCities} />
    </div>
  );
};

export default UAELocation;

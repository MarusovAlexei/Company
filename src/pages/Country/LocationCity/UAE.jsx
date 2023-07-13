import "./LocationCity.scss";
import AddCityOnMap from "../../../helpers/functions/AddCityOnMap";

const UAELocation = () => {
  const UaeCities = [
    ["dubai", "Dubai", "Dubai"],
    ["ras-al-khaimah", "Ras Al Khaimah", "RasAlKhaimah"],
  ];

  return (
    <div className="uae country-position">
      <AddCityOnMap value={UaeCities} />
    </div>
  );
};

export default UAELocation;

import "./LocationCity.scss";
import AddCityOnMap from "../../../helpers/functions/AddCityOnMap";

const RussiaLocation = () => {
  const russiaCities = [
    ["moscow", "Moscow", "/"],
    ["krasnodar", "Krasnodar", "/"],
    ["spb", "Saint Petersburg", "/"],
    ["sochi", "Sochi", "/"],
    ["anapa", "Anapa", "/"],
  ];

  return (
    <div className="russia country-position">
      <AddCityOnMap value={russiaCities} />
    </div>
  );
};

export default RussiaLocation;

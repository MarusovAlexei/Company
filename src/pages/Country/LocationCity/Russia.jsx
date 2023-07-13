import "./LocationCity.scss";
import AddCityOnMap from "../../../helpers/functions/AddCityOnMap";

const RussiaLocation = () => {
  const russiaCities = [
    ["moscow", "Moscow", "Moscow"],
    ["krasnodar", "Krasnodar", "Krasnodar"],
    ["spb", "Saint Petersburg", "SaintPetersburg"],
    ["sochi", "Sochi", "Sochi"],
    ["anapa", "Anapa", "Anapa"],
  ];

  return (
    <div className="russia country-position">
      <AddCityOnMap value={russiaCities} />
    </div>
  );
};

export default RussiaLocation;

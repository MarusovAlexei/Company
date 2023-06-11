import "./LocationCity.scss";
import AddCityOnMap from "../../../helpers/functions/AddCityOnMap";

const TurkeyLocation = () => {
  const turkeyCities = [
    ["stambul", "Stambul", "/"],
    ["mersin", "Mersin", "/"],
    ["antalya", "Antalya", "/"],
    ["alanya", "Alanya", "/"],
  ];

  return (
    <div className="turkey country-position">
      <AddCityOnMap value={turkeyCities} />
    </div>
  );
};

export default TurkeyLocation;

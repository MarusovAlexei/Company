import "./LocationCity.scss";
import AddCityOnMap from "../../../helpers/functions/AddCityOnMap";

const TurkeyLocation = () => {
  const turkeyCities = [
    ["stambul", "Stambul", "Stambul"],
    ["mersin", "Mersin", "Mersin"],
    ["antalya", "Antalya", "Antalya"],
    ["alanya", "Alanya", "Alanya"],
  ];

  return (
    <div className="turkey country-position">
      <AddCityOnMap value={turkeyCities} />
    </div>
  );
};

export default TurkeyLocation;

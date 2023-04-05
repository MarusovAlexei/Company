import "./Main.scss";
import Intro from "./Intro/Intro";
import Map from "./Map/Map";
import Geolocations from "./Geolocations/Geolocations";

const Main = () => {
  return (
    <section>
      <Intro />
      <Map />
      <Geolocations />
    </section>
  );
};

export default Main;

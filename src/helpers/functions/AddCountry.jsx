const AddCountry = (props) => {
  const values = props.value;
  const country = values.map((item) => (
    <div className="map-item">
      <div className="map-item_contry-header">{item[0]}</div>
      <img className="map-item_contry-img" src={item[1]} alt={item[0]} />
    </div>
  ));
  return country;
};

export default AddCountry;

const AddCountry = (props) => {
  return (
    <div className="map-item">
      <div className="map-item_contry-header">{props.header}</div>
      <img className="map-item_contry-img" src={props.img} alt={props.header} />
    </div>
  );
};

export default AddCountry;

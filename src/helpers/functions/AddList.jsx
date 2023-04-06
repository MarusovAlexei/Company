const AddList = (props) => {
  const value = props.items;
  const values = value.map((item) => <li>{item}</li>);

  return <ul className={props.class}>{values}</ul>;
};

export default AddList;

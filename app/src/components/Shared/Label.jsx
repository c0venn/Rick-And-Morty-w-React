import './Label.css'

const Label = (props) => {
  return (
    <div className="lobel">
      <div className="label mx-2">
        <h1>{props.label}</h1>
      </div>
      <div className="value mx-2" >
        <h2>{props.value}</h2>
      </div>
    </div>
  );
};

export default Label;

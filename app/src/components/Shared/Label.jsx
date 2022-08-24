import './Label.css'

const Label = (props) => {
  return (
    <div className="lobel row">
      <div className="label mx-2 col-xs-12 col-md-6">
        <h1>{props.label}</h1>
      </div>
      <div className="value mx-2 col-xs-12 col-md-6" >
        <h2>{props.value}</h2>
      </div>
    </div>
  );
};

export default Label;

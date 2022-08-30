import './Label.css'

const Label = (props) => {
  return (
    <div className="lobel row align-items-baseline text-center text-md-start">
      <div className="label col-xs-12 col-md-6 ">
        <h1>{props.label}</h1>
      </div>
      <div className="value text-truncate col-xs-12 col-md-6" >
        <h2>{props.value}</h2>
      </div>
    </div>
  );
};

export default Label;

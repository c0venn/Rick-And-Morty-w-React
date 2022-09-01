import './Label.css'

const Label = (props) => {
  return (
    <div className="lobel align-items-baseline d-md-flex ">
      <div className="mx-2  ">
        <h1>{props.label}</h1>
      </div>
      <div className="mx-2 text-truncate">
        <h2>{props.value}</h2>
      </div>
    </div>
  );
};

export default Label;

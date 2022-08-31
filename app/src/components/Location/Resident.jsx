import './Resident.css'

const Resident = (props) => {
  return (
    <div className="col-xs-12 col-md-6 col-xl-4" >
      <div id={props.item} className="carta-residente py-4">
        <img src={props.image} alt={props.alt} className="rounded-5" />
        <p className="residente">{props.name}</p>
      </div>
    </div>
  );
};

export default Resident;

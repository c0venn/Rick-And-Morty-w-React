const Resident = (props) => {
  return (
    <div className="d-flex align-items-center" id={props.item}>
      <div>
        <img src={props.image} alt={props.alt} />
      </div>
      <div>
        <h1 className="text-white">{props.name}</h1>
      </div>
    </div>
  );
};

export default Resident;

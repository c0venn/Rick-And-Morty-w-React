import Label from "../Shared/Label";
import PropTypes from "prop-types";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="container fluid ">
      <div className="row align-items-center">
        <div className="p-4 col-xs-12 col-md-6">
          <img src={props.img} alt="profile" className="rounded-5" />
        </div>
        <div className="perfil my-1 col-xs-12 col-md-6 justify-content-start ">
          <Label label="Estado" value={props.status} />
          <Label label="Genero" value={props.gender} />
          <Label label="Especie" value={props.species} />
          <Label label="Locación" value={props.location} />
          <Label label="Episodios" value={props.episodes} />
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  episodes: PropTypes.number,
};

export default Card;

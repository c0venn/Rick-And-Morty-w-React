import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Location.css";

const Location = (props) => {
  return (
    <div id={props.item} className="location-card">
      <Link to={props.link} className="fw-bold">
        <h1>{props.name}</h1>
        <h2>{props.dimension}</h2>
        <p>{props.type}</p>
      </Link>
    </div>
  );
};

Location.propTypes = {
  item: PropTypes.number,
  name: PropTypes.string,
  dimension: PropTypes.string,
  type: PropTypes.string,
};

export default Location;

import PropTypes from "prop-types"
import './Character.css'

const Character = (props) => {
    return (
        <div className="text-center my-4 col-xs-12 col-md-6 col-xl-4" >
            <div id={props.itemNumber} className=" card-character py-4 bg-light" >
                <img src={props.src} alt={props.alt} className="rounded-5" />
                <h1 className="text-center text-break" >{props.name}</h1>
                <p>{props.species}</p>
            </div>
        </div>
    )
}

Character.propTypes = {
    itemNumber: PropTypes.number,
    src: PropTypes.string,
    alt: PropTypes.string,
    name: PropTypes.string,
    species: PropTypes.string
}

export default Character
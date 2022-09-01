import { Link } from 'react-router-dom'
import PropTypes from "prop-types"
import './Character.css'

const Character = (props) => {

    return (
        <div className="text-center my-4 col-xs-12 col-md-6 col-xl-4">
            <div id={props.itemNumber} className="card-character py-4" >
                <Link to={props.link}>
                  <img src={props.src} alt={props.alt} className="gocharacter rounded-5" />
                </Link>
                <div className='p-4'>
                <h1 className="text-center text-truncate" >{props.name}</h1>
                <p>{props.species}</p>
                <p>{props.status}</p>
                </div>

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
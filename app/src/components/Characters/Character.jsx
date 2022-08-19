import PropTypes from "prop-types"

const Character = (props) => {
    return (
        <div className="text-center col-xs-12 col-md-6 col-lg-4 col-xl-3" >
            <div id={props.itemNumber} >
                <img src={props.src} alt={props.alt} className="rounded-5" />
                <h1 className="text-center" >{props.name}</h1>
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
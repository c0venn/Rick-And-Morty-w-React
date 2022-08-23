import Label from '../Shared/Label'
import './Card.css'

const Card = (props) => {
    return (
        <div className="row">
            <div className="text-center col-xs-12 col-md-6">
                <h1 className='nombre' >{props.name}</h1>
                <img src={props.img} alt="profile" />
            </div>
            <div className="perfil text-center my-1 col-xs-12 col-md-6">
              <Label label="Estado:" value={props.status} />
              <Label label="Genero:" value={props.gender} />
              <Label label="Especie:" value={props.species}  />
              <Label label="Locación:" value={props.location} />
            </div>
        </div>
    )
}

export default Card
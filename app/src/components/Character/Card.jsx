import Label from '../Shared/Label'
import './Card.css'

const Card = (props) => {
    return (
        <div className="row align-items-center">
            <div className="text-center col-xs-12 col-md-6">
                <h1 className='nombre' >{props.name}</h1>
                <img src={props.img} alt="profile" className='rounded-5' />
            </div>
            <div className="perfil my-1 col-xs-12 col-md-6">
              <Label label="Estado:" value={props.status} />
              <Label label="Genero:" value={props.gender} />
              <Label label="Especie:" value={props.species}  />
              <Label label="Locación:" value={props.location} />
            </div>
        </div>
    )
}

export default Card
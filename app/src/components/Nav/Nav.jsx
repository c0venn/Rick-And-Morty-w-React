import { NavLink } from "react-router-dom"
import './Nav.css'

const Nav = () => {
    return (
        <>
        <div className="navi" >
              <NavLink to="characters">Personajes</NavLink>
              <NavLink to="locations">Locaciones</NavLink>
              <NavLink to="episodes">Episodios</NavLink>
        </div>
        </>
    )
}

export default Nav
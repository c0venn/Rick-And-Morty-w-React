import { NavLink } from "react-router-dom"
import './Nav.css'

const Nav = () => {
    return (
        <>
        <nav className="navbar d-flex justify-content-evenly" >
              <NavLink to="characters">Personajes</NavLink>
              <NavLink to="locations">Locaciones</NavLink>
              <NavLink to="episodes">Episodios</NavLink>
        </nav>
        </>
    )
}

export default Nav
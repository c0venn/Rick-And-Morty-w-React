import { NavLink } from "react-router-dom"

const Nav = () => {
    return (
        <>
          <div className="p-1" >
            <button className="px-auto rounded-5 p-3">
              <NavLink to="characters">Personajes</NavLink>
            </button>
          </div>
          <div className="p-1">
            <button className="px-auto rounded-5 p-3">
              <NavLink to="locations">Locaciones</NavLink>
            </button>
          </div>
          <div className="p-1" >
            <button className="px-auto rounded-5 p-3">
              <NavLink to="episodes">Episodios</NavLink>
            </button>
          </div>
        </>
    )
}

export default Nav
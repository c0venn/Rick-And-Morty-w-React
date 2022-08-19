import Nav from "../Nav/Nav"
import { Outlet } from "react-router-dom"
const Layout = () => {
    return (
        <>
            <header className="" >
                <h1>PokeRick</h1>
            </header>
            <h1 className="text-center">¿Qué buscamos?</h1>
            <div className="d-flex justify-content-center" >
                <Nav />
            </div>
            <Outlet />
        </>
    )
}

export default Layout
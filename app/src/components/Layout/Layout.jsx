import Nav from "../Nav/Nav"
import { Outlet, NavLink } from "react-router-dom"

import './Layout.css'

const Layout = () => {
    return (
        <>
            <header className="logo" >
                <NavLink to="/" className="fs-1" >Poke<span>Rick</span></NavLink>
            </header>
            <Nav />
            <Outlet />
        </>
    )
}

export default Layout
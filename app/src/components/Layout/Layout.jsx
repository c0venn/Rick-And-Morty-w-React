import Nav from "../Nav/Nav"
import { Outlet } from "react-router-dom"
import './Layout.css'

const Layout = () => {
    return (
        <>
            <header className="logo" >
                <h1>Poke<span>Rick</span></h1>
            </header>
            <div className="d-flex justify-content-center" >
                <Nav />
            </div>
            <Outlet />
        </>
    )
}

export default Layout
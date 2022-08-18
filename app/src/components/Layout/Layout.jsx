import Nav from "../Nav/Nav"
import { Outlet } from "react-router-dom"
const Layout = () => {
    return (
        <>
            <header className="" >
                <h1>Rick app</h1>
            </header>
            <div className="text-center" >
                <h1 className="text-center">¿Qué buscamos?</h1>
                <Nav />
            </div>
            <Outlet />
        </>
    )
}

export default Layout
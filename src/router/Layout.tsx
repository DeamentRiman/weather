import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Layout:React.FC = () => {

    const setActiveLink = (({ isActive }:any) => {
        return isActive ? 'appHeaderNavActive' : '';
    });
    
    return (
        <>
            <header className="appHeader">
                <div className="appHeaderNav">
                    <NavLink to="/" className={setActiveLink}>Weather</NavLink>
                    <NavLink to="/Gallery" className={setActiveLink}>Gallery</NavLink>
                </div>
            </header>
            <Outlet />
        </>
    )
};
export default Layout;
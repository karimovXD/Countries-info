import { useState, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";

//API https://restcountries.com/v3.1/all
//REGION https://restcountries.com/v3.1/region/europe
//NAME https://restcountries.com/v3.1/name/eesti

{/*<NavLink to="/">All</NavLink>
<NavLink to="/Asia">Asia</NavLink>
<NavLink to="/Africa">Africa</NavLink>
<NavLink to="/Europe">Europe</NavLink>*/}

function RootLayout() {
    const [handleToggle, setHandleToggle] = useState(false)
    console.log(handleToggle);
    return (
        <>
            <header className="w-full bg-white h-24">
                <nav className="xxl:container xxl:px-20">
                    <div className=""></div>
                    <div className=""></div>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
            <footer></footer>
        </>
    )
}

export default RootLayout
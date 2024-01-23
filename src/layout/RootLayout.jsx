import { useState, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";

//components
import Mode from "../components/Mode";
import Filter from "../components/Filter";

//API https://restcountries.com/v3.1/all
//REGION https://restcountries.com/v3.1/region/europe
//NAME https://restcountries.com/v3.1/name/eesti

function RootLayout() {

    return (
        <>
            <header className="">
                <nav className="w-full bg-white h-20 mb-10 shadow-md">
                    <div className="h-full px-8 flex flex-wrap items-center justify-between xxl:container xxl:px-20 xxl:m-auto">
                        <h1 className="text-xl font-semibold">Where in the world</h1>
                        <Mode />
                    </div>
                </nav>
                <div className="h-auto mb-10 px-8 xxl:container xxl:px-20 md:flex justify-between xxl:m-auto">
                    <div className="h-8 bg-white px-2 mb-5 shadow-md rounded ">
                        <span className="mr-2"><i className="fa-solid fa-magnifying-glass"></i></span>
                        <input type="text" className="w-4/5 md:w-80 h-full outline-none" />
                    </div>
                    <Filter />
                </div>
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
            </footer>
        </>
    )
}

export default RootLayout
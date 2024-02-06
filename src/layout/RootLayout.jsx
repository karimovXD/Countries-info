import { useState, useEffect, useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
//components
import Mode from "../components/Mode";
import Filter from "../components/Filter";
import Input from "../components/Input";

function RootLayout() {

    return (
        <>
            <header>
                <nav className="w-full bg-white h-20 mb-10 shadow-md">
                    <div className="h-full px-8 flex flex-wrap items-center justify-between xxl:container xxl:px-20 xxl:m-auto">
                        <h1 className="text-xl font-semibold">Where in the world</h1>
                        <Mode />
                    </div>
                </nav>
                <div className="h-auto mb-10 px-8 xxl:container xxl:px-20 md:flex justify-between xxl:m-auto">
                    <Input />
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
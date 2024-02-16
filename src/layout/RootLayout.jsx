import React from "react";
import { NavLink, Outlet } from "react-router-dom";
//components
import Mode from "../components/Mode";

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
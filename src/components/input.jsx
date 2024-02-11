import { useState, useContext } from "react"
//context
import { SearchContext } from "../context/MyContext"

function Input() {
    const { searchAll, setSearchAll } = useContext(SearchContext);

    return (
        <div className="h-8 bg-white px-2 mb-10 shadow-md rounded" id="input">
            <span className="mr-2"><i className="fa-solid fa-magnifying-glass"></i></span>
            <input type="text" className="w-4/5 md:w-4/5 h-full outline-none" onChange={search => setSearchAll(search.target.value)} />
        </div>
    )
}

export default Input
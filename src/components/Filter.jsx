import React from 'react'

function Filter() {
    const handleSelect = (e) => {
        const select = e.target.value;
        window.location.href = select;
    }

{/*<NavLink to="/">All</NavLink>
<NavLink to="/Asia">Asia</NavLink>
<NavLink to="/Africa">Africa</NavLink>
<NavLink to="/Europe">Europe</NavLink>*/}

    return (
        <div className="w-40 h-8 md:w-auto">
            <select className="w-40 h-8 px-1 shadow-md rounded" onChange={handleSelect}>
                <option>Select Region</option>
                <option value="/">All</option>
                <option value="/Asia">Asia</option>
                <option value="/Africa">Africa</option>
                <option value="/America">America</option>
                <option value="/Europe">Europe</option>
            </select>
        </div>
    )
}

export default Filter
import React from 'react'
import { Link } from 'react-router-dom';

function Back() {
    return (
        <div className="mb-14 h-auto px-8 xxl:container xxl:px-20 md:flex xxl:m-auto xxl:mb-10">
            <Link to='/' className="bg-white rounded-md px-7 py-3 shadow-md">
                <button className="">
                    <i className="fa-solid fa-arrow-left"></i> Back
                </button>
            </Link>
        </div>
    )
}

export default Back;
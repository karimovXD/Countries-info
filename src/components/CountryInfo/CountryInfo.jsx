import { useState, useEffect } from 'react'
import './CountryInfo.scss'


function CountryInfo(country) {
    console.log(country);

    return (
        <div className="flex-wrap flex-col h-auto px-8 xxl:container xxl:px-20 md:flex xxl:m-auto justify-left lg:flex-row">
            <div className="w-full mr-10 h-auto mb-8 lg:mb-0 lg:w-auto" id='flag'><img src={country.country.flags.png} alt="" className="w-96" /></div>
            <div className='w-full h-auto flex flex-col items-left justify-center lg:w-3/6' id='global-div'>
                <h1 className="font-bold text-5xl text-left mb-5">{country.country.name.common}</h1>
                <div className="flex items-start justify-between flex-col lg:flex-row" id="about-div">
                    <div className='flex flex-col text-left items-start justify-start mb-8 lg:m-0'>
                        <ul className='flex items-center justify-start'>
                            <li className=''><h3>Native Name:</h3></li>
                            <li className='font-light text-secondary'><p>{Object.values(country.country.name.nativeName)[0].official}</p></li>
                        </ul>
                        <ul>
                            <li><h3>Population:</h3></li>
                            <li><p>{country.country.population}</p></li>
                        </ul>
                        <ul>
                            <li><h3>Region:</h3></li>
                            <li><p>{country.country.region}</p></li>
                        </ul>
                        <ul>
                            <li><h3>Sub Region:</h3></li>
                            <li><p>{country.country.subregion}</p></li>
                        </ul>
                        <ul>
                            <li><h3>Capital:</h3></li>
                            <li><p>{country.country.capital}</p></li>
                        </ul>
                    </div>
                    <div className="" id="second-about-div">
                        <ul>
                            <li><h3>Top Level Domain:</h3></li>
                            <li><p>{country.country.tld}</p></li>
                        </ul>
                        <ul>
                            <li><h3>Currencies:</h3></li>
                            <li><p>{Object.values(country.country.currencies)[0].name}</p></li>
                        </ul>
                        <ul>
                            <li><h3>Languages:</h3></li>
                            <li><p>{Object.values(country.country.languages)}</p></li>
                        </ul>
                    </div>
                </div>
                <div className=""></div>
            </div>
        </div>
    )
}

export default CountryInfo
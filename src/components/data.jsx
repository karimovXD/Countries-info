import { useState, useEffect } from "react";
import axios from "axios";
//API https://restcountries.com/v3.1/all
//REGION https://restcountries.com/v3.1/region/europe
//NAME https://restcountries.com/v3.1/name/eesti

//components

//state

export function NewAll() {
    const [allURL, setAllURL] = useState('https://restcountries.com/v3.1/all?fields=name,capital,flags,population,region')
    const [allCountries, setAllCountries] = useState()
    const [searchAll, setSearchAll] = useState('')


    useEffect(() => {
        axios.get(allURL)
            .then(dataResult => dataResult.data)
            .then(result => setAllCountries(result))
    }, [allURL])

    return (
        <>
            <div className="h-8 bg-white px-2 mb-10 shadow-md rounded" id="input">
                <span className="mr-2"><i className="fa-solid fa-magnifying-glass"></i></span>
                <input type="text" className="w-4/5 md:w-4/5 h-full outline-none" onChange={e => setSearchAll(e.target.value)} />
            </div>
            <div className="flex-wrap h-auto mb-10 px-8 xxl:container xxl:px-20 md:flex xxl:m-auto justify-between gap-14">
                {
                    allCountries && allCountries.filter(item => {
                        return searchAll.toLowerCase() == '' ? item : item.name.common.toLowerCase().includes(searchAll)
                    }).map((item, i) => {
                        return (
                            <div key={i} className="w-full mb-14 p-5 text-center flex flex-col items-center justify-center sm:p-0 sm:text-left sm:justify-start sm:m-0 sm:w-auto sm:h-auto bg-white rounded">
                                <div className="w-64 h-36"><img src={item.flags.png} alt="" className="w-full h-full" /></div>
                                <div className="w-64 h-a px-5 py-6">
                                    <h1 className="text-xl font-semibold mb-4">{item.name.common}</h1>
                                    <h3 className="font-medium">Population: <span className="font-normal text-secondary">{item.population}</span></h3>
                                    <h3 className="font-medium">Region: <span className="font-normal text-secondary">{item.region}</span></h3>
                                    <h3 className="font-medium">Capital: <span className="font-normal text-secondary">{item.capital}</span></h3>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export function NewAsia() {
    const [asiaURL, setAsiaURL] = useState('https://restcountries.com/v3.1/region/asia?fields=name,capital,flags,population,region');
    const [asia, setAsia] = useState();

    useEffect(() => {
        axios.get(asiaURL)
            .then(result => result.data)
            .then(setResult => setAsia(setResult))
    }, [asiaURL])

    return (
        <div className="flex-wrap h-auto mb-10 px-8 xxl:container xxl:px-20 md:flex xxl:m-auto justify-between gap-14">
            {
                asia && asia.map((item, i) => {
                    return (
                        <div key={i} className="w-full mb-14 p-5 text-center flex flex-col items-center justify-center sm:p-0 sm:text-left sm:justify-start sm:m-0 sm:w-auto sm:h-auto bg-white rounded">
                            <div className="w-64 h-36"><img src={item.flags.png} alt="" className="w-full h-full" /></div>
                            <div className="w-64 h-a px-5 py-6">
                                <h1 className="text-xl font-semibold mb-4">{item.name.common}</h1>
                                <h3 className="font-medium">Population: <span className="font-normal text-secondary">{item.population}</span></h3>
                                <h3 className="font-medium">Region: <span className="font-normal text-secondary">{item.region}</span></h3>
                                <h3 className="font-medium">Capital: <span className="font-normal text-secondary">{item.capital}</span></h3>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export function NewAfrica() {
    const [africaURL, setAfricaURL] = useState('https://restcountries.com/v3.1/region/africa?fields=name,capital,flags,population,region');
    const [africa, setAfrica] = useState();

    useEffect(() => {
        axios.get(africaURL)
            .then(result => result.data)
            .then(setResult => setAfrica(setResult))
    }, [africaURL])

    return (
        <div className="flex-wrap h-auto mb-10 px-8 xxl:container xxl:px-20 md:flex xxl:m-auto justify-between gap-14">
            {
                africa && africa.map((item, i) => {
                    return (
                        <div key={i} className="w-full mb-14 p-5 text-center flex flex-col items-center justify-center sm:p-0 sm:text-left sm:justify-start sm:m-0 sm:w-auto sm:h-auto bg-white rounded">
                            <div className="w-64 h-36"><img src={item.flags.png} alt="" className="w-full h-full" /></div>
                            <div className="w-64 h-a px-5 py-6">
                                <h1 className="text-xl font-semibold mb-4">{item.name.common}</h1>
                                <h3 className="font-medium">Population: <span className="font-normal text-secondary">{item.population}</span></h3>
                                <h3 className="font-medium">Region: <span className="font-normal text-secondary">{item.region}</span></h3>
                                <h3 className="font-medium">Capital: <span className="font-normal text-secondary">{item.capital}</span></h3>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export function NewAmerica() {
    const [americaURL, setAmericaURL] = useState('https://restcountries.com/v3.1/region/america?fields=name,capital,flags,population,region');
    const [america, setAmerica] = useState();

    useEffect(() => {
        axios.get(americaURL)
            .then(result => result.data)
            .then(setResult => setAmerica(setResult))
    }, [americaURL]);

    return (
        <div className="flex-wrap h-auto mb-10 px-8 xxl:container xxl:px-20 md:flex xxl:m-auto justify-between gap-14">
            {
                america && america.map((item, i) => {
                    return (
                        <div key={i} className="w-full mb-14 p-5 text-center flex flex-col items-center justify-center sm:p-0 sm:text-left sm:justify-start sm:m-0 sm:w-auto sm:h-auto bg-white rounded">
                            <div className="w-64 h-36"><img src={item.flags.png} alt="" className="w-full h-full" /></div>
                            <div className="w-64 h-a px-5 py-6">
                                <h1 className="text-xl font-semibold mb-4">{item.name.common}</h1>
                                <h3 className="font-medium">Population: <span className="font-normal text-secondary">{item.population}</span></h3>
                                <h3 className="font-medium">Region: <span className="font-normal text-secondary">{item.region}</span></h3>
                                <h3 className="font-medium">Capital: <span className="font-normal text-secondary">{item.capital}</span></h3>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export function NewEurope() {
    const [europeURL, setEuropeURL] = useState('https://restcountries.com/v3.1/region/europe?fields=name,capital,flags,population,region');
    const [europe, setEurope] = useState();

    useEffect(() => {
        axios.get(europeURL)
            .then(result => result.data)
            .then(setResult => setEurope(setResult))
    }, [europeURL])

    return (
        <div className="flex-wrap h-auto mb-10 px-8 xxl:container xxl:px-20 md:flex xxl:m-auto justify-between gap-14">
            {
                europe && europe.map((item, i) => {
                    return (
                        <div key={i} className="w-full mb-14 p-5 text-center flex flex-col items-center justify-center sm:p-0 sm:text-left sm:justify-start sm:m-0 sm:w-auto sm:h-auto bg-white rounded">
                            <div className="w-64 h-36"><img src={item.flags.png} alt="" className="w-full h-full" /></div>
                            <div className="w-64 h-a px-5 py-6">
                                <h1 className="text-xl font-semibold mb-4">{item.name.common}</h1>
                                <h3 className="font-medium">Population: <span className="font-normal text-secondary">{item.population}</span></h3>
                                <h3 className="font-medium">Region: <span className="font-normal text-secondary">{item.region}</span></h3>
                                <h3 className="font-medium">Capital: <span className="font-normal text-secondary">{item.capital}</span></h3>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
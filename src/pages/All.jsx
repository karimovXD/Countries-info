import { useState, useEffect } from "react"
import axios from "axios"

function All() {
  const [allURL, setAllURL] = useState('https://restcountries.com/v3.1/all?fields=name,capital,flags,population,region')
  const [allCountries, setAllCountries] = useState()

  useEffect(() => {
    axios.get(allURL)
      .then(dataResult => dataResult.data)
      .then(result => setAllCountries(result))
  }, [allURL])
  console.log(allCountries);

  return (
    <div className="flex-wrap h-auto mb-10 px-8 xxl:container xxl:px-20 md:flex xxl:m-auto justify-between gap-14">
      {
        allCountries && allCountries.map(item => {
          return (
            <div className="w-full mb-14 p-5 text-center flex flex-col items-center justify-center sm:p-0 sm:text-left sm:justify-start sm:m-0 sm:w-auto sm:h-auto bg-white rounded">
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

export default All
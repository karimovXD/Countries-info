import { useState, useEffect, useContext } from "react";
//components
import { SearchContext, FilterContext } from "../context/MyContext";
import CardSkeleton from "../components/skeleton/CardSkeleton";
//server
import { NavLink } from "react-router-dom";
import axios from "axios";
//sekelot-loader
import { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

//component
function All() {

  //hooks
  const [allURL, setAllURL] = useState('https://restcountries.com/v3.1/all?fields=name,capital,flags,population,region');
  const [allCountries, setAllCountries] = useState();
  const searchItem = useContext(SearchContext);
  const filterItem = useContext(FilterContext);
  const [isLoading, setIsLoading] = useState(true)

  //useEffect
  useEffect(() => {
    axios.get(allURL)
      .then(dataResult => dataResult.data)
      .then(result => setAllCountries(result) || setIsLoading(false))
  }, [allURL])

  //render  
  return (
    <>
      <div className="flex-wrap h-auto mb-10 px-8 xxl:container xxl:px-20 md:flex xxl:m-auto justify-between gap-14">
        <SkeletonTheme baseColor="rgb(203, 203, 203)" highlightColor="#e8ffd1">
          {
            isLoading ?
              <>
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />

              </>
              :
              allCountries && allCountries.filter(item => {
                if (!searchItem && filterItem.filterV == '') {
                  return item
                } else {
                  return item.name.common.toLowerCase().includes(searchItem.searchAll) && item.region.includes(filterItem.filterV)
                }
              }).map((item, i) => {
                return (
                  <NavLink to="/About" key={i} className="bg-white">
                    <div className="w-full h-auto mb-14 p-5 text-center flex flex-col items-center justify-center sm:p-0 sm:text-left sm:justify-start sm:m-0 sm:w-auto sm:h-auto cursor-pointer">
                      <div className="w-64 h-36"><img src={item.flags.png} alt="" className="w-full h-full" /></div>
                      <div className="w-64 h-full px-5 py-6">
                        <h1 className="text-xl font-semibold mb-4">{item.name.common}</h1>
                        <h3 className="font-medium">Population: <span className="font-normal text-secondary">{item.population}</span></h3>
                        <h3 className="font-medium">Region: <span className="font-normal text-secondary">{item.region}</span></h3>
                        <h3 className="font-medium">Capital: <span className="font-normal text-secondary">{item.capital}</span></h3>
                      </div>
                    </div>
                  </NavLink>
                )
              })
          }
        </SkeletonTheme>
      </div>
    </>
  )
}

export default All
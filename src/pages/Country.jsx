import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import axios from "axios";

//skeleton
import { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import InfoSkeleton from '../components/skeleton/InfoSkeleton'

//components
import Back from "../components/back/Back";
import CountryInfo from "../components/CountryInfo/CountryInfo";
import { searchByCountry } from "../config";


function Country() {
  //route
  const { name } = useParams();
  const [country, setCountry] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get(searchByCountry(name)).then(({ data }) => setCountry(data[0]) || setIsLoading(false));
  }, [name])

  return (
    <>
      <Back />
      <SkeletonTheme baseColor="rgb(203, 203, 203)" highlightColor="#e8ffd1">{
        isLoading ?
          <><InfoSkeleton /></> :
          country && <CountryInfo country={country} />
      }</SkeletonTheme>
    </>
  )
}

export default Country;
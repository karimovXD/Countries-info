import { useState, useEffect } from "react"
import axios from "axios";

function Error() {
  const [europeURL, setEuropeURL] = useState('https://restcountries.com/v3.1/region/europe?fields=name,capital,flags,population,region');

  return (
    <>
    </>
  )
}

export default Error
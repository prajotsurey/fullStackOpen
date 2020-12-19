import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Search from './components/Search'
import Display from './components/Display' 

const App = () => {
  const [countries, setCountries] = useState([])
  const [countryFilter,setCountryFilter] = useState('')

  const handleChange = (event) =>{
    setCountryFilter(event.target.value)
  }

  const result = countryFilter === '' ? [] : countries.filter(country => country.name.toUpperCase().search(countryFilter.toUpperCase()) !== -1 )
  const countryCount = result.length

  useEffect(()=>{
    axios
    .get('https://restcountries.eu/rest/v2/all')
    .then(response => {
      setCountries(response.data)
    })
  },[])

  return(
    <div>
      <Search search = {countryFilter} handleChange = {handleChange}/>
      <Display result = {result} countryCount = {countryCount}/>  
    </div>
  )

}

export default App
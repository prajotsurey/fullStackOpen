import React from 'react'

const Search = ({countryFilter,handleChange}) => {
    return(
      <div>
        find countries <input value={countryFilter} onChange={handleChange}></input>
      </div>
    )    
}

export default Search
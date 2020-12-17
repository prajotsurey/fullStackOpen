import React from 'react'
const Search = ({filter, handleFilterChange}) => {

    return(
        <div>
            filter shown with
            <input value={filter} onChange={handleFilterChange}/>
        </div>
    )

}
export default Search
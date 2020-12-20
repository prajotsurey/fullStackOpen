import React from 'react'
import Weather from './Weather';

const Display = ({result,countryCount,setCountryFilter}) => {
    if (countryCount === 0){
      return(
        <div></div>
      )
    }
    else if(countryCount > 10 ){
      return(
        <div>Too many matches, specify another filter</div>
      ) 
    }
    else if(countryCount > 1){
      return(
        <div>
          {
          result.map(
            (country,index) => 
                <li key={index}>
                    {country.name} 
                    <button onClick={() =>{setCountryFilter(country.name)}}>
                        show
                    </button>
                </li>
          )
          }
        </div>
      )
    }
    else{
      return(
        <div>
          <h1>{result[0].name}</h1>
          <div>capital {result[0].capital}</div>
          <div>population {result[0].population}</div>
          <h2>languages</h2>
          {
            result[0].languages.map(
              (language,index) => <li key={index}>{language.name}</li> 
            )
          }
          <br/>
          <img src={result[0].flag} alt={result[0].name + ' flag'} height='100px'></img>
          <Weather country={result[0].name}/>
        </div>
      )
    }
}

export default Display
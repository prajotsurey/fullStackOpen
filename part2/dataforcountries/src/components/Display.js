import React from 'react'

const Display = ({result,countryCount}) => {
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
            (country,index) => <li key={index}>{country.name}</li>
          )
          }
        </div>
      )
    }
    else{
      console.log(result)
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
          <img src={result[0].flag} height='100px'></img>
        </div>
      )
    }
}

export default Display
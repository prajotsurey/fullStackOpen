import React , {useState,useEffect} from 'react'
import axios from 'axios'
const Weather = ({country}) => {
    const [weather,setWeather] = useState([])
    const api_key = process.env.REACT_APP_API_KEY
    useEffect(()=>{
        const params={
            access_key : api_key,
            query : country
          }
        axios
        .get('http://api.weatherstack.com/current', {params})
        .then(response => {
            setWeather(response.data)
        })
    },[api_key,country])
    
    if(weather.location){
        return(
            <div>
                <h2>Weather in {weather.location.name}</h2>
                <b>temperature: </b> {weather.current.temperature} Celsius
                <br></br>
                <b>wind: </b>{weather.current.wind_speed} mph direction {weather.current.wind_dir}
            </div>
            )
    }
    else{
        return(
            <div></div>
        )
    }
}

export default Weather
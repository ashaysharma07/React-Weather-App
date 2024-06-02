import Search from "./Search.jsx"
import Infobox from "./InfoBox.jsx"
import { useState } from "react"

export default function Weather (){

    const [WeatherInfo , setWeatherInfo] = useState({
        City : "Delhi" , 
        Description : "few clouds" , 
        Feels_Like: 28.84 , 
        Humidity: 73,
        MaxTemp: 26.85,
        MinTemp: 26.85,
        Temp: 26.85,
    }
    );
   let updateinfo = (newinfo) =>{
    setWeatherInfo(newinfo)
   }
    return (
        <div>
            <h3>Weather App</h3>
    <Search  updateinfo = {updateinfo}/>
    <Infobox info = {WeatherInfo} />
    </div>
    )
}

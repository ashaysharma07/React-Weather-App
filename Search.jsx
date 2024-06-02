import { useState, useRef } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./Search.css";

function Search({updateinfo}) {
    const [City, setCity] = useState("");
    const [Err, setErr] = useState(false);
    const cityInputRef = useRef(null);

    

const API_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "8f60a7de149465a69dcd5d531196bbb2";

let getWeatherInfo = async() => {
    try {
        let response = await fetch(`${API_URL}?q=${City}&appid=${API_KEY}&units=metric`);
    let JsonResponse =  await response.json() ;
    
    let Result = {
       City : City , 
       Temp : JsonResponse.main.temp ,
       Feels_Like : JsonResponse.main.feels_like,
       Humidity : JsonResponse.main.humidity,
       MaxTemp :  JsonResponse.main.temp_max,
       MinTemp :  JsonResponse.main.temp_min,
       Description : JsonResponse.weather[0].description ,
    }
    console.log(Result);
    return Result
   }
   catch(err) {
    throw(err)
   
   }
}
  

async function  HandleSubmit(evt) {
    try {evt.preventDefault();
        if (cityInputRef.current && cityInputRef.current.value) {
            setCity("");  
            cityInputRef.current.value = ""; 
            console.log(City);
           let newinfo =  await getWeatherInfo();
           updateinfo(newinfo);
        }}
    catch(err){
        setErr(true)
    }
}


    return (
        <div>
            <h5>Search For the Weather</h5>
            <form action="" onSubmit={HandleSubmit}>
                <TextField
                    id="city"
                    label="City Name"
                    variant="outlined"
                    required
                    value={City}
                    onChange={(e) => setCity(e.target.value)}
                    inputRef={cityInputRef}
                />  &nbsp;&nbsp;
                <Button variant="contained" type="submit" className='Search'> Search </Button>
                {Err && <p>No Such Place Exist!!!!</p>}
            </form>
        </div>
    );
}

export default Search;

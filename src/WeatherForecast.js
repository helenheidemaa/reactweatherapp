import React, { useState } from 'react';

import './WeatherForecast.css';
import axios from 'axios';
import WeatherForecastDay from './WeatherForecastDay';

export default function  WeatherForecast(props){
    let [loaded,setLoaded]=useState(false);
    let [forecast,setForecast]=useState(null);

    function handleResponse(response){
    console.log(response.data);
    setForecast(response.data.daily);
    setLoaded(true);
    }
   
    if(loaded){
return(
    <div className='WeatherForecast'>
    <div className='row'>
    <div className='col'>
    <WeatherForecastDay data={forecast[0]}/>
</div>
</div>
</div>
    );
    

    }else{
    let apiKey = '5293d8454b519c30f6f6331f38c85b4c';
    let longitud= props.coordinates.lon;
    let latitud = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitud}&lon=${longitud}&appid=${apiKey}&units=metric`

    axios.get(apiUrl).then(handleResponse)

return null;
    }
}
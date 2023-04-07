import React from 'react';
import WeatherIcon from './WeatherIcon';
import './WeatherForecast.css';
import axios from 'axios';

export default function  WeatherForecast(props){
    function handleResponse(response){
    console.log(response.data);
    }

    let apiKey = '5293d8454b519c30f6f6331f38c85b4c';
    let longitud= props.coordinates.lon;
    let latitud = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitud}&lon=${longitud}&appid=${apiKey}&units=metric`

    axios.get(apiUrl).then(handleResponse)

    return(
        <div className='WeatherForecast'>
<div className='row'>
<div className='col'>
    <div className='WeatherForecast-day'>Thu</div>
    <WeatherIcon code="01d" size= {30}/>
    <div className='WeatherForecast-temperature'> 
        <span className='WeatherForecast-temperature-max'>10°C|</span>
        <span className='WeatherForecast-temperature-min'>19°C </span>
    </div>
</div>
</div>
</div>
    )
}
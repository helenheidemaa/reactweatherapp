import React from 'react';
import WeatherIcon from './WeatherIcon';

export default function  WeatherForecastDay(props){

    function maxTemperature(){
    let temperature = Math.round(props.data.temp.max);
    return `${temperature} °C|`
}

function minTemperature(){
    let temperature = Math.round(props.data.temp.max);
    return `${temperature} °C`
}

function day(){
    let date = new Date (props.date.dt*1000);
    let day=date.getDay();
    let days =['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];
    return days;
}

    return(
        <div>
        <div className='WeatherForecast-day'>
        {day()}</div>
    <WeatherIcon code={props.data.weather[0].icon} size= {30}/>
    <div className='WeatherForecast-temperature'> 
        <span className='WeatherForecast-temperature-max'>
            {maxTemperature()} </span>
        <span className='WeatherForecast-temperature-min'>
            {minTemperature()} </span>
    </div>
</div>
    )
}
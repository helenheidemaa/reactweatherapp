import React,{useState} from 'react';
import './Weather.css';
import axios from 'axios';

export default function Weather (props){
    let[weatherData, setWeatherData] =useState({ready: false});
 
    function handleResponse(response){
       console.log(response.data);

       setWeatherData({
        ready:true,
        temperature: response.data.main.temperature,
        wind: response.data.wind.speed,
        date: 'Wednesday 07:00',
        city: response.data.name,
        description: response.data.weather[0].description,
        humidity: response.data.main.humidity,
        iconUrl: 'Hello'
       });
     
  
    }

 if (weatherData.ready){
 return(
        <div className='Weather'>
            <form>
            <div className='row'>
            <div className='col-9'>
            <input 
            type="Search" 
            placeholder='Search for the city'
            className='form-control'
            autoFocus= 'on'
            />
             </div>
             <div className='col-3'>
            <input type="Submit" 
            value="Search" 
            className='btn btn-primary w-100' />
           
            </div>
                </div>
             </form>
            <h1> {weatherData.city}</h1>
            <ul>
                <li> {weatherData.date}</li>
                <li className='text-capitalize'>  {weatherData.description} </li>
            </ul>
<div className='row mt-3'>
<div className='col-6'>
    <div className='clearfix'>
     
<img 
src={weatherData.iconUrl} 
alt={weatherData.description} 
className='float-left'>   

</img>
<div className='float-left'>


<span className='temperature'> {Math.round(weatherData.city)}</span>
<span className='unit'> °C</span>
</div>
</div>  
</div>
<div className='col-6'>
<ul>
    <li> {weatherData.humidity} </li>
    <li> {weatherData.wind}</li>
</ul>

</div>
</div>

        </div>
    );
    } else{

    let apiKey = '5293d8454b519c30f6f6331f38c85b4c';
    let apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultcity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return 'Loading...'

    }
}
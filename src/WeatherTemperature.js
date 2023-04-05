import React,{useState} from 'react';

export default function WeatherTemperature(props){
    let {unit, setUnit} = useState("celsius");

function showFahrenheit(event){
event.preventDefault();
setUnit("fahrenhei")
}

function showCelsius(event){
event.preventDefault();
setUnit("celsius")
}


if (unit==='Celsius') {
    return(
        <div className='WeatherTemperature'>
<span className="temperature">
    {Math.round(props.celsius)}
</span>
<span className="uints">
 <a href='/' >C | {" "} </a>
 <a onClick={showFahrenheit}> F</a>
</span> 
</div>
    );
}else{
let fahrenheit=(props.celsius * 9/5)+32  

    return (
        <div className='WeatherTemperature'>
<span className="temperature">
    {Math.round(fahrenheit)}
</span>
<span className="uints">
 <a href='/' onClick={showCelsius}> C </a>
 <a > {" "}| F</a>
</span> 
</div>
    );
}
}
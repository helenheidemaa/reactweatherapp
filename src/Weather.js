import React from 'react';
import './Weather.css';

export default function Weather (){
    return(
        <div className='Weather'>
            <form>
            <div className='row'>
            <div className='col-9'>
            <input type="Search" 
            placeholder='Search for the city'
            className='form-control'
            />
             </div>
             <div className='col-3'>
            <input type="Submit" value="Search" className='btn btn-primary ' />
           
            </div>
                </div>
             </form>
            <h1> New York</h1>
            <ul>
                <li> Wednesday 07:00</li>
                <li>  Mostly Cloudy </li>
            </ul>
<div className='row'>
<div className='col-6'>
<img 
src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F000%2F550%2F828%2Foriginal%2Fsun-icon-vector.jpg&tbnid=kedxNKCGh3zGKM&vet=12ahUKEwj5k-2ztYT-AhUByioKHdCeCEYQMygAegUIARC5AQ..i&imgrefurl=https%3A%2F%2Fwww.vecteezy.com%2Ffree-vector%2Fsun-icon&docid=z0Z0r3nxJfPm6M&w=5000&h=5000&q=sun%20icon&ved=2ahUKEwj5k-2ztYT-AhUByioKHdCeCEYQMygAegUIARC5AQ" alt="Sunny">   
</img>
7°C
</div>
<div className='col-6'>


<ul>
    <li> Humidity: 72 </li>
    <li> Wind: 13 km/h</li>
</ul>

</div>
</div>

        </div>
    )

}